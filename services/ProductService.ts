import ProductRepository from "../repositories/ProductRepository";

export default class ProductService {
  productRepository = new ProductRepository();

  async getProductList() {
    const allProduct = await this.productRepository.findAllProduct();

    return allProduct
      .sort((a, b) => b.createdAt - a.createdAt)
      .map((product) => ({
        id: product.id,
        title: product.title,
        subtitle: product.subtitle ?? "",
        thumbnail: product.thumbnail,
        createdAt: product.createdAt,
      }));
  }
}
