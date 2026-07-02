import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export const loadPDF = async (filePath) => {
  if (!filePath) {
    throw new Error("PDF file path is required.");
  }

  const loader = new PDFLoader(filePath);

  const docs = await loader.load();

  const fullText = docs.map((doc) => doc.pageContent).join("\n");

  return {
    fileName: filePath.split(/[\\/]/).pop(),
    filePath,
    pageCount: docs.length,
    text: fullText,
    documents: docs,
  };
};