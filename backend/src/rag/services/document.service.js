import { loadPDF } from "../loaders/pdf.loader.js";

import { buildMetadata } from "../processors/metadata.processor.js";

import {
  cleanText,
  getTextStatistics,
} from "../processors/cleaner.processor.js";

import { splitIntoChunks } from "../processors/chunking.processor.js";

export const processDocument = async (filePath) => {

  /**
   * Load PDF
   */
  const pdf = await loadPDF(filePath);

  /**
   * Metadata
   */
  const metadata = buildMetadata(pdf);

  /**
   * Clean Text
   */
  const cleanedText = cleanText(pdf.text);

  /**
   * Statistics
   */
  const statistics = getTextStatistics(cleanedText);

  /**
   * Chunking
   */
  const chunks = await splitIntoChunks(cleanedText);

  return {

    metadata,

    statistics,

    chunks,

  };

};