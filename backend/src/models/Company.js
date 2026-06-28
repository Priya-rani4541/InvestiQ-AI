import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    symbol: {
      type: String,
      required: true,
      uppercase: true,
      unique: true,
      trim: true,
    },

    sector: {
      type: String,
      default: "",
    },

    industry: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Company", companySchema);