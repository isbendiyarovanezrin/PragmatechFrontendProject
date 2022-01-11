"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const coords = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function getPosition(e) {
  coords.x = e.clientX - canvas.offsetLeft;
  coords.y = e.clientY - canvas.offsetTop;
}

function start(e) {
  getPosition(e);
  document.addEventListener("mousemove", draw);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

let hue = 0;
let lineWidth = 50;
let direction = true;

function draw(e) {
  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.lineWidth = `${lineWidth}`;
  ctx.strokeStyle = `hsl(${hue}, 30%, 50%)`;
  ctx.globalCompositeOperation = "difference";
  ctx.moveTo(coords.x, coords.y);
  getPosition(e);
  ctx.lineTo(coords.x, coords.y);
  ctx.stroke();

  hue++;
  if (360 <= hue) {
    hue = 0;
  }

  if (ctx.lineWidth == 50 || ctx.lineWidth == 3) {
    direction = !direction;
  }

  if (direction) {
    lineWidth++;
  } else {
    lineWidth--;
  }

  ctx.closePath();
}
