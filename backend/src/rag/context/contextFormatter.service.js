/**
 * Converts retrieved chunks
 * into a professional context.
 */

export const formatContext = (documents) => {

    if (!documents?.length) {

        return "";

    }

    return documents.map((doc, index) => {

        return `
========== SOURCE ${index + 1} ==========
Document ID : ${doc.documentId}

Similarity Score : ${doc.score.toFixed(4)}

Content :
${doc.content}
`;

    }).join("\n");

};