// random rəqəm yaratmaq
let tag = document.getElementById("tag");

tag.innerHTML = randomNumber(200);

function randomNumber(n) {
  let _random = Math.floor(Math.random() * n);
  return _random;
}

let message = document.getElementById("message");

message.innerHTML = RandomNumber(300);

function RandomNumber(num) {
  let Random = Math.round(Math.random() * num);
  return Random;
}
