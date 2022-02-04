const menu = document.querySelector(".filter-menu").children;
const item = document.querySelector(".filter-item").children;

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", () => {
    for (let j = 0; j < menu.length; j++) {
      menu[j].classList.remove("active");
    }

    menu[i].classList.add("active");

    const menuData = menu[i].getAttribute("data-menu");

    for (let k = 0; k < item.length; k++) {
      item[k].classList.add("delete");

      if (item[k].getAttribute("data-item") == menuData || "all" == menuData) {
        item[k].classList.remove("delete");
      }
    }
  });
}
