import express from "express";
import ProductController from "../controllers/ProductController";

//  /product-list

const router = express.Router();
const productController = new ProductController();

router.get("/", productController.getProductList);
router.get("/detail", productController.getProductDetail);

//모듈에 등록해야 web.js에서 app.use 함수를 통해서 사용 가능
export default router;
