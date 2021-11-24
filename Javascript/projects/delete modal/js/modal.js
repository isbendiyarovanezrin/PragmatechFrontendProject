let btn = document.getElementById("btn");
let modal = document.getElementById("modal");
let span = document.getElementById("close");
let cancelBtn = document.getElementById("btn-cancel");
let deleteBtn = document.getElementById("btn-delete");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

cancelBtn.onclick = function () {
  modal.style.display = "none";
};

deleteBtn.onclick = function () {
  modal.style.display = "none";
};
