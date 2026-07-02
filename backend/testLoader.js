import { loadPDF } from "./src/rag/loaders/pdf.loader.js";

const pdf = await loadPDF("./uploads/pdf/tesla_annual_report.pdf");

console.log(pdf);