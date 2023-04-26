import { inventory } from "../../utils/createInventory.js";
import UpdateRamo from "./adminComponents/updateRamo.js";

const updateRamo = document.getElementById("update-ramo");
updateRamo.innerHTML = UpdateRamo(inventory.getRamo(1));

const addRamoButton = document.getElementById("update-ramo-button");
addRamoButton.addEventListener("click", function () {
  const updateRamo = {
    id: parseInt(document.getElementById("admin-update-id").value),
    descripcion: document.getElementById("admin-update-descripcion").value,
    precio: document.getElementById("admin-update-precio").value,
    imagen: document.getElementById("admin-update-imagen").value,
    stock: document.getElementById("admin-update-stock").value,
  };

  inventory.updateRamo(updateRamo.id, updateRamo);
});
