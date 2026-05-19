import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    eventType: {
      type: String,
      enum: ["Conference", "Expo", "Workshop"],
      default: "Conference",
    },

    capacity: {
      type: Number,
      default: 0,
    },

    bannerImage: {
      type: String,
    },

    venueName: {
      type: String,
      trim: true,
    },

    venueAddress: {
      type: String,
      trim: true,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    visibility: {
      type: Boolean,
      default: true,
    },

    registrationOpen: {
      type: Boolean,
      default: true,
    },

    organizerNotes: {
      type: String,
      trim: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;