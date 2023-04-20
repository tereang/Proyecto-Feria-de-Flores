/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
  // Recorremos el array del carrito 
  return carrito.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = ramos.filter((itemFeria_de_flores) => {
          return itemFeria_de_flores.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}