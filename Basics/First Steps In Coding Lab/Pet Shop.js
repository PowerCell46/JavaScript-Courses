function foodForAnimals(input) {
let foodForDogs = Number(input[0] * 2.50);
let foodForCats = Number(input[1] * 4);
let allFood = foodForCats + foodForDogs;
let finalMessage = allFood + " lv."
console.log(finalMessage); 
}
