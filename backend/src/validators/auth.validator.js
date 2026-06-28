import { body } from "express-validator";


// ==========================
// Register Validation
// ==========================

export const registerValidation = [

  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full Name is required"),

  body("email")
    .isEmail()
    .withMessage("Invalid Email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password should be at least 6 characters"),

];


// ==========================
// Login Validation
// ==========================

export const loginValidation = [

  body("email")
    .isEmail()
    .withMessage("Invalid Email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),

];