let arr = [1, 23, 33, 55, 67, 276, 5, 9, 58, 46];

// massivdəki tək ədəd sayını tapın
let oddNum = arr.filter((n) => n % 2 !== 0);
let oddLength = oddNum.length;
document.write(oddLength + "<br>");

// massivdəki cüt ədəd sayını tapın
let evenNum = arr.filter((n) => n % 2 == 0);
let evenLength = evenNum.length;
document.write(evenLength);
