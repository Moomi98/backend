import Product from "../models/Product";

export default class ProductRepository {
  async findAllProduct() {
    return await Product.find({});
  }

  async getProductDetail(id: string) {
    return await Product.findById(id);
  }
}
