const productList = document.querySelector(".product-list");

function loadJson() {
  fetch("data/products.json")
    .then((responce) => responce.json())
    .then((data) => {
      let item = "";
      data.forEach((product) => {
        item += `
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
           </div>
           <hr />
           <div class="product-content">
             <p class="product-price">${product.price}</p>
             <button type="button" class="btn-add-cart">+ Cart</button>
           </div>
       </div>
        `;
      });
      productList.innerHTML = item;
    })
    .catch((error) => {
      alert(error);
    });
}
loadJson();

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
