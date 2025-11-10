import { authOptions } from "@/lib/AuthOption";
import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const DELETE = async (req, {params}) => {
	const checkoutCollections = DatabaseConnect(collectionNames.CHECKOUT_COLLECTION)
	const p = await params;
	const query = { _id: new ObjectId(p.id) };


	// validations
	const session = await getServerSession(authOptions);
	const currentBooking = await checkoutCollections.findOne(query);


	const isOwnerOk = session?.user?.email === currentBooking?.email;

	if (isOwnerOk) {
		const deleteResponse = await checkoutCollections.deleteOne(query);
		revalidatePath("/my-bookings")
		return NextResponse.json(deleteResponse);
	} else {
		return NextResponse.json({success: false, message: "Forbidden Access"}, {status: 401})
	}
}

export const GET = async (req, { params }) => {
  const p = await params;
  const id = await p.id;
  const filter = { _id: new ObjectId(id) };
  const serviceResponse = DatabaseConnect(collectionNames.OUR_SERVICES);
  const data = await serviceResponse.findOne(filter);

	return NextResponse.json(data);
};
