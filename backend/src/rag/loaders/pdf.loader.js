import fs from "fs";
import pdfParse from "pdf-parse";

export const loadPDF = async (filePath) => {

    if (!filePath) {
        throw new Error("PDF file path is required.");
    }

    const buffer = fs.readFileSync(filePath);

    const pdf = await pdfParse(buffer);

    return {

        fileName: filePath.split(/[\\/]/).pop(),

        filePath,

        pageCount: pdf.numpages,

        text: pdf.text,

        documents: []

    };

};