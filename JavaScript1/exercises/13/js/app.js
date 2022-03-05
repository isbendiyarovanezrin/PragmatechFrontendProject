// random rəqəm yaratmaq
const tag = document.getElementById("tag");

tag.innerHTML = randomNumber(200);

function randomNumber(n) {
  const _random = Math.floor(Math.random() * n);
  return _random;
}

const message = document.getElementById("message");

message.innerHTML = RandomNumber(300);

function RandomNumber(num) {
  const Random = Math.round(Math.random() * num);
  return Random;
}
