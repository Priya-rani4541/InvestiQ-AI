import Document from "../models/Document.js";

import { indexPDF } from "../rag/indexing/pdfIndexer.service.js";

export const startPDFIndexJob = async (

    documentId,

    filePath

) => {

    try {

        await Document.findByIdAndUpdate(
            documentId,
            {
                indexed: false,
                status: "PROCESSING",
                errorMessage: null,
            }
        );

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("📄 Background Indexing Started");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");

        await indexPDF(

            documentId,

            filePath

        );

        await Document.findByIdAndUpdate(

            documentId,

            {

                indexed: true,

                status: "COMPLETED",

                errorMessage: null,

            }

        );

        console.log("✅ Background Indexing Completed");

    }

    catch (error) {

        console.error("❌ Background Indexing Failed");

        console.error(error);

        await Document.findByIdAndUpdate(

            documentId,

            {

                indexed: false,

                status: "FAILED",

                errorMessage: error.message,

                $inc: {

                    retryCount: 1,

                },

            }

        );

    }

};