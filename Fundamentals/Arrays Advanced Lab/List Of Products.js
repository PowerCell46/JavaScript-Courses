function listOfProducts(array) {
  array.sort();
  let number = 0;
  for (let index = 0; index < Number(array.length); index++) {
    let currentProduct = array[index];
    number++;
    console.log(`${number}.${currentProduct}`);
  }
}
