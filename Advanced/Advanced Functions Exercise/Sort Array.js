function sortArray(array, string) {
    switch (string) {
        case "asc":
            return array.sort((a, b) => a - b);
            break;
        case "desc":
            return array.sort((a,b) => b -a);
    }
}
