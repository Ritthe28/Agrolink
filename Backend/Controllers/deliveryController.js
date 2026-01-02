// import Order from "../models/Order.js";
import Order from "../Models/Order.js";

export const getAvailableOrders = async (req, res) => {
  const orders = await Order.find({
    orderStatus: "placed",
    deliveryBoy: null
  });

  res.json(orders);
};

export const acceptDelivery = async (req, res) => {
  const order = await Order.findOneAndUpdate(
    {
      _id: req.params.orderId,
      deliveryBoy: null
    },
    {
      deliveryBoy: req.user._id,
      orderStatus: "assigned"
    },
    { new: true }
  );

  if (!order) {
    return res.status(400).json({
      message: "Order already accepted by another delivery person"
    });
  }

  res.json({ success: true, order });
};

export const updateDeliveryStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findOne({
    _id: req.params.orderId,
    deliveryBoy: req.user._id
  });

  if (!order) {
    return res.status(403).json({ message: "Access denied" });
  }

  order.orderStatus = status;
  await order.save();

  res.json(order);
};

export const getMyDeliveries = async (req, res) => {
  const orders = await Order.find({
    deliveryBoy: req.user._id
  })
    .populate("user", "name")
    .populate("items.product", "name")
    .sort({ createdAt: -1 });

  res.json(orders);
};


