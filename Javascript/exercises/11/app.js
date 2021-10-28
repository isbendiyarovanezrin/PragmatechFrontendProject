function calculator() {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let operation = document.getElementById("operation").value;
  let result = document.getElementById("result");

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
