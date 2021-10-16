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
