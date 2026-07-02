/**
 * -------------------------------------------------------
 * Metadata Processor
 * -------------------------------------------------------
 * Responsibility:
 * - Standardize metadata
 * - Validate required fields
 * - Add processing timestamp
 * - Return normalized metadata
 * -------------------------------------------------------
 */

export const buildMetadata = (document) => {
    if (!document) {
        throw new Error("Document is required.");
    }

    return {
        fileName: document.fileName || null,

        filePath: document.filePath || null,

        pageCount: document.pageCount || 0,

        characterCount: document.text?.length || 0,

        title: document.metadata?.title || null,

        author: document.metadata?.author || null,

        creator: document.metadata?.creator || null,

        producer: document.metadata?.producer || null,

        creationDate: document.metadata?.creationDate || null,

        modificationDate: document.metadata?.modificationDate || null,

        processedAt: new Date().toISOString(),
    };
};