const { Timestamp } = require("bson");
const { timeStamp } = require("console");
const mongoose = require("mongoose");
// const Resume = require("./../models/resumeModel");
const validator = require("validator");

const reminderSchema = new mongoose.Schema(
  {
    created_by: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Reminder must belong to a user "],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    contactNo: {
      type: Number,
      trim: true,
    },
    smsNo: {
      type: Number,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
      trim: true,
    },
    recur7Days: {
      type: Boolean,
      default: false,
      trim: true,
    },
    recur5Days: {
      type: Boolean,
      default: false,
      trim: true,
    },
    recur3Days: {
      type: Boolean,
      default: false,
      trim: true,
    },
    recur2Days: {
      type: Boolean,
      default: false,
      trim: true,
    },
    date: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },

  { timestamps: true }
);

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;
