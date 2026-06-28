import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import companyRoutes from "./routes/company.routes.js";
import financialRoutes from "./routes/financial.routes.js";
import sentimentRoutes from "./routes/sentiment.routes.js";
import decisionRoutes from "./routes/decision.routes.js";


const app = express();

// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Routes
app.use("/api/health", healthRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/company", companyRoutes);

app.use("/api/financial", financialRoutes);

app.use("/api/sentiment", sentimentRoutes);

app.use("/api/decision", decisionRoutes);


export default app;