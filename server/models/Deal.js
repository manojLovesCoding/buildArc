// models/Deal.js

import mongoose from "mongoose";

const dealItemSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    unitPrice: {
      type: Number,
      default: 0,
    },

    total: {
      type: Number,
      default: 0,
    },
  },
  { _id: false }
);

const dealSchema = new mongoose.Schema(
  {
    dealName: {
      type: String,
      required: true,
      trim: true,
    },

    dealValue: {
      type: Number,
      default: 0,
    },

    currency: {
      type: String,
      default: "USD - US Dollar",
    },

    pipelineStage: {
      type: String,
      enum: [
        "New",
        "Qualified",
        "Proposal",
        "Negotiation",
        "Closed Won",
        "Closed Lost",
      ],
      default: "New",
    },

    probability: {
      type: Number,
      default: 0,
    },

    expectedCloseDate: {
      type: Date,
    },

    assignedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    exhibitor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exhibitor",
    },

    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
    },

    notes: {
      type: String,
      trim: true,
    },

    attachments: [
      {
        type: String,
      },
    ],

    tags: [
      {
        type: String,
      },
    ],

    products: [dealItemSchema],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Deal = mongoose.model("Deal", dealSchema);

export default Deal;