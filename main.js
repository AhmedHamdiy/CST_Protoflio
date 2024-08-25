//The google form code
const scriptURL = "";
const form = document.forms["feedback-form"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

//toggle between dark/light modes
const modeToggle = document.getElementById("mode-toggle");
const currentMode = document.querySelector(".container");

function changeMode() {
  //If It is dark make it light:
  if (currentMode.classList.contains("dark-mode")) {
    currentMode.classList.remove("dark-mode");
    currentMode.classList.add("light-mode");
  }

  //If It is light make it dark:
  else {
    currentMode.classList.remove("light-mode");
    currentMode.classList.add("dark-mode");
  }
}
modeToggle.addEventListener("click", function () {
  changeMode();
});

//Categorizing projects:
const allButton = document.querySelector(".all-button");
const softwareButton = document.querySelector(".software-button");
const WebDevelopmentButton = document.querySelector(".Web-development-button");
const softwareProjects = document.querySelectorAll(".software");
const WebDevelopmentProjects = document.querySelectorAll(".Web-development");

function addAllProjects() {
  allButton.style.color = "#00ADB5";
  if (currentMode.classList.contains("dark-mode")) {
    softwareButton.style.color = "#000";
    WebDevelopmentButton.style.color = "#000";
  } else {
    softwareButton.style.color = "#fff";
    WebDevelopmentButton.style.color = "#fff";
  }
  softwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });

  WebDevelopmentProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
}
function handleSoftwareButton() {
  softwareButton.style.color = "#00ADB5";
  if (currentMode.classList.contains("dark-mode")) {
    allButton.style.color = "#000";
    WebDevelopmentButton.style.color = "#000";
  } else {
    allButton.style.color = "#fff";
    WebDevelopmentButton.style.color = "#fff";
  }
  WebDevelopmentProjects.forEach((element) => {
    if (!element.classList.contains("hide")) element.classList.add("hide");
  });

  softwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
}
function handleWebDevelopmentButton() {
  WebDevelopmentButton.style.color = "#00ADB5";
  if (currentMode.classList.contains("dark-mode")) {
    allButton.style.color = "#000";
    softwareButton.style.color = "#000";
  } else {
    allButton.style.color = "#fff";
    softwareButton.style.color = "#fff";
  }
  softwareProjects.forEach((element) => {
    if (!element.classList.contains("hide")) element.classList.add("hide");
  });

  WebDevelopmentProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
}
softwareButton.addEventListener("click", function () {
  handleSoftwareButton();
});
WebDevelopmentButton.addEventListener("click", function () {
  handleWebDevelopmentButton();
});
allButton.addEventListener("click", function () {
  addAllProjects();
});

//linking projects to git hub repos

const owler = document.querySelector(".owler");
const ubuntastic = document.querySelector(".ubuntastic");
const sanay3y = document.querySelector(".sanay3y");
const racing = document.querySelector(".paint-for-kids");
const schedulerly = document.querySelector(".schedulerly");
const qlogger = document.querySelector(".qlogger");

owler.addEventListener("click", function () {
  window.open("https://github.com/AhmedHamdiy/Olwer", "_blank");
});

ubuntastic.addEventListener("click", function () {
  window.open("https://github.com/AhmedHamdiy/Ubuntastic", "_blank");
});

sanay3y.addEventListener("click", function () {
  window.open("https://github.com/AhmedHamdiy/Sanay3yOnTheGo", "_blank");
});

racing.addEventListener("click", function () {
  window.open("https://github.com/AhmedHamdiy/Sabek-Lahek", "_blank");
});

schedulerly.addEventListener("click", function () {
  window.open("https://github.com/AhmedHamdiy/Schedulerly", "_blank");
});

qlogger.addEventListener("click", function () {
  window.open("https://github.com/AhmedHamdiy/Qlogger", "_blank");
});
