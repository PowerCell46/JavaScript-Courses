function fuckingMath(length, neededNums) {
  let array = [1];

  for (let i = 0; i < length -1; i++) {
    let sequence = array.slice(-neededNums);
    let sum = 0;
    for (el of sequence) {
      sum += el;
    }
    array.push(sum);
  }

  console.log(array.join(" "));
}
