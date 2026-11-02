const products = {
  "pumpkin-dangles": { name: "Pumpkin Dangles", price: 8 },
  "pumpkin-studs": { name: "Pumpkin Studs", price: 6 },
  "acorn-studs": { name: "Acorn Studs", price: 6 },
};

const savedCart = localStorage.getItem("sweetPeachCart");

const cart = savedCart ? JSON.parse(savedCart) : [];

const quantities = {};

cart.forEach(function (productId) {
  quantities[productId] = (quantities[productId] || 0) + 1;
});

const cartItemsElement = document.querySelector("#cart-items");

if (cart.length === 0) {
  cartItemsElement.textContent = "Your cart is empty.";
}

let subtotal = 0;

Object.keys(quantities).forEach(function (productId) {
  const product = products[productId];
  const quantity = quantities[productId];
  const lineTotal = product.price * quantity;
  subtotal += lineTotal;
  const itemElement = document.createElement("p");

  itemElement.classList.add("cart-item");

  itemElement.textContent = `${product.name} (Qty: ${quantity}): $${lineTotal.toFixed(2)}`;

  cartItemsElement.appendChild(itemElement);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove one";

  removeButton.addEventListener("click", function () {
    const itemIndex = cart.indexOf(productId);
    cart.splice(itemIndex, 1);
    localStorage.setItem("sweetPeachCart", JSON.stringify(cart));
    window.location.reload();
  });

  itemElement.appendChild(removeButton);
});

const subtotalElement = document.createElement("p");
subtotalElement.classList.add("cart-subtotal");
subtotalElement.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
cartItemsElement.appendChild(subtotalElement);
