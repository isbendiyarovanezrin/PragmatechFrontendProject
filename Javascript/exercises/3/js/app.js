// n tam ədədi verilir. Onun müsbət, mənfi və ya 0-a bərabər olmasını müəyyənləşdirin. n-in qiymətindən asılı olaraq "Positive", "Negative" və ya "Zero" verməli.
const n = 2001;

if (n == 0) {
  document.write("The number is ZERO");
} else if (n > 0) {
  document.write("The number is POSITIVE");
} else {
  document.write("The number is NEGATIVE");
}

// müsbət, mənfi və ya 0-a bərabər olmasını aşağıdakı kimi də yoxlamaq olar
document.write(`<br /> ${Math.sign(n)}`);
