const xmlRequest = new XMLHttpRequest();
xmlRequest.onload = function () {
  const obj = JSON.parse(this.responseText);
  document.getElementById(
    "demo"
  ).innerHTML = `<span>Name:</span> ${obj.name}<br><span>Age:</span> ${obj.age}`;
};
xmlRequest.open("GET", "server.json");
xmlRequest.send();
