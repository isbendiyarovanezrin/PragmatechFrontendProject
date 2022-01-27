"use strict";

const myVideo = document.getElementById("video");

function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function makeBig() {
  myVideo.width = 700;
  myVideo.height = 500;
}

function makeNormal() {
  myVideo.width = 550;
  myVideo.height = 400;
}

function makeSmall() {
  myVideo.width = 400;
  myVideo.height = 300;
}

// Change background color
function turnOn() {
  document.body.style.backgroundColor = "#000000ad";
}

function turnOff() {
  document.body.style.backgroundColor = "#ffc10766";
}
