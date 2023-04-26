import { html } from "../../utils/htmlRaw.js";

export default function Checkout() {
  return html` <div class="w-75 mx-auto my-5">
    <div class="card text-center">
      <div class="card-header">Compra finalizada</div>
      <div class="card-body" style="height:250px">
        <div class="mt-5">
          <h5 class="card-title">Gracias por tu compra</h5>
          <p class="card-text">Pronto recibirás tu Festina! .</p>
          <a href="#" class="btn btn-primary" id="back-to-home-checkout-button"
            >Volver al inicio</a
          >
        </div>
      </div>
       <!--Comment Agregar o eliminar a Hecho con-->
      <div class="card-footer text-muted">Hecho con</div>
    </div>
  </div>`;
}
