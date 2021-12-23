// const productList = document.querySelector(".product-list");

// function loadJson() {
//   fetch("data/products.json")
//     .then((responce) => responce.json())
//     .then((data) => {
//       let item = "";
//       data.forEach((product) => {
//         item += `
//         `;
//       });
//       productList.innerHTML = item;
//     })
//     .catch((error) => {
//       alert(error);
//     });
// }
// loadJson();

// loader
function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}

$(window).on("load", () => {
  setTimeout(removeLoader, 2000);

  $("body").css(
    "overflow-y",
    "hidden",
    setTimeout(() => {
      $("body").css("overflow-y", "visible");
    }, 2000)
  );
});
