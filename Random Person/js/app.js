"use strict";

const btn = document.querySelector(".btn");
const img = document.querySelector(".card-img-top");
const firstname = document.getElementById("name");
const lastname = document.getElementById("surname");
const place = document.getElementById("location");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

btn.addEventListener("click", getRandomPerson);

function getRandomPerson() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        img.src = element.picture.large;
        firstname.textContent = element.name.first;
        lastname.textContent = element.name.last;
        place.textContent = `${element.location.country}, ${element.location.city}`;
        phone.textContent = element.phone;
        email.textContent = element.email;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
