import ProductRepository from "../repositories/ProductRepository";

export default class ProductService {
  productRepository = new ProductRepository();

  async getProductList() {
    const allProduct = await this.productRepository.findAllProduct();

    return allProduct.map((product) => ({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle ?? "",
      thumbnail: product.thumbnail,
    }));
  }
}
