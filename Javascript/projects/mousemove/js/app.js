"use strict";

let cursor = document.getElementById("cursor");

window.addEventListener("mousemove", changeCursor);

function changeCursor(e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}
