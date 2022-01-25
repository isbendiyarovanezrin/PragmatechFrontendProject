const input = document.getElementById("input");
const p = document.getElementById("text");
const resetBtn = document.getElementById("reset-btn");
const calculateBtn = document.getElementById("calculate-button");

calculateBtn.addEventListener("click", calculateFactorial);
resetBtn.addEventListener("click", resetInput);

function calculateFactorial() {
  if (input.value == "") return;
  p.textContent = `n! = ${fib(input.value)}`;
}

function fib(n) {
  if (n <= 1) return n;
  return n * fib(n - 1);
}

function resetInput() {
  input.value = null;
  p.textContent = null;
}
