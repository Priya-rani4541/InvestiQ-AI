import crypto from "crypto";
import fs from "fs";
import { startPDFIndexJob } from "../jobs/pdfIndex.job.js";

import Document from "../models/Document.js";


export const uploadPDFService = async (file) => {

    /**
     * Create hash from file contents
     * (Production-ready duplicate detection)
     */
    const buffer = fs.readFileSync(file.path);

    const hash = crypto
        .createHash("sha256")
        .update(buffer)
        .digest("hex");

    /**
     * Duplicate Check
     */
    const existingDocument = await Document.findOne({ hash });

    if (existingDocument) {

        return {

            success: true,

            alreadyIndexed: true,

            document: existingDocument,

        };

    }

    /**
     * Create MongoDB Document FIRST
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
 * Start Background Indexing
 */

    startPDFIndexJob(

        document._id,
    
        file.path
    
    );

/**
 * Immediate Response
 */

return {

    success: true,

    alreadyIndexed: false,

    document,

    indexingStatus: "PROCESSING",

    message:

        "PDF uploaded successfully. Background indexing started.",

};

};