// Kvadrat yaratmaq üçün daxil edilən 4 ədəddən ekrana kvadratın sahəsini, olmazsa, həmin ədədlərin cəmini yazın.

let num1 = prompt("birinci ədədi daxil edin");
let num2 = prompt("ikinci ədədi daxil edin");
let num3 = prompt("üçüncü ədədi daxil edin");
let num4 = prompt("dördüncü ədədi daxil edin");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
num4 = Number(num4);

if (num1 == num2 && num1 == num3 && num1 == num4) {
  alert("Kvadratın sahəsi: " + Math.pow(num1, 2)); // kvadratın sahəsi: S= a*a
} else {
  alert(num1 + num2 + num3 + num4);
}
