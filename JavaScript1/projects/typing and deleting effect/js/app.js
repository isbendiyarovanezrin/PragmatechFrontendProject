"use strict";

const word = ["Nəzrin"];
let i = 0,
  timer;

function typingEffect() {
  let letter = word[i].split("");
  function loopTyping() {
    if (letter.length > 0) {
      document.getElementById("word").innerHTML += letter.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 260);
  }
  loopTyping();
}
typingEffect();

function deletingEffect() {
  let letter = word[i].split("");
  function loopDeleting() {
    if (letter.length > 0) {
      letter.pop();
      document.getElementById("word").innerHTML = letter.join("");
    } else {
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 155);
  }
  loopDeleting();
}
