const Reminder = require("../models/reminderModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const fs = require("fs");
const moment = require("moment");

// const pdf = require("pdf-creator-node");
const path = require("path");
// const options = require("./../helpers/options");
// const data = require("./../helpers/data");
// const QRCode = require("qrcode");
// const pdf = require("html-pdf");
const ejs = require("ejs");

exports.getLogin = catchAsync(async (req, res, next) => {
  // const resume = await Resume.findById(req.params.resumeId);

  res.status(200).render("login1", {
    title: "Login Page",
  });
});

exports.getSignup = catchAsync(async (req, res, next) => {
  // const resume = await Resume.findById(req.params.resumeId);

  res.status(200).render("signup1", {
    title: "Signup Page",
  });
});

exports.getdashboard = catchAsync(async (req, res, next) => {
  const reminders = await Reminder.find({ created_by: req.user.id });
  const user = await User.findById(req.user.id);
  console.log(reminders);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  res.status(200).render("dashboard", {
    title: "Your Dashboard",
    reminders,
    user: user,
    date: `${moment(new Date(Date.now()), "MM/DD/YYYY").format("Do")} Of ${
      months[new Date().getMonth()]
    }`,
  });
});

exports.setReminder = catchAsync(async (req, res, next) => {
  // const resume = await Resume.findById(req.params.resumeId);

  res.status(200).render("createReminder.ejs", {
    title: "Create Your resume",
  });
});

exports.editReminder = catchAsync(async (req, res, next) => {
  const reminder = await Reminder.findById(req.params.reminderID);

  if (!reminder) {
    console.log("No reminder");
  }
  res.status(200).render("editReminder1.ejs", {
    title: "Edit Your resume",
    reminder: reminder,
  });
});

exports.viewReminders = catchAsync(async (req, res, next) => {
  const reminders = await Reminder.find({ created_by: req.user.id });

  if (!reminders) {
    console.log("No reminders");
  }
  res.status(200).render("viewReminders.ejs", {
    title: "Edit Your resume",
    reminders: reminders,
  });
});

exports.deleteReminder = catchAsync(async (req, res, next) => {
  const reminders = await Reminder.find({
    created_by: req.user.id,
  });

  if (!reminders) {
    console.log("No reminders");
  }
  res.status(200).render("deleteReminder.ejs", {
    title: "Edit Your resume",
    reminders: reminders,
  });
});

exports.disableReminder = catchAsync(async (req, res, next) => {
  const reminders = await Reminder.find({
    created_by: req.user.id,
  });

  if (!reminders) {
    console.log("No reminders");
  }
  res.status(200).render("disableReminder.ejs", {
    title: "Disable Your resume",
    reminders: reminders,
  });
});

exports.enableReminder = catchAsync(async (req, res, next) => {
  const reminders = await Reminder.find({
    created_by: req.user.id,
  });

  if (!reminders) {
    console.log("No reminders");
  }
  res.status(200).render("enableReminder.ejs", {
    title: "Disable Your resume",
    reminders: reminders,
  });
});
