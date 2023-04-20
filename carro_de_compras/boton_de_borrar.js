// Boton de borrar
const miBoton = document.createElement('button');
miBoton.classList.add('btn', 'btn-danger', 'mx-5');
miBoton.textContent = 'X';
miBoton.style.marginLeft = '1rem';
miBoton.dataset.item = item;
miBoton.addEventListener('click', borrarItemCarrito);
// Mezclamos nodos
miNodo.appendChild(miBoton);
DOMcarrito.appendChild(miNodo);

// Renderizamos el precio total en el HTML
DOMtotal.textContent = calcularTotal();
