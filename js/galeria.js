import { html } from "../../utils/htmlRaw.js";

export default function Carrousel() {
  return html`
   <div>
     <section id=galeria class="container-fluid">
       <div class="text-center pt-5">
          <h2 class="bg-#f9d5f2;">GALERIA<small></small></h2>
          <h3 class="bg-#f9d5f2;"> HERMOSOS ARREGLOS FLORALES PARA REGALAR<samall></samall></h3>
       </div>
   <div class="row">

                        {{#each ramo}}

      <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="col d-flex justify-content-center mb-4">
              <div class="card shadow mb-1 bg-secondary rounded" style="width: 20 rem;border-radius :10px ;">
                       <h5 class="card-title pt-2 text-center text-primary">{{this.nombre}}
                       </h5>
                       <img src="{{this.imagen}}" class="card-img-top" alt="Galeria Imágen">
                <div class="card-body">
                       <p class="card text text-dark-50 description">{{this.descripcion}}
                       <h5 class="text-black">Precio: <span class="precio">{{this.precio}}
                       </span></h5>
                    <div class="d-grid gap-2">
                          <button class="btn btn-primary button">Agregar Carrito</button>
                    </div>
              </div>
          </div>
      </div>
  </div>

                        {{/each}}



    </section>

   </div>`;
}