let arr = ["Aysel", "Guler", "Samir", "Kamil", "Ayla", "Ali", "Mehemmed"];

// Massivdəki sözlərin hər birinin hərf sayını ekrana çap edin
for (let i = 0; i < arr.length; i++) {
  word = arr[i];
  document.write(`${word.length}<br>`);
}

//Massiv daxilindəki sözlərdə olan "e" hərflərini "ə" ilə əvəz edin
for (let i = 0; i < arr.length; i++) {
  word = arr[i];
  arr[i] = word.replaceAll(/e/gi, "ə");
}
document.write(`${arr}<br>`);

//Massiv daxilindəki sözlərdə olan "a" hərflərini "o" ilə əvəz edin
for (let i = 0; i < arr.length; i++) {
  word = arr[i];
  arr[i] = word.replaceAll(/a/gi, "o");
}
document.write(`${arr}<br>`);

// Massivdəki sondan 3 sözü ekrana yazdırın
lastWord = arr.slice(-3);
document.write(`${lastWord}<br>`);

// Massivdə başdan birinci sözü ekrana yazdırın
firstWord = arr.slice(0)[0];
document.write(`${firstWord}<br>`);

// Massivdə başdan ikinci sözü ekrana yazdırın
secondWord = arr.slice(1)[0];
document.write(`${secondWord}<br>`);

// Massivdəki ilk iki sözdən başqa qalan bütün sözləri ekrana yazdırın
_words = arr.splice(2);
document.write(_words);
