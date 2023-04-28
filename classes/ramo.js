export default class ramos {
  constructor(id, descripcion, imagen, precio, stock) {
    (this.id = id),
      (this.descripcion = descripcion),
      (this.imagen = imagen),
      (this.precio = precio),
      (this.stock = stock);
  }

  getRamos() {
    return this.brand + " " + this.descripcion;
  }
}
