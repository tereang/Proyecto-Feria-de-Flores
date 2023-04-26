/* ------------FUNCION PARA MOSTRAR/OCULTAR ----------------------------------- */

//Mostrar/ocultar componentes
export default function displayStoreComponent(component) {
  document.getElementById("ramo-grid").className =
    component === "ramo-grid" ? "" : "d-none";
  document.getElementById("ramo-detail").className =
    component === "ramo-detail" ? "row" : "d-none";
  document.getElementById("cart").className =
    component === "cart" ? "row" : "d-none";
  document.getElementById("checkout").className =
    component === "checkout" ? "row" : "d-none";
}
