/**
 * Evento para agregar un producto al carrito de la compra
 */
function agregarRamoAlCarrito(evento) {
  // Agregamos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarCarrito();

}
