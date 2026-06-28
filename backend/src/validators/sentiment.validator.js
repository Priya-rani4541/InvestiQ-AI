import { body } from "express-validator";

export const sentimentValidator = [

  body("company")
    .trim()
    .notEmpty()
    .withMessage("Company name is required"),

];