"use strict";

const btn = document.getElementById("btn");
const p = document.getElementById("text");
const input = document.getElementById("input");

btn.addEventListener("click", getAge);

function getAge() {
  fetch(`https://api.agify.io/?name=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      p.textContent = `Your age is: ${data.age}`;
      if (input.value == "") {
        p.textContent = "Please enter your name.";
        input.focus();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
