let names = ["Zohrab", "Qurbani", "Iskender", "Nezrin", "Ferid", "Huseyn"];

// daxilinde "o" herfi olan telebelerin adlarini bir arraya yigin
let newArr = [];
let findLetter = names.filter((name) => name.match(/[o]/gi));
newArr.push(findLetter);
console.log(newArr);

// daxilinde "e" herfi olan telebelerin adlarini bir arraya yigin
let _NewArr = [];
let _findLetter = names.filter((name) => name.match(/[e]/gi));
_NewArr.push(_findLetter);
console.log(_NewArr);

// adinin uzunlugu 5-den boyuk olan telebelerin adlarini bir arraya yigin
let NewArr = [];
let lenNames = names.filter((name) => name.length > 5);
NewArr.push(lenNames);
console.log(NewArr);

// telebe adlarinin boyuk herfle yazilmis versiyasinin oldugu array yaradin
let _newArr = [];
let _uppercase = names.map((name) => name.toUpperCase());
_newArr.push(_uppercase);
console.log(_newArr);
