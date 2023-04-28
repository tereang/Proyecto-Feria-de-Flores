/* ---Imports ---*/

import { Navbar } from "./components/Layout.js";
import RamoGrid from "./components/RamoGrid.js";
import { ramos } from "../data/ramos.js";
import Galeria from "./components/Galeria.js";
import RamoDetail from "./components/RamoDetail.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import displayStoreComponent from "../utils/displayStoreComponent.js";
import reduceStock from "../utils/reduceStock.js";
import countRamosInCart from "../utils/countRamosInCart.js";
import CartTotal from "./components/CartTotal.js";
import CartItem from "./components/CartItem.js";

//let productsInCart = [];
let customerPurchaseNumber = 0;
let ramosInCart = [];

/* ---Navbar y Footer ---*/
const nav = document.getElementById("nav");
nav.innerHTML = Navbar(ramosInCart);
//const footer = document.getElementById("footer");
//footer.innerHTML = Footer();

const navRamoGrid = document.getElementById(`nav-ramo-grid`);
navRamoGrid.addEventListener("click", function () {
  displayStoreComponent("ramo-grid");
});
function navRamoCart(cartRamos, ramoData) {
  const navRamoCartButtom = document.getElementById(`nav-ramo-cart`);
  navRamoCartButtom.addEventListener("click", function () {
    displayStoreComponent("cart");
    renderCart(cartRamos, ramoData);
  });
}

navRamoCart(ramosInCart, ramos);

/* ---Catálogo--- */
function renderGrid(ramoData) {
  const galeria = document.getElementById("ramo-grid");
  galeria.innerHTML = galeria();
  const ramoGrid = document.getElementById("ramo-grid");
  ramoGrid.innerHTML += RamoGrid(ramoData);
  ramoData.forEach((ramo) => {
    const displayDetailButton = document.getElementById(
      `display-detail-button-${ramo.id}`
    );
    displayDetailButton.addEventListener("click", function () {
      renderRamoDetail(ramo.id, ramoData, ramosInCart);
    });
  });
}
renderGrid(ramos);

/* ---Pagina Detalle del producto --- */

function renderRamoDetail(id, ramoData, cartRamos) {
  displayStoreComponent("ramo-detail");
  const ramoDetail = document.getElementById("ramo-detail");
  ramoDetail.innerHTML = RamoDetail(id, ramoData);
  const backGridDetailButton = document.getElementById(
    "back-grid-detail-button"
  );
  backGridDetailButton.addEventListener("click", function () {
    displayStoreComponent("ramo-grid");
  });

  const addToCartButton = document.getElementById("add-to-cart-button");

  addToCartButton.addEventListener("click", function () {
    const ramoDetailCantidad = document.getElementById(
      "cantidad-detail-input"
    );

    const cartHasRamo = cartRamos.find((ramo) => ramo.id === id);
    if (cartHasRamo) {
      cartHasRamo.cantidad =
        parseInt(cartHasRamo.cantidad) +
        parseInt(ramoDetailCantidad.value);
      /*      productData.forEach((product) => {
        if (product.stock > 0 && product.id === id)
          product.stock = product.stock - productDetailQuantity.value;
      }); */
    } else {
      ramoData.forEach((ramo) => {
        if (ramo.id === id) {
          const ramoPlusCantidad = {
            ...ramo,
            cantidad: ramoDetailCantidad.value,
          };
          /*         if (product.stock > 0)
            product.stock = product.stock - productDetailQuantity.value; */
          cartRamos.push(ramoPlusCantidad);
        }
      });
    }
    displayStoreComponent("cart");

    renderCart(cartRamos, ramoData);
    navRamoCart(cartRamos, ramoData);
    updateCartTotal();
    removeRamos();
    cantidadRamos();
  });
}

/* ---Carrito --- */

function renderCart(cartRamos, ramoData) {
  // console.log(cartProducts.length);

  displayStoreComponent("cart");
  const ramoCart = document.getElementById("cart");
  ramoCart.innerHTML = Cart(cartRamos);
  const ramosInCartNav = document.getElementById("ramos-in-cart-nav");
  ramosInCartNav.innerText = countRamosInCart(cartRamos);
  const backGridCartButton = document.getElementById("back-grid-cart-button");
  backGridCartButton.addEventListener("click", function () {
    displayStoreComponent("ramo-grid");
    // renderGrid(productData);
  });
  const resetCartButton = document.getElementById("reset-cart-button");
  resetCartButton.addEventListener("click", function () {
    ramosInCart = [];
    renderCart(ramosInCart);
  });
  const checkoutCartButton = document.getElementById("checkout-cart-button");
  checkoutCartButton.addEventListener("click", function () {
    renderCheckout(cartRamos, ramoData);
  });
}

/* --- Checkout --- */

function renderCheckout(cartRamos, ramoData) {
  displayStoreComponent("checkout");
  const checkout = document.getElementById("checkout");
  checkout.innerHTML = Checkout();

  const values = reduceStock(cartRamos, customerPurchaseNumber, ramoData);

  ramosInCart = [];
  navRamoCart([], []);

  const backToHomeCheckoutButton = document.getElementById(
    "back-to-home-checkout-button"
  );
  backToHomeCheckoutButton.addEventListener("click", function () {
    displayStoreComponent("ramo-grid");
    renderGrid(values);
  });
}

// Delete elements from cart
function removeRamos() {
  let removeRamosFromCart =
    document.getElementsByClassName("cart-delete-item");
  for (let i = 0; i < removeRamosFromCart.length; i++) {
    let cartDeleteButton = removeRamosFromCart[i];
    cartDeleteButton.addEventListener("click", removeElement);
  }

  function removeElement(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    // let removeItem = buttonClicked.closest("div.d-block").remove();
    updateCartTotal();
  }
}

// Change of products quantity
function cantidadRamos() {
  let cantidadInputs = document.getElementsByClassName("chanceCantidad");
  for (let i = 0; i < cantidadInputs.length; i++) {
    let cantidadInputs = cantidadInputs[i];
    cantidadInputs.addEventListener("change", cantidadChange);
  }

  function cantidadChange(event) {
    let cantidadChange = event.target;
    if (isNaN(cantidadChange.value) || cantidadChange.value <= 0) {
      cantidadChange.value = 1;
    }
    updateCartTotal();
  }
}

// Checking total purchase
function updateCartTotal() {
  let cartContent = document.getElementById('cart-content');
  let ramoContent = cartContent.getElementsByClassName('ramo-content');
  let total = 0;
    for (let i = 0; i < ramoContent.length; i++) {
      // Defining
      let ramosList = ramoContent[i];
      let ramoCantidad = ramosList.getElementsByClassName('chancecantidad')[0];
      let ramoPrecio = ramosList.getElementsByClassName('p-precio')[0].innerText;
      let precio = parseInt(ramoPrecio.replace(/\D/g,''));
      
      // Math
      let cantidad = ramoCantidad.value;
      total = total + (precio * cantidad);
      
      // HTML print
      document.getElementById('total').innerHTML = `<h3>$${Intl.NumberFormat("es-CL").format(total)}</h3>`;
      document.getElementById('ramos-in-cart-nav').innerHTML = 
        `<div class="bg-danger rounded-circle h-75 ps-2" style="width:25px" id="ramos-in-cart-nav">${ramoContent.length}</div>`;

      ramosList.getElementsByClassName('t-precio')[0].innerHTML = `<div> ${"$" + Intl.NumberFormat("es-CL").format(precio * cantidad)} en total.</div>`;
      
      if (ramoContent.length >= 2) {
        document.getElementsByClassName('cart-ramos')[0].innerHTML = `<div>Tienes ${ramoContent.length} ramos en tu carro</div>`;
      } else {
        document.getElementsByClassName('cart-ramos')[0].innerHTML = `<div>Tienes ${ramoContent.length} ramos en tu carro</div>`;
      }
    }
    if (total == 0) {
      document.getElementById('total').innerHTML = `<h3>$${Intl.NumberFormat("es-CL").format(total)}</h3>`;
      document.getElementsByClassName('cart-ramos')[0].innerHTML = `<div>Tienes ${ramoContent.length} ramos en tu carro</div>`;
      document.getElementById('ramos-in-cart-nav').innerHTML = 
        `<div class="bg-danger rounded-circle h-75 ps-2" style="width:25px" id="ramos-in-cart-nav">${ramoContent.length}</div>`;
    }
}
