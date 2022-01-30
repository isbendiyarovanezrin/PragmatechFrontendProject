// Dörd ədəd daxil edin. Onlardan ən böyüyünü ekrana yazdırın.

const num1 = prompt("Birinci ədədi daxil edin");
const num2 = prompt("İkinci ədədi daxil edin");
const num3 = prompt("Üçüncü ədədi daxil edin");
const num4 = prompt("Dördüncü ədədi daxil edin");

// Birinci yol
const largest = Math.max(num1, num2, num3, num4);
document.write(largest);

// İkinci yol
// if (num1 > num2 && num1 > num3 && num1 > num4) {
//   document.write(num1);
// } else if (num2 > num1 && num2 > num3 && num2 > num4) {
//   document.write(num2);
// } else if (num3 > num1 && num3 > num2 && num2 > num4) {
//   document.write(num3);
// } else {
//   document.write(num4);
// }
