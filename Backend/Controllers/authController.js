import User from "../models/User.js";
import bcrypt from "bcryptjs";

import generateToken from "../utils/generatetoken.js";
// =======================
// SIGNUP
// =======================
export const signup = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    // 1. Validation
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // 2. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role
    });

    // 5. Send response
    res.status(201).json({
      success: true,
      message: "Signup successful",
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {
    console.log(error);
    
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// =======================
// LOGIN
// =======================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // 2. Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // 4. Check account status
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Account is disabled"
      });
    }

    // 5. Success response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: generateToken(user._id, user.role),
      user
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
