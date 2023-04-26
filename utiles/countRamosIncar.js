export default function countRamosInCart(array) {
  console.log(array);
  let initialValue = 0;
  let total;
  if (array !== []) {
    total = array.reduce(
      (accumulator, currentValue) =>
        accumulator + parseInt(currentValue.cantidad),
      initialValue
    );
  }
  return total;
}
