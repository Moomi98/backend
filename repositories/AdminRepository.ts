import User from "../models/User";
import Product from "../models/Product";
import { TOption } from "../types/TProduct";

export default class AdminRepository {
  async getAdmin() {
    return await User.findOne({ type: 0 });
  }

  async createProductPostId() {
    const newProductPost = await Product.create({
      title: ".",
      productDetail: ".",
    });
    return newProductPost.id;
  }

  async createProductPost(
    id: string,
    title: string,
    thumbnail: string,
    options: TOption[],
    content: string
  ) {
    const newProductPost = await Product.findByIdAndUpdate(id, {
      title,
      thumbnail,
      options,
      productDetail: content,
    });
    return !!newProductPost;
  }
}
