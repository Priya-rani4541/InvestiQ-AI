import { body } from "express-validator";

export const companyValidator = [
  body("company")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),
];