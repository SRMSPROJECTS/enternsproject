function changeBackground(weatherClass) {
  document.body.className = "";
  document.body.classList.add(weatherClass);
}

document
  .getElementById("sunnyButton")
  .addEventListener("click", () => changeBackground("sunny"));
document
  .getElementById("rainyButton")
  .addEventListener("click", () => changeBackground("rainy"));
document
  .getElementById("cloudyButton")
  .addEventListener("click", () => changeBackground("cloudy"));
document
  .getElementById("snowyButton")
  .addEventListener("click", () => changeBackground("snowy"));
document
  .getElementById("stormyButton")
  .addEventListener("click", () => changeBackground("stormy"));
