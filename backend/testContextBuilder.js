import { retrieveRelevantChunks } from "./src/rag/retriever/retriever.service.js";

import { addVectors } from "./src/rag/vectorstore/vectorStore.service.js";

import { generateEmbedding } from "./src/rag/embeddings/embedding.service.js";

import { buildContext } from "./src/rag/context/contextBuilder.service.js";

const docs = [

    {

        documentId: "tesla",

        content: "Tesla builds electric vehicles."

    },

    {

        documentId: "apple",

        content: "Apple builds iPhones."

    },

    {

        documentId: "tesla2",

        content: "Tesla develops autonomous driving."

    }

];

for (const doc of docs) {

    doc.embedding = await generateEmbedding(

        doc.content

    );

}

await addVectors(docs);

const retrieved = await retrieveRelevantChunks(

    "Electric vehicle company",

    2

);

const context = buildContext(

    retrieved

);

console.log(context);