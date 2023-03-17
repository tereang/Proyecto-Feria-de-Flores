/* ---Imports ---*/

import { Footer, Navbar } from "./components/Layout.js";
import ProductGrid from "./components/ProductGrid.js";
import { products } from "../data/products.js";
import Carrousel from "./components/Carrousel.js";
import ProductDetail from "./components/ProductDetail.js";
import Cart from "./components/Cart.js";
import Checkout from "./components/Checkout.js";
import displayStoreComponent from "../utils/displayStoreComponent.js";
import reduceStock from "../utils/reduceStock.js";
import countProductsInCart from "../utils/countProductsInCart.js";
import CartTotal from "./components/CartTotal.js";
import CartItem from "./components/CartItem.js";

//let productsInCart = [];
let customerPurchaseNumber = 0;
let productsInCart = [];

/* ---Navbar y Footer ---*/
const nav = document.getElementById("nav");
nav.innerHTML = Navbar(productsInCart);
const footer = document.getElementById("footer");
footer.innerHTML = Footer();

const navProductGrid = document.getElementById(`nav-product-grid`);
navProductGrid.addEventListener("click", function () {
  displayStoreComponent("product-grid");
});
function navProductCart(cartProducts, productData) {
  const navProductCartButtom = document.getElementById(`nav-product-cart`);
  navProductCartButtom.addEventListener("click", function () {
    displayStoreComponent("cart");
    renderCart(cartProducts, productData);
  });
}

navProductCart(productsInCart, products);

/* ---Catálogo--- */
function renderGrid(productData) {
  const carrousel = document.getElementById("product-grid");
  carrousel.innerHTML = Carrousel();
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML += ProductGrid(productData);
  productData.forEach((product) => {
    const displayDetailButton = document.getElementById(
      `display-detail-button-${product.id}`
    );
    displayDetailButton.addEventListener("click", function () {
      renderProductDetail(product.id, productData, productsInCart);
    });
  });
}
renderGrid(products);

/* ---Pagina Detalle del producto --- */

function renderProductDetail(id, productData, cartProducts) {
  displayStoreComponent("product-detail");
  const productDetail = document.getElementById("product-detail");
  productDetail.innerHTML = ProductDetail(id, productData);
  const backGridDetailButton = document.getElementById(
    "back-grid-detail-button"
  );
  backGridDetailButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
  });

  const addToCartButton = document.getElementById("add-to-cart-button");

  addToCartButton.addEventListener("click", function () {
    const productDetailQuantity = document.getElementById(
      "quantity-detail-input"
    );

    const cartHasProduct = cartProducts.find((product) => product.id === id);
    if (cartHasProduct) {
      cartHasProduct.quantity =
        parseInt(cartHasProduct.quantity) +
        parseInt(productDetailQuantity.value);
      /*      productData.forEach((product) => {
        if (product.stock > 0 && product.id === id)
          product.stock = product.stock - productDetailQuantity.value;
      }); */
    } else {
      productData.forEach((product) => {
        if (product.id === id) {
          const productPlusQuantity = {
            ...product,
            quantity: productDetailQuantity.value,
          };
          /*         if (product.stock > 0)
            product.stock = product.stock - productDetailQuantity.value; */
          cartProducts.push(productPlusQuantity);
        }
      });
    }
    displayStoreComponent("cart");

    renderCart(cartProducts, productData);
    navProductCart(cartProducts, productData);
    updateCartTotal();
    removeProducts();
    qtyProducts();
  });
}

/* ---Carrito --- */

function renderCart(cartProducts, productData) {
  // console.log(cartProducts.length);

  displayStoreComponent("cart");
  const productCart = document.getElementById("cart");
  productCart.innerHTML = Cart(cartProducts);
  const productsInCartNav = document.getElementById("products-in-cart-nav");
  productsInCartNav.innerText = countProductsInCart(cartProducts);
  const backGridCartButton = document.getElementById("back-grid-cart-button");
  backGridCartButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
    // renderGrid(productData);
  });
  const resetCartButton = document.getElementById("reset-cart-button");
  resetCartButton.addEventListener("click", function () {
    productsInCart = [];
    renderCart(productsInCart);
  });
  const checkoutCartButton = document.getElementById("checkout-cart-button");
  checkoutCartButton.addEventListener("click", function () {
    renderCheckout(cartProducts, productData);
  });
}

/* --- Checkout --- */

function renderCheckout(cartProducts, productData) {
  displayStoreComponent("checkout");
  const checkout = document.getElementById("checkout");
  checkout.innerHTML = Checkout();

  const values = reduceStock(cartProducts, customerPurchaseNumber, productData);

  productsInCart = [];
  navProductCart([], []);

  const backToHomeCheckoutButton = document.getElementById(
    "back-to-home-checkout-button"
  );
  backToHomeCheckoutButton.addEventListener("click", function () {
    displayStoreComponent("product-grid");
    renderGrid(values);
  });
}

// Delete elements from cart
function removeProducts() {
  let removeProductsFromCart =
    document.getElementsByClassName("cart-delete-item");
  for (let i = 0; i < removeProductsFromCart.length; i++) {
    let cartDeleteButton = removeProductsFromCart[i];
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
function qtyProducts() {
  let quantityInputs = document.getElementsByClassName("chanceQty");
  for (let i = 0; i < quantityInputs.length; i++) {
    let qtyInputs = quantityInputs[i];
    qtyInputs.addEventListener("change", qtyChange);
  }

  function qtyChange(event) {
    let quantityChange = event.target;
    if (isNaN(quantityChange.value) || quantityChange.value <= 0) {
      quantityChange.value = 1;
    }
    updateCartTotal();
  }
}

// Checking total purchase
function updateCartTotal() {
  let cartContent = document.getElementById('cart-content');
  let productContent = cartContent.getElementsByClassName('product-content');
  let total = 0;
    for (let i = 0; i < productContent.length; i++) {
      // Defining
      let productsList = productContent[i];
      let productQuantity = productsList.getElementsByClassName('chanceQty')[0];
      let productPrice = productsList.getElementsByClassName('p-price')[0].innerText;
      let price = parseInt(productPrice.replace(/\D/g,''));
      
      // Math
      let quantity = productQuantity.value;
      total = total + (price * quantity);
      
      // HTML print
      document.getElementById('total').innerHTML = `<h3>$${Intl.NumberFormat("es-CL").format(total)}</h3>`;
      document.getElementById('products-in-cart-nav').innerHTML = 
        `<div class="bg-danger rounded-circle h-75 ps-2" style="width:25px" id="products-in-cart-nav">${productContent.length}</div>`;

      productsList.getElementsByClassName('t-price')[0].innerHTML = `<div> ${"$" + Intl.NumberFormat("es-CL").format(price * quantity)} en total.</div>`;
      
      if (productContent.length >= 2) {
        document.getElementsByClassName('cart-products')[0].innerHTML = `<div>Tienes ${productContent.length} productos en tu carro</div>`;
      } else {
        document.getElementsByClassName('cart-products')[0].innerHTML = `<div>Tienes ${productContent.length} producto en tu carro</div>`;
      }
    }
    if (total == 0) {
      document.getElementById('total').innerHTML = `<h3>$${Intl.NumberFormat("es-CL").format(total)}</h3>`;
      document.getElementsByClassName('cart-products')[0].innerHTML = `<div>Tienes ${productContent.length} productos en tu carro</div>`;
      document.getElementById('products-in-cart-nav').innerHTML = 
        `<div class="bg-danger rounded-circle h-75 ps-2" style="width:25px" id="products-in-cart-nav">${productContent.length}</div>`;
    }
}
