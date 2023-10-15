//to set up a model if you have a DB and make connection
//import Prompt from "@models/prompt";
//import { connectToDB } from "@utils/database";

import { connectToDb, getDb } from "../../../../../db/db";

export const GET = async (request) => {
  let db;
  try {
    //   // await connectToDB();
    await connectToDb((err) => {
      if (!err) {
        console.log("DB connection is working");
        db = getDb();
      } else {
        console.log("DB not working");
      }
    });

    try {
      const collection = db.collection("sneakerDetails");
      const sneakerData = await collection.find({}).toArray();
      console.log("sneaker data is here", JSON.stringify(sneakerData));
    } catch (error) {
      console.log("collection fetching error", error);
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

    const data = [
      { name: "one", price: "$50", image: "one.webp" },
      { name: "two", price: "$40", image: "one.webp" },
      { name: "three", price: "$60", image: "one.webp" },
      { name: "four", price: "$70", image: "one.webp" },
      { name: "five", price: "$80", image: "one.webp" },
      { name: "six", price: "$50", image: "one.webp" },
      { name: "seven", price: "$40", image: "one.webp" },
      { name: "eight", price: "$60", image: "one.webp" },
      { name: "nine", price: "$70", image: "one.webp" },
      { name: "ten", price: "$80", image: "one.webp" },
    ];

    // net ninja video 17 for mongo db, great way to do response
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the brands data", { status: 500 });
  }
};
