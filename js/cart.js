import { html } from "../../utils/htmlRaw.js";
import CartItem from "./CartItem.js";
import CartNav from "./CartNav.js";
import CartTotal from "./CartTotal.js";

export default function Cart(ramosInCart) {
  return html`<div class="row w-75 mx-auto mt-5">
    <div id="cart-content" class="col-12 col-md-8">
      <div>${CartNav(ramosInCart)}</div>
      ${ramosInCart && ramosInCart.length > 0
        ? ramosInCart
            .map((ramo) =>
              CartItem(
                ramo.id,
                ramo.description,
                ramo.imagen,
                ramo.precio,
                ramo.cantidad,
                ramo.stock
              )
            )
            .join("")
        : ` <div class="text-center mt-5 fs-5 text-secondary-emphasis">El carrito está vacío:(</div>`}
    </div>
    <div class="col-12 col-md-4">${CartTotal()}</div>
  </div>`;
}
