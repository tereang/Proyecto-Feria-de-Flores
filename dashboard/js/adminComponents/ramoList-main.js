import { inventory } from "../../utils/createInventory.js";
import RamoList from "./adminComponents/RamoList.js";

const ramoList = document.getElementById("ramo-list");
ramoList.innerHTML = RamoList(inventory.getAllRamos());
