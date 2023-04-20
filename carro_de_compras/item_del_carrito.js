// Creamos el nodo del item del carrito
const miNodo = document.createElement('li');
miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;