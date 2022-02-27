const colors = document.querySelectorAll(".color");

function changeBackgroundColor(e) {
  document.body.style.backgroundColor = getComputedStyle(
    e.target
  ).backgroundColor;
}

colors.forEach((color) =>
  color.addEventListener("click", changeBackgroundColor)
);
