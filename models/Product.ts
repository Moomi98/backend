import mongoose, { Schema } from "mongoose";

export type TProduct = {
  thumbnail: string;
  title: string;
  productDetail: string;
  subtitle?: string;
  createdAt?: number;
};

const ProductSchema = new Schema({
  thumbnail: { type: String, required: false },
  title: { type: String, required: true },
  subtitle: { type: String, required: false, default: "" },
  productDetail: { type: String, required: true },
  createdAt: { type: Number, default: Date.now },
});

const product = mongoose.model("Product", ProductSchema);

export default product;
