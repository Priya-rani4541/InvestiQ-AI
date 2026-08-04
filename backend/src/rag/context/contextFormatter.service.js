/**
 * Converts retrieved chunks
 * into a structured context
 * for Gemini.
 */

export const formatContext = (documents) => {

    if (!documents || documents.length === 0) {

        return "";

    }

    return documents
        .map((doc, index) => {

            return `
========== SOURCE ${index + 1} ==========

Document ID:
${doc.documentId}

Similarity Score:
${Number(doc.score).toFixed(4)}

Content:
${doc.content}
`;

        })
        .join("\n");

};