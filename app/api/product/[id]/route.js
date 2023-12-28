import { connectToDb, getDb } from "../../db/db";
export const GET = async (request, { params }) => {
  //DB
  let db;
  var productData;
  const productId = params.id;
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
      productData = await collection.findById(productId);
      console.log(" product data is here");
    } catch (error) {
      console.log("collection fetching error", error);
    }

    return new Response(JSON.stringify(productData), { status: 200 });
  } catch (error) {
    return new Response("ailed to fetch the user with id", {
      status: 500,
    });
  }
};
