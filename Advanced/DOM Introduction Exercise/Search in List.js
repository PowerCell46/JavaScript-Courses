function search() {
    let listOfTowns = Array.from(document.querySelectorAll("ul li"));
    let searchWord = document.getElementById("searchText").value;
    let matches = 0;
    for (let town of listOfTowns) {
        let townName = town.textContent;

        if (townName.includes(searchWord)) {
            town.style.textDecoration = "underline";
            town.style.fontWeight = "bold";
            matches++;
        } else {
            town.style.textDecoration = "none";
            town.style.fontWeight = "";
        }
    }
    document.getElementById("result").innerText = `${matches} matches found`;
}
