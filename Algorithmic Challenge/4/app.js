// 1-dən verilmiş ədədə qədər bütün ədədlərin vurulması

const number = 5;

function multiplyNumbers(number) {
  if (number <= 0) return 1;

  return number * multiplyNumbers(number - 1);
}

console.log(multiplyNumbers(number)); // 120
