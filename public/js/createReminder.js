import axios from "axios";
import { showAlert } from "./alerts";

export const createReminder = async (data) => {
  console.log(data);
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/reminder",
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", "Your Reminder has been created successfully");
      window.setTimeout(() => {
        console.log(res);
        location.assign("/dashboard");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.messsage);
    // console.log(err.response.data.message);
  }
};

export const editReminder = async (data) => {
  console.log(data.get("reminderID"));
  try {
    const res = await axios({
      method: "POST",
      url: `/api/v1/reminder/${data.get("reminderID")}`,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", "Your Reminder has been Edited successfully");
      window.setTimeout(() => {
        console.log(res);
        location.assign("/dashboard");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.messsage);
    // console.log(err.response.data.message);
  }
};
