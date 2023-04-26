import countRamosInCart from "../../utils/countRamosInCart.js";
import { html } from "../../utils/htmlRaw.js";

export default function CartNav(ramosInToCard) {
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
    <div class="cart-ramos d-none d-sm-block py-1 fs-sm">
      Tienes ${countRamosInCart(ramosInToCard)}
      ${countRamosInCart(ramosInToCard) > 1 ? "ramos" : "ramo"} en
      tu carro
    </div>
    <div class="py-1">
      <a class="btn btn-outline-danger btn-sm" href="#" id="reset-cart-button"
        ><i class="ci-close fs-xs me-1 ms-n1"></i>Limpiar carro</a
      >
    </div>
  </div>`;
}
