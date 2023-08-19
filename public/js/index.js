import "@babel/polyfill";
import axios from "axios";

import { login, logout } from "./login";
import { signup } from "./signup";
import { createReminder, editReminder, deleteReminder } from "./createReminder";
// import { deleteResume, editResume } from "./updateResume";

const loginForm = document.querySelector(".form--login");
const signupForm = document.querySelector(".form--signup");
const reminderForm = document.querySelector(".form--reminder");
const editreminderForm = document.querySelector(".form--editreminder");
const deletereminderForm = document.querySelector(".form--deletereminder");
const disableereminderForm = document.querySelector(".form--disablereminder");
const enablereminderForm = document.querySelector(".form--enablereminder");

// const resumeForm = document.querySelector(".form--resume");
// const btnDelete = document.querySelector(".btn--delete");
// const btnEdit = document.querySelector(".btn--edit");

if (loginForm) {
  document.querySelector(".form--login").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // console.log('button clicked');
    login(email, password);
  });
}

if (signupForm) {
  document.querySelector(".btn-signup").addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;

    // console.log('button clicked');
    signup(name, email, password, passwordConfirm);
  });
}

if (reminderForm) {
  document
    .querySelector(".btn-reminder")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const date = document.querySelector("#date").value;
      const subject = document.querySelector("#subject").value;
      const description = document.querySelector("#description").value;
      const email = document.querySelector("#email").value;
      const contactNo = document.querySelector("#contactNo").value;
      const smsNo = document.querySelector("#smsNo").value;

      if (document.querySelector("#recur7Days").checked) {
        var recur7Days = "true";
      }
      if (document.querySelector("#recur5Days").checked) {
        var recur5Days = "true";
      }
      if (document.querySelector("#recur3Days").checked) {
        var recur3Days = "true";
      }
      if (document.querySelector("#recur2Days").checked) {
        var recur2Days = "true";
      }
      // data = {
      //   date: date,
      //   subject: subject,
      //   description: description,
      //   email: email,
      //   contactNo: contactNo,
      //   smsNo: smsNo,
      // };
      // const formData = new FormData();
      // formData.append("date", date);
      // formData.append("subject", subject);
      // formData.append("description", description);
      // formData.append("email", email);
      // formData.append("contactNo", contactNo);
      // formData.append("smsNo", smsNo);
      // Display the FormData values (for demonstration purposes)
      // for (let [key, value] of data) {
      //   console.log(key, value);
      // }
      // createReminder(formData, "data");
      createReminder({
        date,
        subject,
        description,
        email,
        contactNo,
        smsNo,
        recur7Days,
        recur5Days,
        recur3Days,
        recur2Days,
      });
    });
}

if (disableereminderForm) {
  document
    .querySelector(".btn-disablereminder")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const date = document.querySelector("#date").value;
      const subject = document.querySelector("#subject").value;
      const description = document.querySelector("#description").value;
      const email = document.querySelector("#email").value;
      const contactNo = document.querySelector("#contactNo").value;
      const smsNo = document.querySelector("#smsNo").value;
      const active = "false";
      if (document.querySelector("#recur7Days").checked) {
        var recur7Days = "true";
      }
      if (document.querySelector("#recur5Days").checked) {
        var recur5Days = "true";
      }
      if (document.querySelector("#recur3Days").checked) {
        var recur3Days = "true";
      }
      if (document.querySelector("#recur2Days").checked) {
        var recur2Days = "true";
      }

      // Display the FormData values (for demonstration purposes)
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      createReminder({
        date,
        subject,
        description,
        email,
        contactNo,
        smsNo,
        recur7Days,
        recur5Days,
        recur3Days,
        recur2Days,
        active,
      });
    });
}

if (enablereminderForm) {
  document
    .querySelector(".btn-enablereminder")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const date = document.querySelector("#date").value;
      const subject = document.querySelector("#subject").value;
      const description = document.querySelector("#description").value;
      const email = document.querySelector("#email").value;
      const contactNo = document.querySelector("#contactNo").value;
      const smsNo = document.querySelector("#smsNo").value;
      const active = "true";
      if (document.querySelector("#recur7Days").checked) {
        var recur7Days = "true";
      }
      if (document.querySelector("#recur5Days").checked) {
        var recur5Days = "true";
      }
      if (document.querySelector("#recur3Days").checked) {
        var recur3Days = "true";
      }
      if (document.querySelector("#recur2Days").checked) {
        var recur2Days = "true";
      }

      // Display the FormData values (for demonstration purposes)
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      createReminder({
        date,
        subject,
        description,
        email,
        contactNo,
        smsNo,
        recur7Days,
        recur5Days,
        recur3Days,
        recur2Days,
        active,
      });
    });
}

if (editreminderForm) {
  document
    .querySelector(".btn-editreminder")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const date = document.querySelector("#date").value;
      const subject = document.querySelector("#subject").value;
      const description = document.querySelector("#description").value;
      const email = document.querySelector("#email").value;
      const contactNo = document.querySelector("#contactNo").value;
      const smsNo = document.querySelector("#smsNo").value;
      const reminderID = document.querySelector("#reminderID").value;

      if (document.querySelector("#recur7Days").checked) {
        var recur7Days = "true";
      }
      if (document.querySelector("#recur5Days").checked) {
        var recur5Days = "true";
      }
      if (document.querySelector("#recur3Days").checked) {
        var recur3Days = "true";
      }
      if (document.querySelector("#recur2Days").checked) {
        var recur2Days = "true";
      }

      // Display the FormData values (for demonstration purposes)
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      editReminder({
        date,
        subject,
        description,
        email,
        contactNo,
        smsNo,
        recur7Days,
        recur5Days,
        recur3Days,
        recur2Days,
        reminderID,
      });
    });
}

if (deletereminderForm) {
  document
    .querySelector(".btn-deletereminder")
    .addEventListener("click", function (e) {
      e.preventDefault();

      var subject = document.getElementById("subject").value;
      var description = document.getElementById("description").value;

      // const formData = new FormData();
      // formData.append("subject", subject);
      // formData.append("description", reminders);

      // Display the FormData values (for demonstration purposes)
      // for (let [key, value] of formData.entries()) {
      //   console.log(key, value);
      // }
      deleteReminder({
        subject: subject,
        description: description,
      });
    });
}

// if (btnDelete) {
//   document.querySelector(".btn--delete").addEventListener("click", (e) => {
//     e.preventDefault();

//     const id = document.querySelector(".right").dataset.id;

//     deleteResume(id);
//   });
// }

// if (btnEdit) {
//   document.querySelector(".btn--edit").addEventListener("click", async (e) => {
//     e.preventDefault();
//     const id = document.querySelector(".right").dataset.id;
//     // console.log(id);
//     // location.assign(`/editResume/${id}`);
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const objective = document.getElementById("objective").value;
//     const phone = document.getElementById("phone").value;
//     const about = document.getElementById("about").value;
//     const edudetails = document.getElementById("edudetails").value;
//     const achievements = document.getElementById("achievements").value;
//     const project1 = document.getElementById("project1").value;
//     const project2 = document.getElementById("project2").value;
//     const edudetails1 = document.getElementById("edudetails1").value;
//     const edutimeperiod1 = document.getElementById("edutimeperiod1").value;
//     const edutimeperiod = document.getElementById("edutimeperiod").value;
//     const linkedin = document.getElementById("linkedin").value;
//     const skill = document.getElementById("skill").value;
//     const hobbies = document.getElementById("hobbies").value;
//     const designation = document.getElementById("designation").value;
//     const title = document.getElementById("title").value;

//     const location = document.getElementById("location").value;
//     const photo = document.getElementById("photo").files[0];

//     console.log(hobbies);
// const form = new FormData();
// form.append("name", name);
// form.append("email", email);
// form.append("objective", objective);
// form.append("phone", phone);
// form.append("about", about);
// form.append("edudetails", edudetails);
// form.append("achievements", achievements);
// form.append("project1", project1);
// form.append("project2", project2);
// form.append("edudetails1", edudetails1);
// form.append("edutimeperiod1", edutimeperiod1);
// form.append("edutimeperiod", edutimeperiod);
// form.append("linkedin", linkedin);
// form.append("skill", skill);
// form.append("hobbies", hobbies);
// form.append("designation", designation);
// form.append("location", location);
// form.append("photo", photo);
// console.log(hobbies);
// console.log(form.get(hobbies));
//     editResume(
//       id,
//       name,
//       email,
//       objective,
//       achievements,
//       edudetails,
//       edudetails1,
//       edutimeperiod1,
//       edutimeperiod,
//       skill,
//       hobbies,
//       phone,
//       about,
//       location,
//       project1,
//       project2,
//       photo,
//       designation,
//       linkedin,
//       title
//     );
//   });
// }
