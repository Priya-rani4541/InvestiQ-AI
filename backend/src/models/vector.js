import mongoose from "mongoose";

const vectorSchema = new mongoose.Schema(
  {
    documentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
    },

    chunkIndex: {
      type: Number,
      required: true,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    embedding: {
      type: [Number],
      required: true,
    },

    metadata: {
      page: {
        type: Number,
        default: 0,
      },

      source: {
        type: String,
        default: "",
      },
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Frequently Used Indexes
 */

vectorSchema.index({ documentId: 1 });

vectorSchema.index({ chunkIndex: 1 });

export default mongoose.model("Vector", vectorSchema);