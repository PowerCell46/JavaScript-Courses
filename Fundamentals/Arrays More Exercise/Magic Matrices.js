function magicMatrices(arrayOfArrays) {

    let columns_arrays_sums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rows_arrays_sums = [];

    for (let index = 0; index < arrayOfArrays.length; index++) {
        let current_array = arrayOfArrays[index];
        let current_array_sum = 0;
        for (let xedni = 0; xedni < current_array.length; xedni++) {
            let current_number = current_array[xedni];
            current_array_sum += current_number;
            columns_arrays_sums[xedni] += current_number;
        }
        rows_arrays_sums.unshift(current_array_sum);

    }

    theArrayIsMagical = false;

    for (let i = 0; i < rows_arrays_sums.length; i++) {
        let current_row_sum = rows_arrays_sums[i];

        for (let p = 0; p < rows_arrays_sums.length; p++) {
            let currentColumnSum = columns_arrays_sums[p];

            if (current_row_sum == currentColumnSum) {
                theArrayIsMagical = true;
            }
            else {
                theArrayIsMagical = false;
                break;
            }
        }
    }

    console.log(theArrayIsMagical)
}
