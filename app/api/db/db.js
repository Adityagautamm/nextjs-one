import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/sneakerstore";

const dbConnect = async () => {
  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    }
  }
};

export default dbConnect;

// using Ong Client, working code below /////////////////////////////////////
// import { MongoClient } from "mongodb";

// // Connection URL
// const url = "mongodb://127.0.0.1:27017/sneakerstore";
// // mongodb://127.0.0.1:27017/sneakerstore
// //mongodb://localhost:27017/sneakerstore
// //const client = new MongoClient(url);
// let dbConnection;
// // Database Name
// const dbName = "sneakerstore";

// module.exports = {
//   connectToDb: async (cb) => {
//     await MongoClient.connect(url, {})
//       .then((client) => {
//         dbConnection = client.db();
//         return cb();
//       })
//       .catch((err) => {
//         console.log(err);
//         return cb(err);
//       });
//   },

//   getDb: () => dbConnection,
// };
