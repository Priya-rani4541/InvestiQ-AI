import { retrieveRelevantChunks } from "./src/rag/retriever/retriever.service.js";

import { addVectors } from "./src/rag/vectorstore/vectorStore.service.js";

import { generateEmbedding } from "./src/rag/embeddings/embedding.service.js";

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

const results = await retrieveRelevantChunks(

    "Electric vehicle company",

    2

);

console.log("Retrieved Chunks:");

results.forEach((doc, index) => {

    console.log("-------------------------");

    console.log(`Rank : ${index + 1}`);

    console.log(`Document : ${doc.documentId}`);

    console.log(`Score : ${doc.score.toFixed(4)}`);

    console.log(`Content : ${doc.content}`);

});