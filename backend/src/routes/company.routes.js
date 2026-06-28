import express from "express";

import { analyze } from "../controllers/company.controller.js";
import { companyValidator } from "../validators/company.validator.js";

import validate from "../middlewares/validate.middleware.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  companyValidator,
  validate,
  analyze
);

export default router;