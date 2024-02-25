import express from "express";
import AdminController from "../controllers/AdminController";

const router = express.Router();
const adminController = new AdminController();

router.post("/login", adminController.login);

router.post("/product-list/write", adminController.createProductPost);
router.get("/product-list/write/new", adminController.createProductPostId);

//모듈에 등록해야 web.js에서 app.use 함수를 통해서 사용 가능
export default router;
