import { html } from "../../utils/htmlRaw.js";

export default function CartItem(
  id,
  description,
  imagen,
  precio,
  cantidad,
  stock
) {
  return html`<div
    class="ramo-content d-block d-sm-flex align-items-center py-4 border-bottom"
  >
    <div
      class="d-block position-relative mb-3 mb-sm-0 me-sm-4 ms-sm-0 mx-auto"
      style="width: 12.5rem;"
    >
      <img class="rounded-3 w-100" src=${imagen} alt="Ramo" /><span
        class="btn btn-icon btn-danger position-absolute top-0 end-0 py-0 px-1 m-2"
        data-bs-toggle="tooltip"
        aria-label="Remove from Favorites"
        data-bs-original-title="Remove from Favorites"
        ><i class="ci-trash"></i
      ></span>
    </div>
    <div class="text-center text-sm-start">
      <h3 class="h6 ramo-title mb-2">
        <div>${description}</div>
      </h3>
      <div class="form-inline pt-2">
        <input
          type="number"
          class="w-25 rounded-1 border border-secondary chanceQty"
          min="1"
          max=${stock}
          value=${cantidad > stock ? stock : cantidad}
        />
      </div>

      ${cantidad > stock
        ? html`<div class="mt-2 text-danger-emphasis">
            Sólo hay ${stock} productos disponibles
          </div>`
        : ""}

      <div class="p-precio d-inline-block text-accent mt-3">
        ${"$" + Intl.NumberFormat("es-CL").format(precio)} c/u
      </div>

      <div class="t-price text-accent">
        ${"$" + Intl.NumberFormat("es-CL").format(precio * cantidad)} en total.
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
