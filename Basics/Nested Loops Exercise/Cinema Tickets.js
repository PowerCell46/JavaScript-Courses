function cinema(input) {
    let index = 0;
    let movieName = input[index];
    index++;
    let freeseats = Number(input[index]);
    let typeOfSeat = "";
    
    let counter = 1;
    let studentCounter = 0;
    let standardCounter = 0;
    let kidsCounter = 0;
    let percentageOfTakenSeats = 0;
    let totalTickets = 0;

    while(movieName !== "Finish" && typeOfSeat !== "Finish") {
        counter = 1;
        index++;
        typeOfSeat = input[index];

        while(counter <= freeseats && typeOfSeat !== "End") {
        switch(typeOfSeat) {
        case "student": studentCounter++; totalTickets++; break;
        case "standard": standardCounter++; totalTickets++; break;
        case "kid": kidsCounter++; totalTickets++; break;
        }
        
        index++;
        typeOfSeat = input[index]; 
        counter++;
    } 
    if(typeOfSeat === "End") {
        index++;
    }
    percentageOfTakenSeats = (counter - 1) / (freeseats / 100);
    console.log(movieName + " - " + percentageOfTakenSeats.toFixed(2) + "% full.");
    movieName = input[index];
    index++;
    freeseats = Number(input[index]);     
    }
    
    if(movieName === "Finish" || typeOfSeat === "Finish") {
    let studentPercentage = studentCounter  / (totalTickets/ 100);
    let standardPercentage = standardCounter  / (totalTickets/ 100);
    let kidsPercentage = kidsCounter  / (totalTickets/ 100);
        console.log("Total tickets: " + totalTickets);
        console.log(studentPercentage.toFixed(2) + "% student tickets.");
        console.log(standardPercentage.toFixed(2) + "% standard tickets.");
        console.log(kidsPercentage.toFixed(2) + "% kids tickets.");
    }

}
