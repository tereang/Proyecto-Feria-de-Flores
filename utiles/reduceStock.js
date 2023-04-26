import sendMail from "./sendMail.js";

export default function reduceStock(cartRamos, purchaseNumber, stock) {
  console.log(cartRamos);
  cartRamos.forEach((ramo) => {
    if (ramo.stock > 0) {
      ramo.stock = ramo.stock - ramo.cantidad;
      if (ramo.stock === 0) {
        sendMail(ramo.id, ramo.descripcion);
      }
    }
    purchaseNumber += 1;
  });

  return newStock(purchaseNumber, cartRamos, stock);
}

function newStock(purchaseNumber, cartRamos, stock) {
  let ramoId = "";

  if (purchaseNumber > 0) {
    ramoId = cartRamos.map((ramo) => ramo.id);
    console.log(ramoId);
    ramoId.forEach((item) => {
      deleteRamo(item, stock);
    });

    stock = cartRamos.concat(...stock);

    return stock;
  }
}

function deleteRamo(item, stock) {
  let ramoToEliminate = [];
  ramoToEliminate.push(stock.findIndex((ramo) => ramo.id === item));
  return ramoToEliminate >= 0 && stock.splice(ramoToEliminate, 1);
}
