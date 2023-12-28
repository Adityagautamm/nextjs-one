//to set up a model if you have a DB and make connection
//import Prompt from "@models/prompt";
//import { connectToDB } from "@utils/database";
import mongoose from "mongoose";
import dbConnect from "../../../db/db";
import sneakers from "../../../db/models/sneakerDetails";

export const GET = async (request) => {
  // let db;
  let sneakerData;
  try {
    //   // await connectToDB();
    // await connectToDb((err) => {
    //   if (!err) {
    //     console.log("DB connection is working");
    //     db = getDb();
    //   } else {
    //     console.log("DB not working");
    //   }
    // });

    await dbConnect();

    // try {
    //   const collection = db.collection("sneakerDetails");
    //   sneakerData = await collection.find({}).toArray();
    //   console.log("sneaker data is here");
    // }

    try {
      console.log(
        "mongo connection ready state",
        mongoose.connection.readyState
      );
      sneakerData = await sneakers.find({});
      console.log("sneakerData", JSON.stringify(sneakerData));
    } catch (error) {
      console.log("collection fetching error", error);
      return new Response("Failed to fetch the brands data", { status: 500 });
    }

    // db.collection("sneakerDetails")
    //   .find()
    //   .then((data) => {
    //     // forEach((data) => {
    //     //   console.log("sneakerDetails collection data", data);
    //     // });
    //     console.log("sneakerDetails collection data");
    //   })
    //   .catch(() => {
    //     console.log("Mongo db data connect issue");
    //   });
    // net ninja video 17 for mongo db, great way to do response
    return new Response(JSON.stringify(sneakerData), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the brands data", { status: 500 });
  }
};
