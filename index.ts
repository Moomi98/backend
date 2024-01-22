import "dotenv/config";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import productListRouter from "./routes/productList";

const app: Application = express();

mongoose
  .connect(process.env.MONGOOSE_URL!)
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });

// CORS 설정
// TODO : 배포시 CORS 설정 필요
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
  express.text(),
  express.json()
);

app.listen(process.env.PORT, function () {
  console.log(`App is listening on port ${process.env.PORT} !`);
});

app.use("/product-list", productListRouter);
