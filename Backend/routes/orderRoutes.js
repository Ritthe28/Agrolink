import express from "express";
// import { placeOrder } from "../controllers/orderController.js";
// import { protect } from "../middleware/authMiddleware.js";
import { getMyOrders, placeOrder } from "../Controllers/orderController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { cancelOrder } from "../Controllers/orderController.js";
import { getFarmerOrders } from "../Controllers/orderController.js";


const orderroter = express.Router();

orderroter.post("/place", protect, placeOrder);
orderroter.get("/my", protect, getMyOrders);
orderroter.put("/cancel/:orderId", protect, cancelOrder);
orderroter.get("/farmer", protect, getFarmerOrders);


export default orderroter;
