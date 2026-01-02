import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectdb } from "./Config/db.js";


import authrouter from "./routes/authroutes.js";
import productRouter from "./routes/productRoutes.js"
import cartrouter from "./routes/cartRoutes.js";
import orderroter from "./routes/orderRoutes.js";
import router from "./routes/deliverRoutes.js";

// Load environment variables


// Connect database
connectdb();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running"
  });
});

app.use("/api/users", authrouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartrouter);
app.use("/api/orders",orderroter)
app.use("/api/delivery",router);



// Server
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log({
         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
  });
  
  console.log(`Server running on port ${PORT}`);
});
