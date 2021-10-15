// Massivdəki sözlərin hər birinin hərf sayını ekrana çap edin
let arr = ["Aysel", "Guler", "Samir", "Kamil", "Ayla", "Ali", "Mehemmed"];

for (let i = 0; i < arr.length; i++) {
  word = arr[i];
  document.write(word.length + "<br>");
}

//Massiv daxilindəki sözlərdə olan "e" hərflərini "ə" ilə əvəz edin
for (let i = 0; i < arr.length; i++) {
  word = arr[i];
  arr[i] = word.replaceAll(/e/gi, "ə");
}
document.write(arr + "<br>");

//Massiv daxilindəki sözlərdə olan "a" hərflərini "o" ilə əvəz edin
for (let i = 0; i < arr.length; i++) {
  word = arr[i];
  arr[i] = word.replaceAll(/a/gi, "o");
}
document.write(arr + "<br>");

// Massivdəki sondan 3 sözü ekrana yazdırın
lastWord = arr.slice(-3);
document.write(lastWord + "<br>");
