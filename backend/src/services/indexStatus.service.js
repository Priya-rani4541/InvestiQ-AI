import Document from "../models/Document.js";
import AppError from "../errors/AppError.js";

export const getIndexStatusService = async (documentId) => {

    const document = await Document.findById(documentId);

    if (!document) {

        throw new AppError(

            "Document not found.",

            404,

            "DOCUMENT_NOT_FOUND"

        );

    }

    return {

        documentId: document._id,
    
        indexed: document.indexed,
    
        status: document.status,
    
        chunkCount: document.chunkCount,
    
        vectorCount: document.vectorCount,
    
        retryCount: document.retryCount,
    
        errorMessage: document.errorMessage,
    
        uploadedAt: document.uploadedAt,
    
        indexedAt: document.indexedAt,
    
    };
};