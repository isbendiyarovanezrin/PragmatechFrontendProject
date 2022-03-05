// Kvadrat yaratmaq üçün daxil edilən 4 ədəddən ekrana kvadratın sahəsini, olmazsa, həmin ədədlərin cəmini yazın.

const num1 = Number(prompt("Birinci ədədi daxil edin"));
const num2 = Number(prompt("İkinci ədədi daxil edin"));
const num3 = Number(prompt("Üçüncü ədədi daxil edin"));
const num4 = Number(prompt("Dördüncü ədədi daxil edin"));

if (num1 == num2 && num1 == num3 && num1 == num4) {
  alert(`Kvadratın sahəsi: ${Math.pow(num1, 2)}`); // kvadratın sahəsi: S= a*a
} else {
  alert(`Ədədlərin cəmi: ${num1 + num2 + num3 + num4}`);
}
