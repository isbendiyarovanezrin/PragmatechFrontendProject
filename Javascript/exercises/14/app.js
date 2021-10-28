let btn = document.querySelector("#create");
let addDiv = document.querySelector("#add");

btn.onclick = () => {
  let div = document.createElement("div");
  div.textContent = "Mən yeni doğuldum!";
  div.classList = "box";
  addDiv.appendChild(div);
};
