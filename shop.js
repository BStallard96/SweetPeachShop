const savedCart = localStorage.getItem("sweetPeachCart");
const cart = savedCart ? JSON.parse(savedCart) : [];

const cartCountElement = document.querySelector("#cart-count");

cartCountElement.textContent = cart.length;

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productId = button.dataset.productId;
    console.log("Selected product:", productId);

    cart.push(productId);
    localStorage.setItem("sweetPeachCart", JSON.stringify(cart));

    console.log("Cart:", JSON.stringify(cart));
    cartCountElement.textContent = cart.length;
  });
});
