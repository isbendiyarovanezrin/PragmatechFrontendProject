let ededler = [1, 3, 5, 6, undefined, null, true, {}, 34, "FrontEndMasters"];

// "ededler" massivi daxilində olan ədədləri ekrana çap elətdirən metod yazın
function numbersOnly(value) {
  if (typeof value === "number") {
    return value;
  }
}
numbers = ededler.filter(numbersOnly);
document.write(`${numbers}<br>`);

// "ededler" massivi daxilində olan stringləri ekrana çap elətdirən metod yazın
function stringOnly(value) {
  if (typeof value === "string") {
    return value;
  }
}
str = ededler.filter(stringOnly);
document.write(`${str}<br>`);

//"ededler" massivi daxilində boolean tipində olanları ekrana çap elətdirən metod yazın
function booleanOnly(value) {
  if (typeof value === "boolean") {
    return value;
  }
}
boolean = ededler.filter(booleanOnly);
document.write(`${boolean}<br>`);

//"ededler" massivi daxilində olan hər şeyin tipini ekrana çap elətdirən metod yazın
for (let i = 0; i < ededler.length; i++) {
  type = typeof ededler[i];
  document.write(`${type} `);
}
document.write(`<br>`);

// "ededler" massivi daxilində olan bütün ədədləri başqa bir massivə taplayıb ekrana çap elətdirən metod yazın
let arr = [];
for (let i = 0; i < ededler.length; i++) {
  if (typeof ededler[i] === "number") {
    arr.push(ededler[i]);
  }
}
document.write(`${arr}<br>`);

// "ededler" massivinin daxilində eyni tipli olan məlumatları ayrı-ayrı massivlər şəklinə gətirən metod yazın
let n = [];
let s = [];
let b = [];
let o = [];
let u = [];
for (let i = 0; i < ededler.length; i++) {
  if (typeof ededler[i] === "number") {
    n.push(ededler[i]);
  } else if (typeof ededler[i] === "string") {
    s.push(ededler[i]);
  } else if (typeof ededler[i] === "boolean") {
    b.push(ededler[i]);
  } else if (typeof ededler[i] === "object") {
    o.push(ededler[i]);
  } else {
    u.push(ededler[i]);
  }
}
console.log(n, s, b, o, u);

// "ededler" massivinin daxilində olan stringdə neçə sait və samit olduğunu tapın
let word = str[0];
const vowel = word.match(/[aıoueəiöü]/gi).length;
const consonant = word.match(/[pkftşsxçhbqvğdjzygclmnr]/gi).length;
document.write(`Vowels: ${vowel}, Consonants: ${consonant}`);
