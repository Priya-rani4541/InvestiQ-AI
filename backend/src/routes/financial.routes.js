import express from "express";

import protect from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import { financialAnalysis } from "../controllers/financial.controller.js";
import { financialValidator } from "../validators/financial.validator.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  financialValidator,
  validate,
  financialAnalysis
);

export default router;