import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/pdf");
},

  filename: (req, file, cb) => {
    const uniqueName =
      randomUUID() + path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

// Allow Only PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed."), false);
  }
};

// Upload Instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20 MB
  },
});

// Production Upload Middleware
// Supports only PDF
// Max Size : 20 MB
// Random UUID Filename

export default upload;