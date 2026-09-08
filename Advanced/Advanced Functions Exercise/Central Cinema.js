function solve() {
    const onScreenButton = document.getElementById("container").querySelector("button");
    onScreenButton.addEventListener("click", (e) => {
        e.preventDefault();

        let name = document.getElementById("container").querySelector("input");
        let hall = document.getElementById("container").querySelectorAll("input")[1];
        let ticketPrice = document.getElementById("container").querySelectorAll("input")[2];
        
        if (name.value != "" && hall.value != "" && ticketPrice.value != "" && !isNaN(ticketPrice.value)) {
            let parentUl = document.getElementById("movies").querySelector("ul");
            parentUl.innerHTML += `<li> <span>${name.value}</span> <strong>Hall: ${hall.value}</strong> <div> <strong>${Number(ticketPrice.value).toFixed(2)}</strong> <input placeholder="Tickets Sold"> <button onclick="archiveFunc(this)">Archive</button> </div> </li>`;
            name.value = "";
            hall.value = "";
            ticketPrice.value = "";
        }
    })

    const clearButton = document.getElementById("archive").querySelector("button");
    clearButton.addEventListener("click", () => {
        document.getElementById("archive").querySelector("ul").innerHTML = "";
    })
}

function archiveFunc(archiveButton) {
    if (!isNaN(archiveButton.parentNode.querySelector("input").value) && archiveButton.parentNode.querySelector("input").value != "") {
        let numberOfBoughtTickets = Number(archiveButton.parentNode.querySelector("input").value);
       
        let archiveUl = document.getElementById("archive").querySelector("ul");
        let liElement = archiveButton.parentNode.parentNode;
        archiveButton.parentNode.parentNode.remove();
        let ticketPrice = Number(liElement.querySelector("div").querySelector("strong").textContent);
        liElement.querySelector("div").remove();

        liElement.innerHTML += `<button onclick="deleteFunc(this)">Delete</button>`;
        liElement.querySelector("strong").textContent = `Total amount: ${(ticketPrice * numberOfBoughtTickets).toFixed(2)}`
        
        archiveUl.append(liElement);
    }
}

function deleteFunc(deleteButton) {
    deleteButton.parentNode.remove();
}

