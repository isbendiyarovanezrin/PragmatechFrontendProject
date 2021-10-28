// massivdəki sondan 4 elementin cəmini tapın
let arr = [13, 46, 59, 88, 40, 40, 4, 6, 8];

let n = 4;
let cut = arr.slice(-n);

function getSum(total, num) {
  return total + num;
}

document.write(cut.reduce(getSum) + `<br>`);

// massivdəki əvvəldən 2 elementin cəmini tapın
let two = arr.slice(0, 2);

document.write(two.reduce(getSum));
