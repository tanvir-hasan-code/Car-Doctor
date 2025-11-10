import { authOptions } from "@/lib/AuthOption";
import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export const GET = async (req) => {
	const session = await getServerSession(authOptions);

	const checkoutCollections = DatabaseConnect(collectionNames.CHECKOUT_COLLECTION); 

	if (session) {
		const email = session?.user?.email;
		const result = await checkoutCollections.find({ email }).toArray();
		return NextResponse.json(result);
	}
	return NextResponse.json({});

}




export const POST = async (req) => {
  const payload = await req.json();

  const checkoutCollections = DatabaseConnect(
    collectionNames.CHECKOUT_COLLECTION
  );

  const response = await checkoutCollections.insertOne(payload);

  return NextResponse.json(response);
};
