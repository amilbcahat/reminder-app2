const express = require("express");
const resumeController = require("../controllers/reminderController");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const viewController = require("./../controllers/viewController");

const router = express.Router();

router.route("/").get(viewController.getLogin);
router.route("/signup").get(viewController.getSignup);

router
  .route("/dashboard")
  .get(authController.protect, viewController.getdashboard);

router.route("/modifyReminder").get(viewController.editReminder);

router
  .route("/setReminder")
  .get(authController.protect, viewController.setReminder);
router
  .route("/viewReminders")
  .get(authController.protect, viewController.viewReminders);
router
  .route("/deleteReminder")
  .get(authController.protect, viewController.deleteReminder);

router
  .route("/disableReminder")
  .get(authController.protect, viewController.disableReminder);

router
  .route("/enableReminder")
  .get(authController.protect, viewController.enableReminder);

router.route("/logout").get(authController.logout);

module.exports = router;
