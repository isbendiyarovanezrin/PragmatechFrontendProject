"use strict";

const cursor = document.getElementById("cursor");

window.addEventListener("mousemove", changeCursor);

function changeCursor(e) {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}
