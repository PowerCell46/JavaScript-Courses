function primeNumberChecker(number) {
theNumberIsPrime = true;

for(let currentDivider = 2; currentDivider < number; currentDivider++) {
if(number % currentDivider === 0) {
theNumberIsPrime = false;
}
}
console.log(theNumberIsPrime);
}
