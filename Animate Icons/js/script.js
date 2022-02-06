// icon 1
const icon = document.getElementById("icon-1");

function changeIcon() {
  icon.innerHTML = "&#xf118;";

  setTimeout(() => {
    icon.innerHTML = "&#xf11a;";
  }, 1000);

  setTimeout(() => {
    icon.innerHTML = "&#xf119;";
  }, 2000);
}

changeIcon();

setInterval(changeIcon, 3000);

// icon 2
const icon2 = document.getElementById("icon-2");

function changeIcon2() {
  icon2.innerHTML = "&#xf244;";

  setTimeout(() => {
    icon2.innerHTML = "&#xf243;";
  }, 1000);

  setTimeout(() => {
    icon2.innerHTML = "&#xf242;";
  }, 2000);

  setTimeout(() => {
    icon2.innerHTML = "&#xf241;";
  }, 3000);

  setTimeout(() => {
    icon2.innerHTML = "&#xf240;";
  }, 4000);
}

changeIcon2();

setInterval(changeIcon2, 5000);

// icon 3
const icon3 = document.getElementById("icon-3");

function changeIcon3() {
  icon3.innerHTML = "&#xf251;";

  setTimeout(() => {
    icon3.innerHTML = "&#xf252;";
  }, 1000);

  setTimeout(() => {
    icon3.innerHTML = "&#xf253;";
  }, 2000);
}

changeIcon3();

setInterval(changeIcon3, 3000);

// icon 4
const icon4 = document.getElementById("icon-4");

function changeIcon4() {
  icon4.innerHTML = "&#xf25a;";

  setTimeout(() => {
    icon4.innerHTML = "&#xf256;";
  }, 600);

  setTimeout(() => {
    icon4.innerHTML = "&#xf259;";
  }, 1200);

  setTimeout(() => {
    icon4.innerHTML = "&#xf256;";
  }, 1800);
}

changeIcon4();

setInterval(changeIcon4, 2400);

// icon 5
const icon5 = document.getElementById("icon-5");

function changeIcon5() {
  icon5.innerHTML = "&#9733;";

  setTimeout(() => {
    icon5.innerHTML = "&#9734;";
  }, 500);
}

changeIcon5();

setInterval(changeIcon5, 1000);
