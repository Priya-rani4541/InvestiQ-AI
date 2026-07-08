import multer from "multer";
import path from "path";
import fs from "fs";
import { randomUUID } from "crypto";

// ======================================================
// Upload Directory
// Automatically create uploads/pdf if it doesn't exist
// ======================================================

const uploadDir = path.join("uploads", "pdf");

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// ======================================================
// Storage Configuration
// ======================================================

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {

        const uniqueName =
            randomUUID() + path.extname(file.originalname);

        cb(null, uniqueName);

    },

});

// ======================================================
// Allow Only PDF Files
// ======================================================

const fileFilter = (req, file, cb) => {

    if (file.mimetype === "application/pdf") {
        cb(null, true);
    } else {
        cb(new Error("Only PDF files are allowed."), false);
    }

};

// ======================================================
// Upload Middleware
// ======================================================

const upload = multer({

    storage,

    fileFilter,

    limits: {
        fileSize: 20 * 1024 * 1024, // 20 MB
    },

});

// ======================================================
// Export
// ======================================================

export default upload;