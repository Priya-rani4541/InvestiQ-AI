import { loadPDF } from "./src/rag/loaders/pdf.loader.js";
import { cleanText } from "./src/rag/processors/cleaner.processor.js";
import { splitIntoChunks } from "./src/rag/processors/chunking.processor.js";

const pdf = await loadPDF("./uploads/pdf/tesla_annual_report.pdf");

const cleaned = cleanText(pdf.text);

const chunks = await splitIntoChunks(cleaned);

console.log("Total Chunks :", chunks.length);

console.log(chunks[0]);