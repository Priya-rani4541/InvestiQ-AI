import crypto from "crypto";
import fs from "fs";

import { startPDFIndexJob } from "../jobs/pdfIndex.job.js";
import Document from "../models/Document.js";

export const uploadPDFService = async (file) => {

    if (!file) {
        throw new Error("No PDF uploaded.");
    }

    if (!fs.existsSync(file.path)) {
        throw new Error(`Uploaded file not found: ${file.path}`);
    }

    console.log("========== FILE DEBUG ==========");
    console.log("Original Name:", file.originalname);
    console.log("Saved Path:", file.path);
    console.log("Absolute Path:", fs.realpathSync(file.path));
    console.log("Exists:", fs.existsSync(file.path));
    console.log("================================");

    /**
     * STEP 1
     */

    console.log("STEP 1 : Reading File");

    const buffer = fs.readFileSync(file.path);

    console.log("STEP 1 DONE");

    /**
     * STEP 2
     */

    console.log("STEP 2 : Creating Hash");

    const hash = crypto
        .createHash("sha256")
        .update(buffer)
        .digest("hex");

    console.log("STEP 2 DONE");

    /**
     * STEP 3
     */

    console.log("STEP 3 : Duplicate Check");

    const existingDocument = await Document.findOne({
        hash,
    });

    console.log("STEP 3 DONE");

    if (existingDocument) {

        console.log("Duplicate PDF Found");

        try {
            fs.unlinkSync(file.path);
        }
        catch (err) {
            console.error(err.message);
        }

        return {

            success: true,

            alreadyIndexed: true,

            document: existingDocument,

        };

    }

    /**
     * STEP 4
     */

    console.log("STEP 4 : Creating Mongo Document");

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

    console.log("STEP 4 DONE");

    console.log("Document Id :", document._id.toString());

    /**
     * STEP 5
     */

    console.log("STEP 5 : Starting Background Job");

    startPDFIndexJob(
        document._id,
        file.path
    );

    console.log("STEP 5 DONE");

    return {

        success: true,

        alreadyIndexed: false,

        document,

        indexingStatus: "PROCESSING",

        message:
            "PDF uploaded successfully. Background indexing started.",

    };

};