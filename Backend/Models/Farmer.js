import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    phone: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      default: "farmer"
    },

    farmName: {
      type: String
    },

    location: {
      address: String,
      village: String,
      district: String,
      state: String,
      pincode: String,
      coordinates: {
        lat: Number,
        lng: Number
      }
    },

    vegetableTypes: [
      {
        type: String
      }
    ],

    verified: {
      type: Boolean,
      default: false
    },

    rating: {
      type: Number,
      default: 0
    },

    totalSales: {
      type: Number,
      default: 0
    },

    walletBalance: {
      type: Number,
      default: 0
    },

    bankDetails: {
      accountHolderName: String,
      accountNumber: String,
      ifscCode: String,
      bankName: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Farmer", farmerSchema);
