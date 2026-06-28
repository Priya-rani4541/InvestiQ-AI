import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);
if (!process.env.GEMINI_API_KEY) {
    console.log("❌ Gemini API Key not found");
  } else {
    console.log("✅ Gemini API Key loaded successfully");
  }
export default genAI;