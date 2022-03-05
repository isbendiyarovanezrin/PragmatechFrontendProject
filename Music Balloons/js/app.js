"use strict";

window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

window.addEventListener("click", (e) => {
  const sounds = document.querySelectorAll("audio[data-key]");
  sounds.forEach((sound) => {
    if (
      e.target.getAttribute("data-key") == sound.getAttribute("data-key") ||
      e.target.innerHTML.toLowerCase() == sound.getAttribute("data-key")
    ) {
      sound.currentTime = 0;
      sound.play();
    }
  });
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeStyle));

function removeStyle() {
  this.classList.remove("playing");
}
