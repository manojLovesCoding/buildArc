import mongoose from "mongoose";

const exhibitorSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    industry: {
      type: String,
      trim: true,
    },

    website: {
      type: String,
      trim: true,
    },

    headquarters: {
      type: String,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    jobTitle: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    boothFormat: {
      type: String,
      enum: ["Standard Booth", "Premium Booth", "Custom Booth"],
      default: "Standard Booth",
    },

    boothSize: {
      type: String,
      enum: ["10 x 10", "10 x 20", "20 x 20"],
    },

    notes: {
      type: String,
      trim: true,
    },

    assignedManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Exhibitor = mongoose.model("Exhibitor", exhibitorSchema);

export default Exhibitor;