import { generateEmbedding } from "../embeddings/embedding.service.js";
import { searchVectors } from "../vectorstore/mongoVectorStore.service.js";
import AppError from "../../errors/AppError.js";
export const retrieveRelevantChunks = async (

    query,

    topK = 5

) => {

    if (!query) {

        throw new AppError(

            "Query is required.",
        
            400,
        
            "INVALID_QUERY"
        
        );

    }

    const queryEmbedding = await generateEmbedding(query);

    const results = await searchVectors(

        queryEmbedding,

        topK

    );

    return results;

};