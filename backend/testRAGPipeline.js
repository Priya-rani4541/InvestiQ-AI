import { processDocument } from "./src/rag/services/document.service.js";

import {

    generateBatchEmbeddings

} from "./src/rag/embeddings/embedding.service.js";

import {

    addVectors

} from "./src/rag/vectorstore/vectorStore.service.js";

import {

    retrieveRelevantChunks

} from "./src/rag/retriever/retriever.service.js";

import {

    buildContext

} from "./src/rag/context/contextBuilder.service.js";

import {

    formatContext

} from "./src/rag/context/contextFormatter.service.js";

import {

    buildPromptContext

} from "./src/rag/context/promptContext.service.js";

console.log("Loading PDF...");

const pdf = await processDocument(

"./uploads/pdf/tesla_annual_report.pdf"

);

console.log("Generating Embeddings...");

const vectors = await generateBatchEmbeddings(

pdf.chunks.slice(0,20)

);

const docs = pdf.chunks.slice(0,20).map(

(chunk,index)=>({

documentId:chunk.id,

content:chunk.content,

embedding:vectors[index],

score:1

})

);

await addVectors(docs);

const retrieved = await retrieveRelevantChunks(

"Tesla Revenue",

5

);

const context = buildContext(retrieved);

const formatted = formatContext(retrieved);

const prompt = buildPromptContext(

"Tesla Revenue",

formatted

);

console.log(prompt);