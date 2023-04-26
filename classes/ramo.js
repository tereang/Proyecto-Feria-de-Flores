export default class Ramo {
  constructor(id, descripcion, imagen, precio, stock) {
    (this.id = id),
      (this.descripcion = descripcion),
      (this.imagen = imagen),
      (this.precio = precio),
      (this.stock = stock);
  }

  getRamo() {
    return this.brand + " " + this.descripcion;
  }
}
