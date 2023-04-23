// --> CALCULO DE TOTALES
/**
 * Total sin impuestos
 * @param { [{precio: number; cantidad: number;}] } productsInCart 
 */
const getTotalWithoutTax = (productsInCart) => {
  const value = productsInCart.reduce(
      (acumulador, product) => {
          // console.log('acumulador', acumulador)
          // console.log('product.precio', product.precio);
          // console.log('product.cantidad', product.cantidad);
          const aux = parseInt(acumulador) + parseInt(product.precio) * parseInt(product.cantidad)
          // console.log('aux', aux);
          return aux;
      }, 0
  );
  // console.log('value', value)
  return value;
}


/**
* Total con impuestos
* @param { [{precio: number; qty: number;}] } productsInCart 
*/
const getTotalWithTax = (productsInCart) => {
  const TAX = 1.19;
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.precio) * parseInt(product.cantidad)),
      0
  );
  return value * TAX;
}

/**
* Valor Impuesto
* @param { [{precio: number; qty: number;}] } productsInCart 
*/
const getTax = (productsInCart) => {
  const TAX = 0.19;
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.precio) * parseInt(product.cantidad)),
      0
  );
  return value * TAX;
}

/**
* Valor Impuesto
* @param { [{precio: number; qty: number;}] } productsInCart 
*/
const getTotalProducts = (productsInCart) => {
  const value = productsInCart.reduce(
      (acumulador, product) => (acumulador + parseInt(product.cantidad)),
      0
  );
  return value;
}

/**
* Valor comision
* @param { totalSinImpuesto: number } totalSinImpuesto 
*/
const getShippingCost = (total) => {
  const comision = 0.05;
  return (total < 100000) ? total * comision : 0;
}

/**
* Sumatoria de todos los items
* @param {number} totalSinImpuesto 
* @param {number} Impuesto 
* @param {number} Comision 
* @returns 
*/
const getTotal = (totalSinImpuesto, Impuesto, Comision) => {
  const comision = 0.05;
  return totalSinImpuesto * comision;
}


function getRamosListCart(ramoList){
  const ramoHtmlArray = ramoList.map( (ramo) => {
      return `
          <li>
              <img src="${ramo.imagen}" class="cart-image" alt="Image ${ramo.nombre}">
              <p id="nombreP">${ramo.nombre}</p>
              <p>${ramo.cantidad} x ${ramo.precio}</p>
              <p>${ramo.id_categoria}</p>
              <button class="cart-remove" qty=${ramo.cantidad} uuid="${ramo.id_categoria}"> Eliminar </button>
          </li>
          <br>
  `
  });

  //console.log("productList", productList);
  //console.log("productHtmlArray", productHtmlArray);
  return productHtmlArray;

}


// --> EVENTOS
//variable que almacena los productos anadidos al carro
var ramosInCart = [];
var contadorRamos = 0;



$(document).ready(function () {

  // acciones de los botones anadir al carro 
  $('.ramo-block .add-button').click( function() {
      //console.log('boton anadir', this);
      //console.log('boton anadir', $(this));
      // console.log('info', $(this).attr('info'));
      // console.log('info parsed', JSON.parse($(this).attr('info').replace(/\'/g, '\"')));

      const ramo = JSON.parse($(this).attr('info').replace(/\'/g, '\"'));
      // console.log('product', product);

      // Obtener la cantidad de productos
      // TIP: utilizar .parent() y .child() para seleccionar la cantidad de productos.
      const cantidad = $(this).parent().parent().children(".box-cantidad").children(".input-cantidad").val();
      // console.log('cantidad', cantidad);
      ramo.cantidad = cantidad;
      // console.log('product con catidad', product);

      // Cambiar el estado de boton anadido, usar if
      // TIP: crer 2 botones. utilizar .hide() .show() o .toggle() para cambiar la visibilidad de uno u otro.
      // TIP alt: utilizar .css()
      // esconde boton actual
      const addButton = $(this);
      const addedButton = $(this).siblings(".added-button");
      addButton.toggle();
      addedButton.toggle();

      setTimeout(
          function () {
              addButton.toggle();
              addedButton.toggle();
          },
          1000
      );

      // add product 
      // TIP: utilizar array.push() para actualizar la variable 'productsInCart'

      ramosInCart.push(ramo);
      //console.log('productsInCart', productsInCart);


      // reconstruir html con el listado de productos
      // TIP: .html() para reemplazar el $(#totalizador).html(codigohtml)

      // Actualizar totales
      const totalNeto = getTotalWithoutTax(ramosInCart);
      const iva = getTax(ramosInCart);
      const total = getTotalWithTax(ramosInCart);
      

      // console.log('totalNeto', totalNeto);
      console.log('iva', iva);
      console.log('total', total);

      $("#total-neto").html(totalNeto);
      $("#iva").html(iva);
      $("#total").html(total);
      $("#shipping").html(getShippingCost(total));
      $("#total-with-shipping").html(total + getShippingCost(total));
      
      const ramosInCartHTML = getRamosListCart(ramosInCart);
      //console.log('productsInCartHTML', productsInCartHTML.join('\n'));
      $("#totalizador .item-list").html(ramosInCartHTML.join('\n'));

      //aumentar el contador de cantidad
      contadorRamos = contadorRamos + parseInt(cantidad);
      $("#cart-qty").html(contadorRamos);

      // Add event to remove button
      $('#totalizador .cart-remove').click( function() {

          //console.log('uuid elemento', $(this).attr('uuid'));

          const uuid = $(this).attr('uuid'); // obtiene el id del producto a eliminar

          // eliminado elemento del arreglo
          //console.log('productsInCart', productsInCart);
          const index = ramosInCart.findIndex((ramo) => { ramo.id === uuid }); // obtiene el indice en el arreglo de productos en el carro del objeto a eliminar
          ramosInCart.splice(index, 1); // elimina el producto con la funcion splice
          //console.log('productsInCart', productsInCart);

          // disminuir el contador de la notificacion
          contadorRamos = contadorRamos - $(this).attr('qty');
          $("#cart-qty").html(contadorRamos);

          // remover al padre
          $(this).parent().remove();
          
          // // Reconstruye el html del totalizador
          // const productsInCartHTML = getProductsListCart(productsInCart);
  
          // //console.log('productsInCartHTML', productsInCartHTML.join('\n'));
          // $("#totalizador .item-list").html(productsInCartHTML.join('\n'));

          // recalcular totales
          $("#total-neto").html(getTotalWithoutTax(ramosInCart));
          $("#iva").html(getTax(ramosInCart));
          $("#total").html(getTotalWithTax(ramosInCart));
          
          $("#shipping").html(getShippingCost(getTotalWithTax(ramosInCart)));
          $("#total-with-shipping").html(getTotalWithTax(ramosInCart) + getShippingCost(total));


      });

  });

  // acciones del boton del carro 
  $('#cart-button').click(function () {
      //console.log('boton carro', $(this));
      // deplegar/esconder el totalizador
      $("#totalizador").toggle()

  });
  
});


// CONSTRUCCION DEL CATALOGO
const ramoBlocks = galeria.map((ramo) => {
  return `<div class="col-md-3 my-3">
  <div id="${ramo.id}" class="ramo-block">
      <img class="d-block w-100 foto" src="${ramo.imagen}" alt="Ramo">
      <h3 id=nombreP>${ramo.nombre}</h3>
      <p>Codigo ${ramo.id_categoria}</p>
      <p>${ramo.descripcion}</p>
      <p>${ramo.precio}</p>
      <div class="row">
          <div class="box-cantidad col-md-6">
              <input class="input-cantidad" type="number" placeholder="cantidad" value="1"/>
          </div>
          <div class="col-md-6">
              <button info="${JSON.stringify(ramo).replace(/\"/g, '\'')}" class="add-button btn btn-outline-success btn-sm" type="button">Añadir</button>
              <button class="added-button btn btn-outline-success btn-sm" type="button" style="display:none;">Añadido</button>
          </div>
      </div>
  </div>
</div>`
});

var ramosHTML = '';

for (var i = 0; i < ramoBlocks.length; i++) {
  ramosHTML = ramosHTML + ramoBlocks[i];
}
document.getElementById("ramos").innerHTML = ramosHTML;


// iva = parseInt(document.querySelector('#iva').textContent)
// neto = parseInt(document.querySelector('#total-neto').textContent);
// shipping = parseInt(document.querySelector('#shipping').textContent);
// totalwith = parseInt(document.querySelector('#total-with-shipping').textContent);

// funcion para crear la boleta
const confirmCart = (event) => {
  event.preventDefault();
  console.log('form submit confirm Cart');
  
  // Valores requeridos por la boleta
  console.log('fullname', event.target.elements.fullname.value);
  console.log('email', event.target.elements.email.value);
  console.log('address', event.target.elements.address.value);
  console.log('comuna', event.target.elements.comuna.value);
  console.log('state', event.target.elements.state.value);

  console.log('ramosInCart', ramosInCart);

  console.log('total-neto', getTotalWithoutTax(ramosInCart));
  console.log('iva', getTax(ramosInCart));
  console.log('total', getTotalWithTax(ramosInCart));
  console.log('shipping', getShippingCost(getTotalWithTax(ramosInCart)));
  console.log('total-with-shipping', getTotalWithTax(ramosInCart) + getShippingCost(total));

  //build invoice
  // customer info
  customerInfo = `
      <div>${event.target.elements.fullname.value}</div>
      <div>${event.target.elements.email.value} </div>
      <div>${event.target.elements.address.value} </div>
      <div>${event.target.elements.comuna.value} </div>
      <div>${event.target.elements.state.value} </div>
  `;
  $('#invoice-customer-info').html(customerInfo)

  // products
  const ramoTableRows = ramosInCart.map((ramo) => {
      return `
          <tr>
              <td class="code">${ramo.id_categoria}</td>
              <td class="desc">${ramo.nombre}</td>
              <td class="unit">$${ramo.precio}</td>
              <td class="qty">${ramo.cantidad}</td>
              <td class="total">$${ramo.precio * ramo.cantidad}</td>
          </tr>
      `;
  }); 
  console.log('ramoTableRows', ramoTableRows)
  $('#invoice-ramos').append(ramoTableRows);

  // totals
  const totalSinImpuesto = `
          <tr>
          <td colspan="4">Total sin impuesto</td>
          <td class="total">${getTotalWithoutTax(ramosInCart)}</td>
          </tr>
      `;
  $('#invoice-products').append(totalSinImpuesto);

  const iva = `
          <tr>
          <td colspan="4">IVA (19%)</td>
          <td class="total">${getTax(ramosInCart)}</td>
          </tr>
      `;
  $('#invoice-products').append(iva);

  const totalWithTax = `
          <tr>
          <td colspan="4">Total</td>
          <td class="total">${getTotalWithTax(ramosInCart)}</td>
          </tr>
      `;
  $('#invoice-ramos').append(totalWithTax);

  const despacho = `
          <tr>
          <td colspan="4">Despacho</td>
          <td class="total">${getShippingCost(getTotalWithTax(ramosInCart))}</td>
          </tr>
      `;
  $('#invoice-ramos').append(despacho);

  const totalConDespacho = `
          <tr>
          <td colspan="4">Total con Despacho</td>
          <td class="total">${getTotalWithTax(ramosInCart) + getShippingCost(total)}</td>
          </tr>
      `;
  $('#invoice-ramos').append(totalConDespacho);

  //hide header main#shopping footer
  $('header').hide();
  $('#shopping').hide();
  $('footer').hide();
  $('.modal-backdrop').hide();
  
  //show invoice
  $('#invoice').show();
  //modal issues
  $('body').css('overflow', 'auto');
  $('body').css('padding', '0px');


  //Envio  de Correos
  const boletaHTML = `
  <main id="invoice" class="container">
      <div class="invoice-header clearfix">
      <h1>Feria de Flores.CL</h1>
      <div id="company" class="clearfix">
          <div>Feria de Flores LTDA.</div>
          <div>8 Norte 640<br /> Viña del Mar, Chile</div>
          <div>(32) 214-6709</div>
          <div><a href="mailto:ventas@FeriadeFlores.cl">ventas@FeriadeFlores.cl</a></div>
      </div>
      <div id="invoice-customer-info">
          <div>${event.target.elements.fullname.value}</div>
          <div>${event.target.elements.email.value} </div>
          <div>${event.target.elements.address.value} </div>
          <div>${event.target.elements.comuna.value} </div>
          <div>${event.target.elements.state.value} </div>
      </div>
      </div>
      <div class="invoice-body">
      <table>
          <thead>
          <tr>
              <th class="service">ID CATEGORIA</th>
              <th class="desc">PRODUCTO</th>
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>TOTAL</th>
          </tr>
          </thead>
          <tbody id="invoice-ramos">
          ${ramosInCart.map((ramo) => {
              return `
                  <tr>
                      <td class="code">${ramo.id_categoria}</td>
                      <td class="desc">${ramo.nombre}</td>
                      <td class="unit">$${ramo.precio}</td>
                      <td class="qty">${ramo.cantidad}</td>
                      <td class="total">$${ramo.precio * ramo.cantidad}</td>
                  </tr>
              `;
          })}

              <tr>
              <td colspan="4">Total sin impuesto</td>
              <td class="total">${getTotalWithoutTax(ramosInCart)}</td>
              </tr>

              <tr>
              <td colspan="4">IVA (19%)</td>
              <td class="total">${getTax(ramosInCart)}</td>
              </tr>

              <tr>
              <td colspan="4">Total</td>
              <td class="total">${getTotalWithTax(ramosInCart)}</td>
              </tr>
              
              <tr>
              <td colspan="4">Despacho</td>
              <td class="total">${getShippingCost(getTotalWithTax(ramosInCart))}</td>
              </tr>

              <tr>
              <td colspan="4">Total con Despacho</td>
              <td class="total">${getTotalWithTax(ramosInCart) + getShippingCost(total)}</td>
              </tr>

          </tbody>
      </table>
      </div>
  </main>
  `;

  // Send Email
  Email.send({
      Host : "*",
      Username : "username",
      Password : "password",
      To : event.target.elements.email.value,
      From : "ventas@FeriadeFlores.com",
      Subject : "Boleta Feria de Flores",
      Body : boletaHTML
  }).then(
    message => alert('Hemos enviado la boleta a tu correo. Revisa tu bandeja de entrada.')
  ).catch( error => alert('Hemos enviado la boleta a tu correo. Revisa tu bandeja de entrada.') );

};

