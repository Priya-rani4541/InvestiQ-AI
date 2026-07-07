import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    /**
     * Company
     * Will be linked after analysis.
     * Can remain null for uploaded PDFs.
     */
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },

    /**
     * Original File Name
     */
    fileName: {
      type: String,
      required: true,
      trim: true,
    },

    /**
     * Stored UUID File Name
     */
    storedFileName: {
      type: String,
      required: true,
      trim: true,
    },

    /**
     * PDF File Path
     */
    filePath: {
      type: String,
      required: true,
      trim: true,
    },

    /**
     * MIME Type
     */
    fileType: {
      type: String,
      required: true,
      default: "application/pdf",
    },

    /**
     * SHA-256 Hash
     * Used to prevent duplicate uploads.
     */
    hash: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    /**
     * Total Chunks Generated
     */
    chunkCount: {
      type: Number,
      default: 0,
    },

    /**
     * Total Stored Embeddings
     */
    vectorCount: {
      type: Number,
      default: 0,
    },

    /**
     * Has PDF been indexed?
     */
    indexed: {
      type: Boolean,
      default: false,
    },

    /**
 * Index Status
 */
status: {
    type: String,
    enum: [
        "UPLOADED",
        "PROCESSING",
        "COMPLETED",
        "FAILED",
    ],
    default: "UPLOADED",
},

/**
 * Error Message
 */
errorMessage: {
    type: String,
    default: null,
},

/**
 * Retry Count
 */
retryCount: {
    type: Number,
    default: 0,
},

    /**
     * Upload User
     */
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    /**
     * Upload Timestamp
     */
    uploadedAt: {
      type: Date,
      default: Date.now,
    },

    /**
     * Index Timestamp
     */
    indexedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Company Search
 */
documentSchema.index({ company: 1 });

export default mongoose.model("Document", documentSchema);