import { VectorStoreInterface } from "../interfaces/vectorStore.interface.js";
import { cosineSimilarity } from "../utils/cosineSimilarity.js";
import AppError from "../../errors/AppError.js";
export class LocalVectorStore extends VectorStoreInterface {

    constructor() {

        super();

        this.documents = [];

    }

    async addDocuments(documents) {

        if (!documents || documents.length === 0) {

            throw new AppError(
                "Documents are required.",
                400,
                "DOCUMENTS_REQUIRED"
            );

        }

        this.documents.push(...documents);

        return this.documents.length;

    }

    async similaritySearch(queryEmbedding, topK = 5, filter = null) {

        const scoredDocuments = this.documents.map((doc) => ({
    
            ...doc,
    
            score: cosineSimilarity(
                queryEmbedding,
                doc.embedding
            ),
    
        }));
    
        scoredDocuments.sort(
    
            (a, b) => b.score - a.score
    
        );
    
        return scoredDocuments.slice(0, topK);
    
    }

    async deleteDocument(documentId) {

        this.documents = this.documents.filter(

            (doc) => doc.documentId !== documentId

        );

    }

    async getDocumentCount() {

        return this.documents.length;

    }

}