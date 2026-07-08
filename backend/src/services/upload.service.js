import crypto from "crypto";
import fs from "fs";
import { startPDFIndexJob } from "../jobs/pdfIndex.job.js";
import Document from "../models/Document.js";

export const uploadPDFService = async (file) => {

    if (!file) {
        throw new Error("No PDF uploaded.");
    }

    // Ensure uploaded file exists
    if (!fs.existsSync(file.path)) {
        throw new Error(`Uploaded file not found: ${file.path}`);
    }

    /**
     * Create SHA256 Hash
     */

    console.log("========== FILE DEBUG ==========");
    console.log("Original Name:", file.originalname);
    console.log("Saved Path:", file.path);
    console.log("Absolute Path:", fs.realpathSync(file.path));
    console.log("Exists:", fs.existsSync(file.path));
    console.log("================================");

    const buffer = fs.readFileSync(file.path);

    const hash = crypto
        .createHash("sha256")
        .update(buffer)
        .digest("hex");

    /**
     * Duplicate Detection
     */
    const existingDocument = await Document.findOne({ hash });

    if (existingDocument) {

        // Delete duplicate uploaded file
        try {
            fs.unlinkSync(file.path);
        } catch {}

        return {
            success: true,
            alreadyIndexed: true,
            document: existingDocument,
        };
    }

    /**
     * Create Document
     */
    const document = await Document.create({

        company: null,

        fileName: file.originalname,

        storedFileName: file.filename,

        filePath: file.path,

        fileType: file.mimetype,

        hash,

        indexed: false,

        status: "UPLOADED",

        chunkCount: 0,

        vectorCount: 0,

        retryCount: 0,

        errorMessage: null,

    });

    /**
     * Background Indexing
     */
    await startPDFIndexJob(
        document._id,
        file.path
    );

    return {

        success: true,

        alreadyIndexed: false,

        document,

        indexingStatus: "PROCESSING",

        message:
            "PDF uploaded successfully. Background indexing started.",

    };

};