import { loadPDF } from "../loaders/pdf.loader.js";

import { buildMetadata } from "../processors/metadata.processor.js";

import {
    cleanText,
    getTextStatistics,
} from "../processors/cleaner.processor.js";

import { splitIntoChunks } from "../processors/chunking.processor.js";

/**
 * Complete Document Processing Pipeline
 */

export const processDocument = async (filePath) => {

    // Step 1
    const pdf = await loadPDF(filePath);

    // Step 2
    const metadata = buildMetadata(pdf);

    // Step 3
    const cleanedText = cleanText(pdf.text);

    // Step 4
    const statistics = getTextStatistics(cleanedText);

    // Step 5
    const chunks = await splitIntoChunks(cleanedText);

    return {

        metadata,

        statistics,

        chunks,

    };

};