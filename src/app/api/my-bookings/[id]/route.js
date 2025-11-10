import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server"

export const GET = async (req, {params}) => {

	const { p } = await params;
	const bookingCollections = DatabaseConnect(collectionNames.CHECKOUT_COLLECTION);

	const query = {_id: new ObjectId(p.id)}

	const singleBooking = await bookingCollections.findOne(query);
	if (!singleBooking) {
		return NextResponse.json({status: 404, message: "Data Not Found!"})
	}
	return NextResponse.json(singleBooking)
}