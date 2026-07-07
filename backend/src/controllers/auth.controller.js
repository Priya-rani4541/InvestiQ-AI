import { validationResult } from "express-validator";

import {
    registerUser,
    loginUser,
} from "../services/auth.service.js";

import AppError from "../errors/AppError.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

/**
 * Register
 */

export const register = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            throw new AppError(

                "Validation failed.",

                400,

                "VALIDATION_ERROR"

            );

        }

        const { user, token } = await registerUser(req.body);

        return successResponse(

            res,

            {

                token,

                user: {

                    id: user._id,

                    fullName: user.fullName,

                    email: user.email,

                    role: user.role,

                },

            },

            "User Registered Successfully",

            201

        );

    }

    catch (error) {

        return errorResponse(res, error);

    }

};

/**
 * Login
 */

export const login = async (req, res) => {

    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            throw new AppError(

                "Validation failed.",

                400,

                "VALIDATION_ERROR"

            );

        }

        const { user, token } = await loginUser(req.body);

        return successResponse(

            res,

            {

                token,

                user: {

                    id: user._id,

                    fullName: user.fullName,

                    email: user.email,

                    role: user.role,

                },

            },

            "Login Successful"

        );

    }

    catch (error) {

        return errorResponse(res, error);

    }

};

/**
 * Current User
 */

export const getCurrentUser = async (req, res) => {

    try {

        return successResponse(

            res,

            req.user,

            "Current user fetched successfully."

        );

    }

    catch (error) {

        return errorResponse(res, error);

    }

};