"use strict";

let i = 0;
let text = "Mən əla yazılıram!";

function typingEffect() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 60);
  }
}
