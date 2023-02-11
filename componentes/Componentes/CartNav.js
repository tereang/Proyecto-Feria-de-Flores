import countProductsInCart from "../../utils/countProductsInCart.js";
import { html } from "../../utils/htmlRaw.js";

export default function CartNav(productsInToCard) {
  return html`<div
    class="d-flex flex-wrap justify-content-between align-items-center border-bottom pb-3"
  >
    <div class="py-1">
      <a
        class="btn btn-outline-accent btn-sm"
        href="#"
        id="back-grid-cart-button"
        ><i class="ci-arrow-left me-1 ms-n1"></i>Seguir comprando</a
      >
    </div>
    <div class="cart-products d-none d-sm-block py-1 fs-sm">
      Tienes ${countProductsInCart(productsInToCard)}
      ${countProductsInCart(productsInToCard) > 1 ? "productos" : "producto"} en
      tu carro
    </div>
    <div class="py-1">
      <a class="btn btn-outline-danger btn-sm" href="#" id="reset-cart-button"
        ><i class="ci-close fs-xs me-1 ms-n1"></i>Limpiar carro</a
      >
    </div>
  </div>`;
}