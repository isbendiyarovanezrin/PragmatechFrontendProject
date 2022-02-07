"use strict";

const form = document.getElementById("form");
const list = document.getElementById("warning-list");
const passwordInput = document.getElementById("password");
const checkboxInput = document.getElementById("checkbox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const length = document.getElementById("length");
const number = document.getElementById("number");

passwordInput.addEventListener("focus", () => {
  list.style.visibility = "visible";
});

passwordInput.addEventListener("blur", () => {
  list.style.visibility = "hidden";
});

form.addEventListener("input", validatePassword);
form.addEventListener("submit", validatePassword);

function validatePassword(e) {
  e.preventDefault();

  if (checkboxInput.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }

  const value = passwordInput.value;

  const lowercaseRegex = /[a-z]/g;
  if (value.match(lowercaseRegex)) {
    lowercase.classList.remove("invalid");
    lowercase.classList.add("valid");
  } else {
    lowercase.classList.remove("valid");
    lowercase.classList.add("invalid");
  }

  const uppercaseRegex = /[A-Z]/g;
  if (value.match(uppercaseRegex)) {
    uppercase.classList.remove("invalid");
    uppercase.classList.add("valid");
  } else {
    uppercase.classList.remove("valid");
    uppercase.classList.add("invalid");
  }

  const numberRegex = /[0-9]/g;
  if (value.match(numberRegex)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
