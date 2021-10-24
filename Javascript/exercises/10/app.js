let names = ["Zohrab", "Qurbani", "Iskender", "Nezrin", "Ferid", "Huseyn"];

// daxilinde "o" herfi olan telebelerin adlarini bir arraya yigin
let findLetter = names.filter((name) => name.match(/[o]/gi));
document.write(`${findLetter}<br>`);

// adinin uzunlugu 5-den boyuk olan telebelerin adlarini bir arraya yigin
let lenNames = names.filter((name) => name.length > 5);
document.write(`${lenNames}<br>`);

// telebe adlarinin boyuk herfle yazilmis versiyasinin oldugu array yaradin
let uppercased = names.map((name) => name.toUpperCase());
document.write(uppercased);
