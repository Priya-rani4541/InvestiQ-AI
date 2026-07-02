import { Annotation } from "@langchain/langgraph";

export const graphState = Annotation.Root({

  company: Annotation(),

// Future Structure:
  // [
  //   {
  //   fileName: "tesla_annual_report.pdf",
  //   filePath: "./uploads/pdf/tesla_annual_report.pdf"
  //   }
  // ]
  uploadedDocuments: Annotation(),
  

  retrievedContext: Annotation(),

  research: Annotation(),

  financial: Annotation(),

  sentiment: Annotation(),

  decision: Annotation(),

});