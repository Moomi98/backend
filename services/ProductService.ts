import ProductRepository from "../repositories/ProductRepository";
import { TProduct } from "../models/Product";

export default class ProductService {
  productRepository = new ProductRepository();

  async getProductList() {
    const allProduct: TProduct[] =
      await this.productRepository.findAllProduct();

    return allProduct.map((product) => ({
      id: product.modelNo,
      title: product.name,
      subtitle: product.subtitle ?? "",
      thumbnail: product.thumbnail,
    }));
  }
}
