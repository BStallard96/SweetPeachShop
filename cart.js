const products = {
  "pumpkin-dangles": { name: "Pumpkin Dangles", price: 8 },
  "pumpkin-studs": { name: "Pumpkin Studs", price: 6 },
  "acorn-studs": { name: "Acorn Studs", price: 6 },
};

const savedCart = localStorage.getItem("sweetPeachCart");
const cart = savedCart ? JSON.parse(savedCart) : [];

const cartItemsElement = document.querySelector("#cart-items");

if (cart.length === 0) {
  cartItemsElement.textContent = "Your cart is empty.";
}

let subtotal = 0;

cart.forEach(function (productId, index) {
  const product = products[productId];
  subtotal += product.price;
  const itemElement = document.createElement("p");

  itemElement.textContent = `${product.name}: $${product.price.toFixed(2)}`;

  cartItemsElement.appendChild(itemElement);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", function () {
    cart.splice(index, 1);
    localStorage.setItem("sweetPeachCart", JSON.stringify(cart));
    window.location.reload();
  });

  itemElement.appendChild(removeButton);
});

const subtotalElement = document.createElement("p");
subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
cartItemsElement.appendChild(subtotalElement);
