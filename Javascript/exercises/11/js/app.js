function calculator() {
  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);
  const operation = document.getElementById("operation").value;
  const result = document.getElementById("result");

  if (operation == "+") {
    result.value = number1 + number2;
  } else if (operation == "-") {
    result.value = number1 - number2;
  } else if (operation == "*") {
    result.value = number1 * number2;
  } else {
    result.value = number1 / number2;
  }
}
