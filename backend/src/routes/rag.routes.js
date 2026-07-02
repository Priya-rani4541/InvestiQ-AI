import express from "express";

import upload from "../middlewares/upload.middleware.js";

import {
  uploadPDF,
  queryRAG,
} from "../controllers/rag.controller.js";

const router = express.Router();

/**
 * Upload PDF
 */
router.post(
  "/upload",
  upload.single("pdf"),
  uploadPDF
);

/**
 * Ask Question using RAG
 */
router.post(
  "/query",
  queryRAG
);

export default router;