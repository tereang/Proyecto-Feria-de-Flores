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

     <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">Florería <img src="imagenes/logo mod p.PNG" alt="Galeria Imágen" width="150" height="120"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        <a class="nav-link" href="#"><MARQUEE onmouseover=this.stop() onmouseout=this.start() scrollAmount=2 scrollDelay=5 direction=up height=350 width=200>
      <div class="row row-cols-12">
        <div class="col">
          <div class="card">
            <img src="imagenes/mujer-flores.jpg" class="card-img-top"
              alt="Galeria Imágen"width="200" height="100" >
            <div class="card-body" style="background-color: rgb(243, 190,
                218);border-radius :10px ">
              <h5 class="card-title" >¿Qué producen las flores en las personas?</h5>
              <p class="card-text" >Ellas tienen un impacto inmediato en la felicidad. Todas las personas presentan “verdaderas” sonrisas al recibir flores,demostrando placer y gratitud extraordinarios. 
                Esta reacción es universal y se presenta en todos los grupos de edad. A largo plazo, las flores tienen un efecto positivo en el humor.</p>
            </div>
          </div>
        </div><div class="col">
          <div class="card">
            <img src="imagenes/cerezo-blanco.jpeg" class="card-img-top"
              alt="Galería Imágen" width="220" height="130">
            <div class="card-body" style="background-color: rgb(243, 190,
                218);border-radius :10px ">
              <h5 class="card-title" >¿Qué significa una flor en lo espiritual?</h5>
              <p class="card-text" >La conexión con las flores es una manera de restablecer el contacto con la naturaleza. Dejándonos impresionar por su belleza nos sentimos parte de un mundo maravilloso. 
                Así,el impacto de las flores tiene que ver con su belleza. Pero lo bello, es porque nos transmite algún mensaje.</p>
            </div>
          </div>
        </div>
        </div>
        </marquee> </a>
        <a class="nav-link" href="#">Historias</a>
        <a class="navbar-brand" href="#">Quiénes Somos</a>
        <section id="product-grid"></section>
        <section id="product-detail"></section>
        <section id="cart"></section>
        <section id="checkout"></section>
        <script src="js/app.js" type="module"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <script
         type="text/javascript"
         src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js"
         ></script>
       <!-- </div>
       <iframe name="imagenes" WIDTH="135" HEIGHT="200" marginwidth="0" marginheight="0" frameBorder=0 noResize align="top" src="historias.html"></iframe>  
       </div>-->
       <!--carrito imagen-->
            <div class="carrito">
              <button id="cart-button" class="button">
                <img src="https:cdn-icons-png.flaticon.com/512/107/107831.png" width="20" /> Carro
              </button>
              <!--<div id="cart-qty">
                                10 
                            </div>-->
              <!--CONTADOR DEL CARRO-->
              <div class="texto">
                <label id="cart-qty">0</label>
              </div>
              <div class="group-buttons">
                <a class="button-link" id="incrementa" href="#"></a>

              </div>
            </div>
    
 
     <!-- <div class="container-fluid" style="background-color: #3f51b5; color:#fff">
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
      </button>-->
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

