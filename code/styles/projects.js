const allButton = document.querySelector("all-button");
const softwareButton = document.querySelector("software-button");
const hardwareButton = document.querySelector("hardware-button");
const softwareProjects = document.querySelectorAll("software");
const hardwareProjects = document.querySelectorAll("hardware");

function addAllProjects() {
  softwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });

  hardwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
}

function handleSoftwareButton() {
  softwareProjects.forEach((element) => {
    if (!element.classList.contains("hide")) element.classList.add("hide");
  });

  hardwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
}

function handleHardwareButton() {
  hardwareProjects.forEach((element) => {
    if (!element.classList.contains("hide")) element.classList.add("hide");
  });

  softwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
}

allButton.addEventListener("click", addAllProjects());
softwareButton.addEventListener("click", handleSoftwareButton());
hardwareButton.addEventListener("click", handleHardwareButton());
