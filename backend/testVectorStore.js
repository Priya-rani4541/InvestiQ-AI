import { addVectors, totalVectors } from "./src/rag/vectorstore/vectorStore.service.js";

const fakeDocuments = [

    {

        documentId: "tesla",

        embedding: [1, 2, 3],

        metadata: {},

        content: "Tesla"

    },

    {

        documentId: "apple",

        embedding: [4, 5, 6],

        metadata: {},

        content: "Apple"

    }

];

await addVectors(fakeDocuments);

console.log(

    "Stored Documents :",

    await totalVectors()

);