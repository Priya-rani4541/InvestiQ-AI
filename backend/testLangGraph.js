import dotenv from "dotenv";
dotenv.config();

import workflow from "./src/langgraph/graph/workflow.js";

async function run() {

    console.log("====================================");
    console.log(" INVESTIQ-AI LANGGRAPH TEST ");
    console.log("====================================");

    const app = workflow.compile();

    const result = await app.invoke({

        company: "Tesla",

        uploadedDocuments: [

            {

                fileName: "tesla_annual_report.pdf",

                filePath: "./uploads/pdf/tesla_annual_report.pdf",

            },

        ],

    });

    console.log("\n====================================");
    console.log(" FINAL GRAPH STATE ");
    console.log("====================================\n");

    console.log(result);

}

run().catch(console.error);