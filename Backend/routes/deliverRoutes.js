import express from "express";
// import {
//   getAvailableOrders,
//   acceptDelivery
// } from "../controllers/deliveryController.js";
import { getAvailableOrders,acceptDelivery } from "../Controllers/deliveryController.js";
import { getMyDeliveries } from "../Controllers/deliveryController.js";

// import { protect } from "../middleware/authMiddleware.js";
import { protect } from "../Middleware/authMiddleware.js";
// import { isDelivery } from "../middleware/roleMiddleware.js";
import { isDelivery } from "../Middleware/roleMiddleware.js";
import { updateDeliveryStatus } from "../Controllers/deliveryController.js";


const router = express.Router();

router.get("/orders", protect, isDelivery, getAvailableOrders);
router.post("/accept/:orderId", protect, isDelivery, acceptDelivery);
router.put(
  "/status/:orderId",
  protect,
  isDelivery,
  updateDeliveryStatus
);
router.get("/my", protect, isDelivery, getMyDeliveries);




export default router;
