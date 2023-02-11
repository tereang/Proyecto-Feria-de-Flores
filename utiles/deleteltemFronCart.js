export default function deleteItemFromCart(productsInToCard) {
    const cartDeleteItem = document.getElementById("cart-delete-item");
    productsInToCard.filter((product) => product.id !== cartDeleteItem);
  }
  