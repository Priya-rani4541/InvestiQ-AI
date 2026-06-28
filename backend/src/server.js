import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./database/connectDB.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`🚀 Server Running`);
      console.log(`🌐 http://localhost:${PORT}`);
      console.log(`🛠 Environment : ${process.env.NODE_ENV}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();