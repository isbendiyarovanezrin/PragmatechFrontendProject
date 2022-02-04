const btn = document.querySelector(".btn");
const p = document.querySelector(".hex-color");

btn.addEventListener("click", changeColor);

function changeColor() {
  const hexColor = (document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 999000 + 100
  )}`);

  p.textContent = hexColor;
}
