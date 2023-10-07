import { MongoClient } from "mongodb";

// Connection URL
const url = "mongodb://127.0.0.1:27017/sneakerstore";
// mongodb://127.0.0.1:27017/sneakerstore
//mongodb://localhost:27017/sneakerstore
//const client = new MongoClient(url);
let dbConnection;
// Database Name
const dbName = "sneakerstore";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },

  getDb: () => dbConnection,
};
