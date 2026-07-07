/**
 * ==========================================================
 *  DOCUMENT REGISTRY
 * ==========================================================
 *
 * Registry layer has been deprecated.
 *
 * InvestiQ-AI now uses MongoDB Document Collection
 * as the single source of truth.
 *
 * All document indexing state,
 * duplicate detection,
 * upload history,
 * processing status,
 * vector status
 * are maintained inside MongoDB.
 *
 * This file is intentionally left for
 * backward compatibility.
 *
 * It will be removed completely
 * after Phase 7 Cleanup.
 * ==========================================================
 */

export const registerDocument = () => {

    return;

};

export const isDocumentIndexed = () => {

    return false;

};

export const getDocument = () => {

    return null;

};

export const getAllDocuments = () => {

    return [];

};

export const totalIndexedDocuments = () => {

    return 0;

};

export const removeDocument = () => {

    return;

};