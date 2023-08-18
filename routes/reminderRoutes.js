const express = require("express");
const reminderController = require("../controllers/reminderController");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");
const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .post(reminderController.createReminder)
  .get(reminderController.getAllReminders);

router
  .route("/:reminderID")
  .delete(reminderController.deleteReminder)
  .get(reminderController.getAReminder)
  .post(reminderController.modifyReminder);
module.exports = router;
