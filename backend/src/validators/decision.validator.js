import { body } from "express-validator";

export const decisionValidator = [
  body("company")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
];