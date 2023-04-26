import Inventory from "../classes/inventory.js";
import { watchs } from "../utils/createRamo.js";

export const inventory = new Inventory();

watchs.forEach((watch) => {
  inventory.addRamo(watch);
});
