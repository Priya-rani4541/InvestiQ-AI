import dotenv from "dotenv";
import { logger } from "./logger/logger.js";
dotenv.config();


import app from "./app.js";
import connectDB from "./database/connectDB.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      logger.info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      logger.info("Server Running");
      logger.info(`URL : http://localhost:${PORT}`);
      logger.info(`Environment : ${process.env.NODE_ENV}`);
      logger.info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    });
  } catch (error) {
    logger.error(error.stack || error.message);
  }
};

startServer();