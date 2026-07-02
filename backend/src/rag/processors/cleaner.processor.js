/**
 * -------------------------------------------------------
 * Cleaner Processor
 * -------------------------------------------------------
 * Responsibility:
 * - Normalize text
 * - Remove unnecessary spaces
 * - Remove extra blank lines
 * - Remove tabs
 * - Normalize unicode
 * -------------------------------------------------------
 */

export const cleanText = (text) => {
  if (!text) {
    throw new Error("Text is required.");
  }

  return text
    // Unicode Normalize
    .normalize("NFKC")

    // Remove Tabs
    .replace(/\t/g, " ")

    // Multiple Spaces → Single Space
    .replace(/[ ]{2,}/g, " ")

    // Multiple Blank Lines → Single Blank Line
    .replace(/\n{3,}/g, "\n\n")

    // Remove trailing spaces
    .replace(/[ \t]+$/gm, "")

    // Trim
    .trim();
};

export const getTextStatistics = (text) => {
  return {
    characterCount: text.length,

    wordCount: text
      .trim()
      .split(/\s+/)
      .length,

    lineCount: text
      .split("\n")
      .length,
  };
};