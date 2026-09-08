function building(input) {
    let numberOfFloors = Number(input[0]);
    let numberOfRoomsInAFloor = Number(input[1]);
    
    
    for(let floor = numberOfFloors; floor > 0; floor--) {
        let result = "";
        let result1 = "";
       
        if(floor === numberOfFloors) {
        for(let room = 0; room <= (numberOfRoomsInAFloor -1); room++) {
            result1 += ("L" + floor + room + " ");
            if(room === (numberOfRoomsInAFloor -1)) {
                console.log(result1);
            }
        } continue;
        }
        if(floor % 2 === 0) {
            //offices
            for(let room = 0; room <= (numberOfRoomsInAFloor -1); room++) {
            result += ("O" + floor + room + " ");
            }
    
        } else if(floor % 2 === 1) {
            //apartments
            for(let room = 0; room <= (numberOfRoomsInAFloor -1); room++) {
            result += ("A" + floor + room + " ");
            }
        }
    console.log(result)}
    }
