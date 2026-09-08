function painting(input) {
let nailon = Number(input[0] * 1.50 + 3);
let paint = Number(14.50 * (input[1] * 1.1));
let razreditel = Number(5 * input[2]);
let bags = Number(0.40);
let sum = Number(nailon + paint + razreditel + bags);
let workersWage = Number((sum * 0.3) * input[3]);
let finalSum = Number(sum + workersWage);
console.log(finalSum);
}
