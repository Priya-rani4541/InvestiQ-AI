import { processDocument } from "./src/rag/services/document.service.js";

const result = await processDocument("./uploads/pdf/tesla_annual_report.pdf");

console.log(result.metadata);

console.log(result.statistics);

console.log("Chunks :", result.chunks.length);

console.log(result.chunks[0]);