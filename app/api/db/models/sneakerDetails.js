import mongoose from "mongoose";

const sneakerDetailsSchema = new mongoose.Schema({
  // Define your product schema fields here
  name: { type: String },
  description: { type: String },
  brand: { type: String },
  price: { type: String },
  stock: { type: String },
  image: { type: String },

  // Other fields...
});

const sneakers =
  mongoose.models.sneakers || mongoose.model("sneakers", sneakerDetailsSchema);
export default sneakers;
