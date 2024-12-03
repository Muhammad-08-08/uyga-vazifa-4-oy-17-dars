document.addEventListener("DOMContentLoaded", () => {
  let hour = document.querySelector(".hour");
  let minut = document.querySelector(".minute");

  const darkMoon = document.querySelector(".dark-moon-box");
  const container = document.querySelector(".container");
  const blackWhite = document.querySelector(".black-white");
  const card1 = document.querySelector(".card1");
  const input = document.querySelector(".input");

  darkMoon.addEventListener("click", () => {
    blackWhite.classList.toggle("black-white-right");
    container.classList.toggle("moon");
    card1.classList.toggle("moon");
    input.classList.toggle("moon-input");
  });

  setInterval(() => {
    let newDay = new Date();
    hour.innerHTML = newDay.getHours().toString().padStart(2, "0");
    minut.innerHTML = newDay.getMinutes().toString().padStart(2, "0");
  }, 1000);

  let day = document.querySelector(".day");
  let month = document.querySelector(".month");
  let kun = document.querySelector(".kun");

  const weekDays = ["Yakshanba,", "Dushanba,", "Seshanba,", "Chorshanba,", "Payshanba,", "Juma,", "Shanba,"];
  day.innerHTML = weekDays[new Date().getDay()];

  kun.innerHTML = new Date().getDate().toString().padStart(2, "0");

  const months = [
    "yanvar", "fevral", "mart", "aprel", "may", "iyun",
    "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"
  ];
  month.innerHTML = months[new Date().getMonth()];

  let apiKey = ""
});
