let btn = document.querySelector("#create");
let _div = document.querySelector("#add");

btn.onclick = () => {
  let div = document.createElement("div");
  div.textContent = "Mən gəldim!";
  div.classList = "box";
  _div.appendChild(div);
};
