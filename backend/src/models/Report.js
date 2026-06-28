import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    research: {
      summary: String,
      industry: String,
      competitors: [String],
    },

    financial: {
      revenue: String,
      profit: String,
      debt: String,
      peRatio: String,
    },

    sentiment: {
      score: Number,
      summary: String,
      positiveNews: [String],
      negativeNews: [String],
    },

    decision: {
      recommendation: {
        type: String,
        enum: ["BUY", "HOLD", "SELL"],
      },
      reason: String,
    },

    confidence: {
      type: Number,
      min: 0,
      max: 100,
    },

    sources: [String],

    executionTime: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Report", reportSchema);