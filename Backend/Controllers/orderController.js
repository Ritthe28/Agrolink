// import Cart from "../models/Cart.js";
// import Order from "../models/Order.js";
// import Product from "../models/Product.js";

import Cart from "../Models/Cart.js";
import Order from "../Models/Order.js";
import product from "../Models/product.js";

export const placeOrder = async (req, res) => {
  console.log("in place order ");
  
  const { paymentMethod } = req.body;

  const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  let total = 0;

  const items = cart.items.map((item) => {
    total += item.product.price * item.quantity;
    return {
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price
    };
  });

  const order = await Order.create({
    user: req.user._id,
    items,
    totalAmount: total,
    paymentMethod,
    paymentStatus: paymentMethod === "COD" ? "pending" : "paid"
  });

  await Cart.deleteOne({ user: req.user._id });

  res.status(201).json({ success: true, order });
};


export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("items.product", "name")
    .sort({ createdAt: -1 });

  res.json(orders);
};

export const cancelOrder = async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.orderId,
    user: req.user._id,
    orderStatus: "placed"
  });

  if (!order) {
    return res
      .status(400)
      .json({ message: "Order cannot be cancelled" });
  }

  order.orderStatus = "cancelled";
  await order.save();

  res.json({ success: true, order });
};

export const getFarmerOrders = async (req, res) => {
  const orders = await Order.find({
    "items.product": {
      $in: await product.find({ farmer: req.user._id }).distinct("_id")
    }
  })
    .populate("items.product", "name")
    .populate("user", "name");

  res.json(orders);
};
