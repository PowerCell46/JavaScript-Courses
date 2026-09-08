function stepenTask(input) {
let number = Number(input[0]);
let one = 1;

for( i = 0; i <= number; i += 2) {
    console.log(one);
    one = one * 2 * 2;
}
}
