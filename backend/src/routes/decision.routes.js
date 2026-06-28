import express from "express";

import { analyzeDecision } from "../controllers/decision.controller.js";
import { decisionValidator } from "../validators/decision.validator.js";

import validate from "../middlewares/validate.middleware.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post(
  "/analyze",
  protect,
  decisionValidator,
  validate,
  analyzeDecision
);

export default router;