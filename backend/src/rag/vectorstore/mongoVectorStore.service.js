import Vector from "../../models/Vector.js";

/**
 * Insert Vector Documents
 */
export const addVectors = async (documents) => {

    if (!documents || documents.length === 0) {
        return;
    }

    await Vector.insertMany(documents);

};

/**
 * Delete vectors of one document
 */
export const deleteVectors = async (documentId) => {

    await Vector.deleteMany({
        documentId,
    });

};

/**
 * Count vectors
 */
export const totalVectors = async () => {

    return await Vector.countDocuments();

};

/**
 * MongoDB Atlas Vector Search
 */
export const searchVectors = async (

    queryEmbedding,

    topK = 5

) => {

    const results = await Vector.aggregate([

        {

            $vectorSearch: {

                index: "investiq_vector_index",

                path: "embedding",

                queryVector: queryEmbedding,

                numCandidates: 100,

                limit: topK,

            },

        },

        {

            $project: {

                _id: 1,

                documentId: 1,

                chunkIndex: 1,

                content: 1,

                metadata: 1,

                score: {

                    $meta: "vectorSearchScore",

                },

            },

        },

    ]);

    return results;

};