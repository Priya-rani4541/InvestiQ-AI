import Document from "../../models/Document.js";
import { logger } from "../../logger/logger.js";


import AppError from "../../errors/AppError.js";

import { retrieveRelevantChunks } from "../../rag/retriever/retriever.service.js";

import { buildContext } from "../../rag/context/contextBuilder.service.js";

export const ragNode = async (state) => {

    logger.info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    logger.info("RAG Node Started");
    logger.info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    const { company } = state;

    /**
     * Check Indexed Document
     */

    const latestDocument = await Document.findOne({

        indexed: true,

    }).sort({

        indexedAt: -1,

    });

    if (!latestDocument) {

        throw new AppError(

            "No indexed document found.",

            404,

            "DOCUMENT_NOT_FOUND"

        );

    }

    /**
     * Retrieve Similar Chunks
     */

    const retrievedChunks = await retrieveRelevantChunks(

        company,

        5

    );

    /**
     * Build Context
     */

    const retrievedContext = buildContext(

        retrievedChunks

    );

    logger.info("Context Generated Successfully");
    return {

        ...state,

        retrievedContext,

    };

};