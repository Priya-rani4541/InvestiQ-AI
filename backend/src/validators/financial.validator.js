import { body } from "express-validator";

export const financialValidator = [
  body("company")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
];