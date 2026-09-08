function towns(array) {

    for (let index = 0; index < array.length; index++) {
        let current_data = (array[index]).split(" | ");
        let objTowns = {
            town: current_data[0],
            latitude: Number(current_data[1]).toFixed(2),
            longitude: Number(current_data[2]).toFixed(2),
            func() {
                return "{ town: '" + this.town + "', latitude: '" + this.latitude + "', longitude: '" + this.longitude + "' }"
            }
        }
        console.log(objTowns.func());
    }
}
