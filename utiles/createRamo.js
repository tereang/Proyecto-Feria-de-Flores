import { ramos } from "../data/ramos.js";
import Ramo from "../classes/ramo.js";

export const watchs = ramos.map(
  (ramo) =>
    new Ramo(
      ramo.id,
      ramo.descripcion,
      ramo.imagen,
      ramo.precio,
      ramo.stock
    )
);
