import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: String,

    category: {
      type: String,
      enum: ["vegetable", "fruit", "grain", "other"],
      default: "vegetable"
    },

    price: {
      type: Number,
      required: true
    },

    unit: {
      type: String,
      enum: ["kg", "gram", "piece"],
      default: "kg"
    },

    quantityAvailable: {
      type: Number,
      required: true
    },

    images: [String],

    farmer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    location: {
      village: String,
      district: String,
      state: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
