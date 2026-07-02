const registry = new Map();

/**
 * Register a document
 */
export const registerDocument = (document) => {

    registry.set(document.hash, document);

};

/**
 * Check whether document is already indexed
 */
export const isDocumentIndexed = (hash) => {

    return registry.has(hash);

};

/**
 * Get document by hash
 */
export const getDocument = (hash) => {

    return registry.get(hash);

};

/**
 * Get all indexed documents
 */
export const getAllDocuments = () => {

    return Array.from(registry.values());

};

/**
 * Total indexed documents
 */
export const totalIndexedDocuments = () => {

    return registry.size;

};

/**
 * Remove document
 */
export const removeDocument = (hash) => {

    registry.delete(hash);

};