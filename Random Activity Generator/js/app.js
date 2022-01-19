"use strict";

const btn = document.getElementById("btn");
const p = document.getElementById("text");
const span = document.getElementById("type");

btn.addEventListener("click", getRandomActivity);

function getRandomActivity() {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      p.textContent = `${data.activity}.`;
      span.textContent = `#${data.type}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
