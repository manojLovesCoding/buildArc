// models/Lead.js

import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    leadType: {
      type: String,
      enum: ["Cold Lead", "Warm Lead", "Hot Lead"],
      default: "Cold Lead",
    },

    source: {
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

    notes: {
      type: String,
      trim: true,
    },

    assignedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    tags: [
      {
        type: String,
      },
    ],

    followUpRequired: {
      type: Boolean,
      default: false,
    },

    sendWelcomeEmail: {
      type: Boolean,
      default: false,
    },

    notifyRegionalManager: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "converted"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;