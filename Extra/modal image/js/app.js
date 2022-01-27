"use strict"

let img = document.getElementById("myImg");
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
