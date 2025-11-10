import { authOptions } from "@/lib/AuthOption";
import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
	const session = await getServerSession(authOptions);
	const email = session?.user?.email;
  const bookingCollections = DatabaseConnect(
    collectionNames.CHECKOUT_COLLECTION
  );
  const query = { _id: new ObjectId(p.id) };

  
  const singleBooking = await bookingCollections.findOne(query);
  const isOwnerOk = email === singleBooking?.email;
  if (!singleBooking) {
    return NextResponse.json({ status: 404, message: "Data Not Found!" });
  }
	if (isOwnerOk) {
	  return NextResponse.json(singleBooking);
	} else {
		return NextResponse.json({message: "forbidden access"},{status: 403});
  }
};

export const PATCH = async (req, { params }) => {

	const p = await params;
	const body = await req.json();
	const session = await getServerSession(authOptions);
	const email = session?.user?.email

  const bookingCollections = DatabaseConnect(
    collectionNames.CHECKOUT_COLLECTION
  );

  
  const query = { _id: new ObjectId(p.id) };
	const currentData = await bookingCollections.findOne(query)
	
	const isOwnerOk = email === currentData?.email;


	const filter = {
	  $set:{...body}
	}
	const options = {
		upsert: true
	}

	if (isOwnerOk) {
		const result = await bookingCollections.updateOne(query, filter, options);
		revalidatePath("/my-bookings")
		return NextResponse.json(result);
	} else {
		return NextResponse.json({message: "Forbidden Access"},{status: 403})
	}
	
	
};
