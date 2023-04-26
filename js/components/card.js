import { html } from "../../utils/htmlRaw.js";
import { inventory } from "../../utils/createInventory.js";

export default function card(id, description, precio, imagen, stock) {
  const htmlId = `display-detail-button-${id}`;
  return html`
    <!-- Image on top -->
    <div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img src="${imagen}" class="card-img-top" alt="Card image" />
        <div class="card-body">
          <p class="card-text fs-sm text-secondary">${description}</p>
          <p class="card-text fs-5 mb-1">
            ${"$" + Intl.NumberFormat("es-CL").format(precio)}
          </p>
          <p
            class="card-text text-danger-emphasis my-2"
            ${stock > 3 && "style='height:24px'"}
          >
            ${stock < 4 && stock >= 2 ? "Sólo " + stock + " en existencia" : ""}
            ${stock === 1 ? "Único en existencia!" : ""}
            ${stock < 1 ? "Agotado" : ""}
          </p>
          <button
            type="button"
            class="btn btn-sm btn-warning"
            id=${htmlId}
            ${stock < 1 &&
            "style='pointer-events:none; cursor: not-allowed;   background-color: rgb(229, 229, 229) !important; border:none'"}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  `;
}
