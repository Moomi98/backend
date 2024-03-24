import { Request, Response, NextFunction } from "express";

import ProductService from "../services/ProductService";

export default class PostsController {
  productService = new ProductService();

  getProductList = async (req: Request, res: Response, next: NextFunction) => {
    const productList = await this.productService.getProductList();

    res.status(200).send(productList);
  };

  getProductDetail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const id: string = req.query.id as string;
    const productList = await this.productService.getProductDetail(id);

    res.status(200).send(productList);
  };
}
