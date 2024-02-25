import mongoose, { Schema } from "mongoose";

export type TProduct = {
  thumbnail: string;
  title: string;
  productDetail: string;
  subtitle?: string;
};

const ProductSchema = new Schema<TProduct>(
  {
    thumbnail: { type: String, required: false },
    title: { type: String, required: true },
    subtitle: { type: String, required: false, default: "" },
    productDetail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model<TProduct>("Product", ProductSchema);

export default product;
