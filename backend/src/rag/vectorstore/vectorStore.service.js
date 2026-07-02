import { LocalVectorStore } from "./localVectorStore.service.js";

export const vectorStore = new LocalVectorStore();

export const addVectors = async (documents) => {

    return await vectorStore.addDocuments(documents);

};

export const totalVectors = async () => {

    return await vectorStore.getDocumentCount();

};

export const deleteVectors = async (documentId) => {

    return await vectorStore.deleteDocument(documentId);

};

export const searchVectors = async (

    queryEmbedding,

    topK = 5

) => {

    return await vectorStore.similaritySearch(

        queryEmbedding,

        topK

    );

};