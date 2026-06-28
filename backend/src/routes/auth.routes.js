import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";

import {
    register,
    login,
    getCurrentUser,
  } from "../controllers/auth.controller.js";

import {
  registerValidation,
  loginValidation,
} from "../validators/auth.validator.js";

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  register
);

router.post(
  "/login",
  loginValidation,
  login
);

router.get(
    "/me",
    authMiddleware,
    getCurrentUser
  );

export default router;