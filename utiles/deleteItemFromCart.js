export default function deleteItemFromCart(ramosInToCard) {
  const cartDeleteItem = document.getElementById("cart-delete-item");
  ramosInToCard.filter((ramo) => ramo.id !== cartDeleteItem);
}
