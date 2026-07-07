import mongoose from "mongoose";
import { logger } from "../logger/logger.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    logger.info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    logger.info("MongoDB Atlas Connected Successfully");
    logger.info(`Host : ${connection.connection.host}`);
    logger.info(`Database : ${connection.connection.name}`);
    logger.info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  } catch (error) {
    logger.error("MongoDB Connection Failed");
    logger.error(error.message);

    process.exit(1);
  }
};

export default connectDB;