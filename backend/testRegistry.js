import crypto from "crypto";

import { indexPDF } from "../rag/indexing/pdfIndexer.service.js";

import {

    registerDocument,

    isDocumentIndexed,

} from "../rag/registry/documentRegistry.service.js";



import {

    registerDocument,

    isDocumentIndexed,

    totalIndexedDocuments,

    getAllDocuments,

} from "./src/rag/registry/documentRegistry.service.js";

registerDocument({

    hash: "abc123",

    fileName: "tesla.pdf",

    chunkCount: 601,

    vectorCount: 601,

});

console.log(

    "Indexed:",

    isDocumentIndexed("abc123")

);

console.log(

    "Total:",

    totalIndexedDocuments()

);

console.log(

    getAllDocuments()

);