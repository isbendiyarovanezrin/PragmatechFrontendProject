const btn = document.getElementById("btn");
const p = document.getElementById("text");
const input = document.getElementById("input");

btn.addEventListener("click", copyText);

function copyText() {
  input.select();

  navigator.clipboard.writeText(input.value);

  p.innerHTML = `Copied the text: ${input.value}`;
}
