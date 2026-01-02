import express from "express";
import { createProduct } from "../Controllers/productController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { isFarmer } from "../Middleware/roleMiddleware.js";
import upload from "../Middleware/multer.js";
import { getAllProducts } from "../Controllers/productController.js";

import { getMyProducts } from "../Controllers/productController.js";

const productRouter = express.Router();

// Farmer registers product
productRouter.post("/",
  protect,
  isFarmer,
  upload.single("image"), // 👈 multer
  createProduct);


  productRouter.get("/",getAllProducts)
  productRouter.get("/my", protect, getMyProducts);


export default productRouter;
