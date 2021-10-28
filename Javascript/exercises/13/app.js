// random rəqəm yaratmaq
let tag = document.getElementById("tag");

tag.innerHTML = randomNumber(200);

function randomNumber(n) {
  let _random = Math.floor(Math.random() * n);
  return _random;
}
