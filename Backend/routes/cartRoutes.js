import express from "express";
// import { addToCart } from "../controllers/cartController.js";
import { addToCart } from "../Controllers/cartController.js";
// import { protect } from "../middleware/authMiddleware.js";
import { protect } from "../Middleware/authMiddleware.js";
import { getCart } from "../Controllers/cartController.js";
import { removeFromCart } from "../Controllers/cartController.js";
import { updateQuantity } from "../Controllers/cartController.js";

const cartrouter= express.Router();
cartrouter.get("/", protect, getCart);

cartrouter.post("/add", protect, addToCart);
cartrouter.delete("/remove/:productId", protect, removeFromCart);
cartrouter.put("/update", protect, updateQuantity);

export default cartrouter;
