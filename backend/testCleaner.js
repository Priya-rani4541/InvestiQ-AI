import { loadPDF } from "./src/rag/loaders/pdf.loader.js";
import { cleanText, getTextStatistics } from "./src/rag/processors/cleaner.processor.js";

const pdf = await loadPDF("./uploads/pdf/tesla_annual_report.pdf");

const cleaned = cleanText(pdf.text);

console.log(getTextStatistics(cleaned));