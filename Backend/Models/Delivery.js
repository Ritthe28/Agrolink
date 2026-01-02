import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    order: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },

    deliveryPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    status: {
      type: String,
      enum: ["assigned", "picked", "on_the_way", "delivered"],
      default: "assigned"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Delivery", deliverySchema);
