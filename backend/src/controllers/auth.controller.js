import { validationResult } from "express-validator";

import {
  registerUser,
  loginUser,
} from "../services/auth.service.js";


// ==========================
// Register
// ==========================

export const register = async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {

    const { user, token } = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      token,

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};


// ==========================
// Login
// ==========================

export const login = async (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {

    const { user, token } = await loginUser(req.body);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    return res.status(400).json({
      success: false,
      message: error.message,
    });

  }

};

// ==========================
// Get Current User
// ==========================

export const getCurrentUser = async (req, res) => {

  try {

    return res.status(200).json({
      success: true,
      user: req.user,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};