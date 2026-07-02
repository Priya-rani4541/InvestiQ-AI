import dotenv from "dotenv";
dotenv.config();

import { generateEmbedding } from "./src/rag/embeddings/embedding.service.js";

const vector = await generateEmbedding(
  "Tesla is an electric vehicle company."
);

console.log("Vector Length :", vector.length);
console.log(vector.slice(0,10));