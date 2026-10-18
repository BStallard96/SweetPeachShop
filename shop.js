let cartCount = 0;

const cartCountElement = document.querySelector("#cart-count");

const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log(addToCartButtons.length);

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount = cartCount + 1;
    cartCountElement.textContent = cartCount;
  });
});
