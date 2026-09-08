function aquarium(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentage = Number(input[3]);
    
    let volume = Number(length * width * hight);
    let volumeInLiters = Number(volume / 1000);
    let percentageFinal = Number(percentage / 100);
    let neededLiters = volumeInLiters * (1 - percentageFinal);
    console.log(neededLiters); 
}
