import express from "express";

import protect from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";

import { sentimentAnalysis } from "../controllers/sentiment.controller.js";
import { sentimentValidator } from "../validators/sentiment.validator.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  sentimentValidator,
  validate,
  sentimentAnalysis
);

export default router;