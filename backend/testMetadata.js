import { loadPDF } from "./src/rag/loaders/pdf.loader.js";
import { buildMetadata } from "./src/rag/processors/metadata.processor.js";

const pdf = await loadPDF("./uploads/pdf/tesla_annual_report.pdf");

const metadata = buildMetadata(pdf);

console.log(metadata);