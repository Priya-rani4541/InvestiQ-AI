import { VectorStoreInterface } from "../interfaces/vectorStore.interface.js";
import { cosineSimilarity } from "../utils/cosineSimilarity.js";

export class LocalVectorStore extends VectorStoreInterface {

    constructor() {

        super();

        this.documents = [];

    }

    async addDocuments(documents) {

        if (!documents || documents.length === 0) {

            throw new Error("Documents are required.");

        }

        this.documents.push(...documents);

        return this.documents.length;

    }

    async similaritySearch(queryEmbedding, topK = 5) {

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