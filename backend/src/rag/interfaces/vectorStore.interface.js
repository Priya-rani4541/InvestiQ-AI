/**
 * Vector Store Interface
 *
 * Every Vector Store must implement these methods.
 */

export class VectorStoreInterface {

    async addDocuments(documents) {
        throw new Error("addDocuments() not implemented.");
    }

    async similaritySearch(query, topK = 5) {
        throw new Error("similaritySearch() not implemented.");
    }

    async deleteDocument(documentId) {
        throw new Error("deleteDocument() not implemented.");
    }

    async getDocumentCount() {
        throw new Error("getDocumentCount() not implemented.");
    }

}