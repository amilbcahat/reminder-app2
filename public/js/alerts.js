export const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

// type is 'success' or 'error'
export const showAlert = (type, msg, time = 7) => {
  hideAlert();
  const markup = `<center><div class="alert alert--success">${msg}</div></center>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, time * 1000);
};
