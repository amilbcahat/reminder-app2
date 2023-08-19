const Reminder = require("./../models/reminderModel");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");

exports.createReminder = catchAsync(async (req, res, next) => {
  if (!req.body.created_by || req.body.created_by) {
    req.body.created_by = req.user.id;
  }

  // console.log(req.body);
  const reminder = await Reminder.create(req.body);

  res.status(201).json({
    status: "success",
    data: { data: reminder },
  });
});

exports.getAllReminders = catchAsync(async (req, res, next) => {
  const allreminders = await Reminder.find({ created_by: req.user.id });

  res.status(201).json({
    status: "success",
    data: allreminders,
  });
});

exports.deleteReminder = catchAsync(async (req, res, next) => {
  const resume = await Reminder.remove({
    $or: [
      {
        subject: req.body.subject,
      },
      {
        description: req.body.description,
      },
    ],
  });

  if (!resume) {
    return next(new AppError("No doc found with that ID", 404));
  }

  //   if (resume.created_by != req.user.id) {
  //     return next(new AppError("Current User cant access this resource", 403));
  //   }

  res.status(200).json({
    status: "success",
    data: { data: null },
  });
});

exports.getAReminder = catchAsync(async (req, res, next) => {
  const reminder = await Reminder.findById(req.params.reminderID);

  if (reminder.created_by == req.user.id) {
  } else {
    return next(new AppError("Current User cant access this resource", 403));
  }
  res.status(200).json({
    status: "success",
    data: {
      data: reminder,
    },
  });
});

exports.modifyReminder = catchAsync(async (req, res, next) => {
  console.log("request");
  console.log(req.body);
  const reminder = await Reminder.findById(req.params.reminderID);

  if (!reminder) {
    return next(new AppError("No doc found with that ID", 404));
  }

  if (reminder.created_by != req.user.id) {
    return next(new AppError("Current User cant access this resource", 403));
  } else {
    var Ureminder = await Reminder.findByIdAndUpdate(
      req.params.reminderID,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
  }

  res.status(200).json({
    status: "success",
    data: { data: Ureminder },
  });
});
