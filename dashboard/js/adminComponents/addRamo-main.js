import { inventory } from "../../utils/createInventory.js";
import AddRamo from "./adminComponents/AddRamo.js";

const addRamoToStock = document.getElementById("add-ramo");

addRamoToStock.innerHTML = AddRamo();

const addRamoToStockButton = document.getElementById("add-ramo-button");

addRamoToStockButton.addEventListener("click", function () {
  const ramoToAdded = {
    // id: document.getElementById("id").value,
    descripcion: document.getElementById("admin-add-descripcion").value,
    precio: document.getElementById("admin-add-precio").value,
    imagen: document.getElementById("admin-add-imagen").value,
    stock: document.getElementById("admin-add-stock").value,
  };
  inventory.addRamo(ramoToAdded);
  console.log(inventory.ramos);
});
