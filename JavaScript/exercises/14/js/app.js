const btn = document.querySelector("#create-btn");
const addBox = document.querySelector("#boxes");

btn.onclick = () => {
  const div = document.createElement("div");
  div.textContent = "Mən yeni doğuldum!";
  div.classList = "box";
  addBox.appendChild(div);
};
