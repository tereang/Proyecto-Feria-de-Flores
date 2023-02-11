import { html } from "../../utils/htmlRaw.js";
import { menus } from "../../data/menu.js";

function menu(label, link) {
  return html`<li class="nav-item">
    <a class="nav-link" id="nav-${link}" href="#" style="color:#fff">
      ${label}
    </a>
  </li>`;
}

export function Navbar() {
  return html` 
  <div class="container-fluid" style="background-color: #3f51b5; color:#fff">
    <nav
      class="navbar navbar-expand-lg navbar-light px-2"
      style="background-color: #3f51b5; color:#fff"
    >
      <a class="navbar-brand" href="#" style="color:#fff"> Festina </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
         ${menus.map((item) => menu(item.label, item.link)).join("")}
         <div class="bg-danger rounded-circle h-75 ps-2" style="width:25px" id="products-in-cart-nav"></div>
        </ul>
      </div>
    </nav>
  </div>
  </div>`;
}

export function Footer() {
  return html`<!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="container-fluid mt-5" style="background-color: #3f51b5">
      <!-- Footer -->
      <footer class="text-center text-white" style="background-color: #3f51b5">
        <!-- Grid container -->
        <div class="container">
          <!-- Section: Links -->
          <section class="mt-5">
            <!-- Grid row-->
            <div class="row text-center d-flex justify-content-center pt-5">
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white text-decoration-none">Relojes</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white text-decoration-none">Ofertas</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white text-decoration-none">Compra Segura</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white text-decoration-none">Garantía</a>
                </h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a href="#!" class="text-white text-decoration-none">Ayuda</a>
                </h6>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row-->
          </section>
          <!-- Section: Links -->

          <hr class="my-5" />

          <!-- Section: Text -->
          <section class="mb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                <em>Los relojes Festina son la mezcla perfecta de elegancia y funcionalidad.
                Festina ofrece diseños distinguidos e innovación tecnológica constante. 
                Las nuevas tecnologías aplicadas tanto a diseños clásicos como de tendencia han convertido Festina en una marca de relojes líderes en el mundo.<em>
                </p>
              </div>
            </div>
          </section>
          <!-- Section: Text -->

          <!-- Section: Social -->
          <section class="text-center mb-5">
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </section>
          <!-- Section: Social -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
  
        <div
          class="text-center py-3 fst-normal d-flex justify-content-center"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2023 Copyright
          <div class="text-white fst-normal" 
            >: Festina M.R</div
          >
        </div>
    
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>
    <!-- End of .container -->`;
}
