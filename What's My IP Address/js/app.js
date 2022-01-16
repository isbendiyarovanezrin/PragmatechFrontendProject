const p = document.getElementById("text");
const title = document.getElementById("title");

window.addEventListener("load", getIP);

function getIP() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      title.textContent = "Your IP Address is:";
      p.textContent = data.ip;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
