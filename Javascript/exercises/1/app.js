// Dörd ədəd daxil edin. Onlardan ən böyüyünü ekrana yazdırın.

// Birinci yol
let num1 = prompt("birinci ədədi daxil edin");
let num2 = prompt("ikinci ədədi daxil edin");
let num3 = prompt("üçüncü ədədi daxil edin");
let num4 = prompt("dördüncü ədədi daxil edin");

let largest = Math.max(num1, num2, num3, num4);
document.write(largest);

// İkinci yol
let num1 = prompt("birinci ədədi daxil edin");
let num2 = prompt("ikinci ədədi daxil edin");
let num3 = prompt("üçüncü ədədi daxil edin");
let num4 = prompt("dördüncü ədədi daxil edin");

if (num1 > num2 && num1 > num3 && num1 > num4) {
  document.write(num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4) {
  document.write(num2);
} else if (num3 > num1 && num3 > num2 && num2 > num4) {
  document.write(num3);
} else {
  document.write(num4);
}
