//to set up a model if you have a DB and make connection
//import Prompt from "@models/prompt";
//import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    // await connectToDB();

    //const prompts = await Prompt.find({}).populate("creator");
    const data = [
      { name: "one", price: "$50", image: "one.webp" },
      { name: "two", price: "$40", image: "one.webp" },
      { name: "three", price: "$60", image: "one.webp" },
      { name: "four", price: "$70", image: "one.webp" },
      { name: "five", price: "$80", image: "one.webp" },
    ];

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch the brands data", { status: 500 });
  }
};
