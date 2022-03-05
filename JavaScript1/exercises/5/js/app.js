// massivdəki sondan 4 elementin cəmini tapın
const arr = [13, 46, 59, 88, 40, 40, 4, 6, 8];

const n = 4;
const cut = arr.slice(-n);

function getSum(total, num) {
  return total + num;
}

document.write(cut.reduce(getSum) + `<br>`);

// massivdəki əvvəldən 2 elementin cəmini tapın
const two = arr.slice(0, 2);

document.write(two.reduce(getSum) + `<br>`);

// massivdəki 4-cü sırada duran element ilə 6-cı sırada duran elementin cəmini tapın
const num1 = arr[3];
const num2 = arr[5];

document.write(num1 + num2);
