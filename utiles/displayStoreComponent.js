/* ------------FUNCION PARA MOSTRAR/OCULTAR ----------------------------------- */

//Mostrar/ocultar componentes
export default function displayStoreComponent(component) {
    document.getElementById("product-grid").className =
      component === "product-grid" ? "" : "d-none";
    document.getElementById("product-detail").className =
      component === "product-detail" ? "row" : "d-none";
    document.getElementById("cart").className =
      component === "cart" ? "row" : "d-none";
    document.getElementById("checkout").className =
      component === "checkout" ? "row" : "d-none";
  }
  