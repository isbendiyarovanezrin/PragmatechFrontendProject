const arr = [1, 23, 33, 55, 67, 276, 5, 9, 58, 46];

// massivdəki tək ədəd sayını tapın
const oddNum = arr.filter((n) => n % 2 !== 0);
const oddLength = oddNum.length;
document.write(oddLength + "<br />");

// massivdəki cüt ədəd sayını tapın
const evenNum = arr.filter((n) => n % 2 === 0);
const evenLength = evenNum.length;
document.write(evenLength);
