"use server";
import { collectionNames } from "@/lib/CollectionNames";
import DatabaseConnect from "@/lib/DatabaseConnect";
import bcrypt from "bcrypt";

export const UserRegister = async (payload) => {
  const { email, password } = payload;
  const hasPass = await bcrypt.hash(password, 10);

  payload.password = hasPass;

  if (!email || !password) return null;

  const userCollection = DatabaseConnect(collectionNames.USER_COLLECTIONS);
  const user = await userCollection.findOne({ email });

  if (!user) {
    const result = await userCollection.insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  }
  return null;
};
