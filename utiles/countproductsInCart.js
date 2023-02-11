export default function countProductsInCart(array) {
    console.log(array);
    let initialValue = 0;
    let total;
    if (array !== []) {
      total = array.reduce(
        (accumulator, currentValue) =>
          accumulator + parseInt(currentValue.quantity),
        initialValue
      );
    }
    return total;
  }
  