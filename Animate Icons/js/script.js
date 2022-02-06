const icon = document.getElementById("icon");

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
