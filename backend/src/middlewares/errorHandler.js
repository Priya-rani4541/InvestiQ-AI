import AppError from "../errors/AppError.js";

const errorHandler = (err, req, res, next) => {

    /**
     * Log Error
     */
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.error("❌ Error Handler");
    console.error(err);
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    /**
     * Handle AppError
     */
    if (err instanceof AppError) {

        return res.status(err.statusCode).json({

            success: false,

            error: {

                code: err.code,

                message: err.message,

            },

        });

    }

    /**
     * Mongoose Validation Error
     */
    if (err.name === "ValidationError") {

        return res.status(400).json({

            success: false,

            error: {

                code: "VALIDATION_ERROR",

                message: err.message,

            },

        });

    }

    /**
     * Mongo Duplicate Key
     */
    if (err.code === 11000) {

        return res.status(409).json({

            success: false,

            error: {

                code: "DUPLICATE_RESOURCE",

                message: "Resource already exists.",

            },

        });

    }

    /**
     * Default Error
     */
    return res.status(500).json({

        success: false,

        error: {

            code: "INTERNAL_SERVER_ERROR",

            message: "Something went wrong.",

        },

    });

};

export default errorHandler;