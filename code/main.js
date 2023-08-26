//The google form code
const scriptURL = '';
const form = document.forms['feedback-form']
form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Thank you! your form is submitted successfully." ))
		.then(() => {  window.location.reload(); })
		.catch(error => console.error('Error!', error.message))
})



//toggle between dark/light modes 
const modeToggle = document.getElementById('mode-toggle');
const currentMode = document.querySelector('.container');

function changeMode() {
    //If It is dark make it light:
    if (currentMode.classList.contains('dark-mode')) {
      currentMode.classList.remove('dark-mode');
      currentMode.classList.add('light-mode');
    }
    
     //If It is light make it dark:
    else {
      currentMode.classList.remove('light-mode');
      currentMode.classList.add('dark-mode');
  }
}
modeToggle.addEventListener('click', function () { changeMode() });

//Categorizing projects:
  const allButton = document.querySelector('.all-button');
  const softwareButton = document.querySelector(".software-button");
  const hardwareButton = document.querySelector(".hardware-button");
  const softwareProjects = document.querySelectorAll(".software");
  const hardwareProjects = document.querySelectorAll(".hardware");
  
function addAllProjects() {
  allButton.style.color = "#00ADB5";
  if (currentMode.classList.contains('dark-mode')) {
    softwareButton.style.color = "#000";
    hardwareButton.style.color = "#000";
}
  else {
    softwareButton.style.color = "#fff";
    hardwareButton.style.color = "#fff"; 
  }
  softwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });

  hardwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
  }
function handleSoftwareButton() {
  softwareButton.style.color = "#00ADB5";
  if (currentMode.classList.contains('dark-mode')) {
    allButton.style.color = "#000";
    hardwareButton.style.color = "#000";
  }
  else {
    allButton.style.color = "#fff";
    hardwareButton.style.color = "#fff"; 
  }
  softwareProjects.forEach((element) => {
    if (!element.classList.contains("hide")) element.classList.add("hide");
  });

  hardwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
  }
function handleHardwareButton() {
  hardwareButton.style.color = "#00ADB5";
  if (currentMode.classList.contains('dark-mode')) {
    allButton.style.color = "#000";
    softwareButton.style.color = "#000";
  }
  else {
    allButton.style.color = "#fff";
    softwareButton.style.color = "#fff"; 
  }
  hardwareProjects.forEach((element) => {
    if (!element.classList.contains("hide")) element.classList.add("hide");
  });

  softwareProjects.forEach((element) => {
    if (element.classList.contains("hide")) element.classList.remove("hide");
  });
  }
softwareButton.addEventListener("click", function () { handleSoftwareButton() });
hardwareButton.addEventListener("click", function () {handleHardwareButton()});
allButton.addEventListener("click", function () { addAllProjects() });


