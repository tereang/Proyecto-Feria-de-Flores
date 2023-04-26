import card from "./card.js";
import { html } from "../../utils/htmlRaw.js";
import orderList from "../../utils/orderList.js";

export default function RamoGrid(ramoStock) {
  return html`<div class="mx-auto w-75 my-5">
    <div class="d-flex">
      <div class="row">
        ${ramoStock
          .sort(orderList)
          .map((ramo) =>
            card(
              ramo.id,
              ramo.descripcion,
              ramo.precio,
              ramo.imagen,
              ramo.stock
            )
          )
          .join("")}
      </div>
    </div>
  </div>`;
}