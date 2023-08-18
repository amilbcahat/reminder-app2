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
    },
    description: {
      type: String,
    },
    subject: {
      type: String,
    },
    email: {
      type: String,
    },
    contactNo: {
      type: Number,
    },
    smsNo: {
      type: Number,
    },
    active: {
      type: Boolean,
      default: true,
    },
    recur7Days: {
      type: Boolean,
      default: false,
    },
    recur5Days: {
      type: Boolean,
      default: false,
    },
    recur3Days: {
      type: Boolean,
      default: false,
    },
    recur2Days: {
      type: Boolean,
      default: false,
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
