import { html } from "../../utils/htmlRaw.js";
import CartItem from "./CartItem.js";
import CartNav from "./CartNav.js";
import CartTotal from "./CartTotal.js";

export default function Cart(productsInCart) {
  return html`<div class="row w-75 mx-auto mt-5">
    <div id="cart-content" class="col-12 col-md-8">
      <div>${CartNav(productsInCart)}</div>
      ${productsInCart && productsInCart.length > 0
        ? productsInCart
            .map((product) =>
              CartItem(
                product.id,
                product.brand,
                product.description,
                product.imageUrl,
                product.price,
                product.quantity,
                product.stock
              )
            )
            .join("")
        : ` <div class="text-center mt-5 fs-5 text-secondary-emphasis">El carrito está vacío:(</div>`}
    </div>
    <div class="col-12 col-md-4">${CartTotal()}</div>
  </div>`;
}
