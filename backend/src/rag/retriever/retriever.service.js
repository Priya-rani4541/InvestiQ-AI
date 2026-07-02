import { generateEmbedding } from "../embeddings/embedding.service.js";
import { searchVectors } from "../vectorstore/vectorStore.service.js";

export const retrieveRelevantChunks = async (

    query,

    topK = 5

) => {

    if (!query) {

        throw new Error("Query is required.");

    }

    const queryEmbedding = await generateEmbedding(query);

    const results = await searchVectors(

        queryEmbedding,

        topK

    );

    return results;

};