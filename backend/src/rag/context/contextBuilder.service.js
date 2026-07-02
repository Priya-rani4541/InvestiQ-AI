/**
 * Context Builder Service
 *
 * Converts retrieved chunks into
 * a clean context for the LLM.
 */

export const buildContext = (documents) => {

    if (!documents || documents.length === 0) {

        throw new Error(
            "Documents are required."
        );

    }

    return documents
        .map((doc, index) => {

            return `Source ${index + 1}

Document ID : ${doc.documentId}

Similarity : ${doc.score.toFixed(4)}

Content :

${doc.content}`;

        })
        .join("\n\n-------------------------\n\n");

};