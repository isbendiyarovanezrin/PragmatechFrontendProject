"use strict";

let productList = document.querySelector(".product-list");

function loadJson() {
  fetch("data/products.json")
    .then((responce) => responce.json())
    .then((data) => {
      let categories = document.querySelector(".filters");
      let item = "";
      data.forEach((element) => {
        if (element.filter_name == "All categories") {
          element.products.forEach((element) => {
            item += productView(element);
          });
        }
        categories.innerHTML += categoryView(element);
      });
      productList.innerHTML = item;
    })
    .catch((error) => {
      alert(error);
    });
}
loadJson();

function categoryView(category) {
  return `
  <button class="filter-option" onclick="categoryFilter(${category.filter_id})">${category.filter_name}</button>
  `;
}

function productView(product) {
  return `
  <div class="col-3 product-item" data="${product.id}">
     <div class="product-img-box">
       <img src="${product.imgSrc}" alt="product image" class="product-img" />
       <div class="overlay">
         <a class="overlay-link" href="product.html?id=${product.id}">
           <img src="images/arrow.png" alt="arrow" class="arrow" />
         </a>
         <div class="overlay-info">
           <p class="overlay-content-p">Design | Branding</p>
           <h2 class="text-center">Creative Web Design</h2>
         </div>
       </div>
       <p class="num-box"></p>
     </div>
     <hr />
     <div class="product-content">
       <p class="product-price">${product.price}</p>
       <button type="button" class="btn btn-add-cart"><span class="add-btn">+</span>&nbsp;Cart</button>
     </div>
 </div>
  `;
}

function categoryFilter(id) {
  fetch("data/products.json")
    .then((responce) => responce.json())
    .then((data) => {
      let products = document.querySelector(".products");
      products.innerHTML = "";
      for (let category of data) {
        if (category.filter_id == id) {
          category.products.forEach((element) => {
            products.innerHTML += productView(element);
          });
        }
      }
    })
    .catch((error) => {
      alert(error);
    });
}

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
