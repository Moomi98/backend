import mongoose, { Schema } from "mongoose";

export type TProduct = {
  thumbnail: string;
  name: string;
  modelNo: string;
  productDetail: string;
  subtitle?: string;
};

const ProductSchema = new Schema<TProduct>(
  {
    thumbnail: { type: String, required: false },
    name: { type: String, required: true },
    modelNo: { type: String, required: true },
    subtitle: { type: String, required: false, default: "" },
    productDetail: { type: String, required: true }, // image url
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model<TProduct>("Product", ProductSchema);

export default product;
