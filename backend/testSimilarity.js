import {

    addVectors,

    searchVectors

} from "./src/rag/vectorstore/vectorStore.service.js";

await addVectors([

    {

        documentId: "doc1",

        embedding: [1, 2, 3],

        content: "Tesla"

    },

    {

        documentId: "doc2",

        embedding: [9, 8, 7],

        content: "Apple"

    },

    {

        documentId: "doc3",

        embedding: [1, 2, 4],

        content: "Tesla Earnings"

    }

]);

const results = await searchVectors(

    [1, 2, 3],

    2

);

console.log(results);