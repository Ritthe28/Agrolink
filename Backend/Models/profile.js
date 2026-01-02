import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    // Basic Info
   set :{
    type:Boolean,
    default : false
   },
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      unique: true,
      sparse: true, // optional but unique
    },

   

    farmerId: {
      type: String,
      unique: true,
    },

    profileImage: {
      type: String,
      default:
        "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },

    // Location
    location: {
      village: String,
      district: String,
      state: {
        type: String,
        default: "Maharashtra",
      },
      pincode: String,
    },

    // Farming Info
    landSize: {
      type: String, // "5 Acres"
    },

    crops: [
      {
        type: String,
      },
    ],

    farmingType: {
      type: String,
      enum: ["Organic", "Traditional", "Mixed"],
      default: "Traditional",
    },

    // Wallet
    walletBalance: {
      type: Number,
      default: 0,
    },

    // Verification
    isKycVerified: {
      type: Boolean,
      default: false,
    },

    // Role (for future admin/user separation)
    role: {
      type: String,
      default: "farmer",
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// // Auto-generate Farmer ID
// farmerSchema.pre("save", function (next) {
//   if (!this.farmerId) {
//     this.farmerId = `FRM${Math.floor(10000 + Math.random() * 90000)}`;
//   }
//   next();
// });

export default mongoose.model("Farmer", farmerSchema);
