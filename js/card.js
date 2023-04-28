import { html } from "../../utils/htmlRaw.js";
import { inventory } from "../../utils/createInventory.js";

export default function card(id, descripcion, precio, imagen, stock) {
  const htmlId = `display-detail-button-${id}`;
  return html`
    <!-- Image on top -->
    <!--<div class="col-6 col-md-4 col-lg-3 mb-4">
      <div class="card">
        <img src="${imagen}" class="card-img-top" alt="Card image" />
        <div class="card-body">
          <p class="card-text fs-sm text-secondary">${description}</p>
          <p class="card-text fs-5 mb-1">-->
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="col d-flex justify-content-center mb-4">
        <div class="card shadow mb-1 bg-secondary rounded"
             style="width: 20 rem;border-radius :10px ;">
             <h5 class="card-title pt-2 text-center text-primary">${nombre}</h5>
             <img src="${imagen}"class="card-img-top" alt="Galeria Imágen">
               <div class="card-body">
                  <p class="card text text-dark-50 description">${descripcion}
                  <h5 class="text-black">Precio: <span class="precio">${precio}</span></h5>
                    <div class="d-grid gap-2">
                      <button class="btn btn-primary button">Agregar Carrito</button>

                          <p
                          ${"$" + Intl.NumberFormat("es-CL").format(precio)}
                          >
                          <p
                          class="card-text text-danger-emphasis my-2"
                          ${stock > 3 && "style='height:24px'"}
                          >
                          <p
                          ${stock < 4 && stock >= 2 ? "Sólo " + stock + " en existencia" : ""}
                          ${stock === 1 ? "Único en existencia!" : ""}
                          ${stock < 1 ? "Agotado" : ""}
                          >
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
         </div>
       </div>
    </div>
  `;
}
