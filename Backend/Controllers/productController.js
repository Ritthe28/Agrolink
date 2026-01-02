import cloudinary from "../Config/connectcloudnary.js";
import fs from "fs";
import product from "../Models/product.js";

/**
 * @desc   Farmer registers a new product with image
 * @route  POST /api/products
 * @access Private (Farmer)
 */
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      price,
      unit,
      quantityAvailable,
      location
    } = req.body;
    console.log("reaching to the add product ");
    console.log("Cloudinary ENV CHECK:", {
  cloud: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET
});


    if (!name || !price || !quantityAvailable) {
      return res.status(400).json({
        message: "Name, price and quantity are required"
      });
    }

    let imageUrl = "";

    // ✅ Image uploaded by multer
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(
        req.file.path,
        {
          folder: "agrolink_products"
        }
      );

      imageUrl = uploadResult.secure_url;

      // 🧹 remove local file after upload
      fs.unlinkSync(req.file.path);
    }

    const Product = await product.create({
      name,
      description,
      category,
      price,
      unit,
      quantityAvailable,
      images: imageUrl ? [imageUrl] : [],
      location,
      farmer: req.user._id
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      Product
    });
  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({
      message: "Product creation failed",
      error: error.message
    });
  }
};




/**
 * @desc   Get all active products (public)
 * @route  GET /api/products
 * @access Public
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await product.find({ isActive: true })
      .populate("farmer", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message
    });
  }
};


export const getMyProducts = async (req, res) => {
  const products = await product.find({
    farmer: req.user._id
  }).sort({ createdAt: -1 });

  res.json(products);
};
