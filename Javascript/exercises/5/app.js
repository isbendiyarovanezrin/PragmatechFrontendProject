// massivdəki sondan 4 elementin cəmini tapın
let arr = [13, 46, 59, 88, 40, 40, 4, 6, 8];

n = 4;
cut = arr.slice(-n);

function getSum(total, num) {
  return total + num;
}

document.write(cut.reduce(getSum));
