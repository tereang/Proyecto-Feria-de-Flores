import { html } from "../../utils/htmlRaw.js";

export default function CartItem(
  id,
  brand,
  description,
  imageUrl,
  price,
  quantity,
  stock
) {
  return html`<div
    class="product-content d-block d-sm-flex align-items-center py-4 border-bottom"
  >
    <div
      class="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
      style="width: 12.5rem;"
    >
      <img class="rounded-3 w-100" src=${imageUrl} alt="Product" /><span
        class="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
        data-bs-toggle="tooltip"
        aria-label="Remove from Favorites"
        data-bs-original-title="Remove from Favorites"
        ><i class="ci-trash"></i
      ></span>
    </div>
    <div class="text-center text-sm-start">
      <h3 class="h6 product-title mb-2">
        <div>${brand}-${description}</div>
      </h3>
      <div class="form-inline pt-2">
        <input
          type="number"
          class="w-25 rounded-1 border border-secondary chanceQty"
          min="1"
          max=${stock}
          value=${quantity > stock ? stock : quantity}
        />
      </div>

      ${quantity > stock
        ? html`<div class="mt-2 text-danger-emphasis">
            Sólo hay ${stock} productos disponibles
          </div>`
        : ""}

      <div class="p-price d-inline-block text-accent mt-3">
        ${"$" + Intl.NumberFormat("es-CL").format(price)} c/u
      </div>

      <div class="t-price text-accent">
        ${"$" + Intl.NumberFormat("es-CL").format(price * quantity)} en total.
      </div>
      <div class="mt-3">
        <a
          href="#"
          style="font-size:14px"
          class="text-danger text-decoration-underline cart-delete-item"
        >
          Eliminar
        </a>
      </div>
    </div>
  </div>`;
}
