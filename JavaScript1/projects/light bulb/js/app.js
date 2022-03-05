const img = document.getElementById("img");

img.addEventListener("click", changeImage);

let count = 0;
function changeImage() {
  count += 1;

  if (count % 2 != 0) {
    img.src = "img/bulb-on.gif";
  } else {
    img.src = "img/bulb-off.gif";
  }
}
