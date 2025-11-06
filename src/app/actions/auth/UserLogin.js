"use server"
import bcrypt from "bcrypt"

import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";

export const UserLogin = async (payload) => {
	const { email, password } = payload;

	const userCollection = DatabaseConnect(collectionNames.USER_COLLECTIONS);
	const user = await userCollection.findOne({ email });

	if (!user) return null;
	const isPasswordOk = bcrypt.compare(user.password, password);
	
	if (!isPasswordOk) return null;

	return user;

}