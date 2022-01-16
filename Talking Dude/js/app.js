const btn = document.getElementById("btn");
const input = document.getElementById("input");
const p = document.getElementById("text");

btn.addEventListener("click", sendMessage);

function sendMessage() {
  p.textContent = input.value;
}
