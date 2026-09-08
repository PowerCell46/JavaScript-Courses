function solve() {
    let addToTheListButton = document.getElementById("add");
    addToTheListButton.addEventListener("click", function addToTheListFunc(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      let recipientName = document.getElementById("recipientName");
      let title = document.getElementById('title');
      let message = document.getElementById('message');
      let arrayOfData = [recipientName.value, title.value, message.value];
  
      if (!arrayOfData.includes("")) {
        
        let parentUl = document.getElementById("list")
        let currentLi = document.createElement("li");
        let titleH4 = document.createElement("h4");
        titleH4.textContent = `Title: ${arrayOfData[1]}`;
        let nameH4 = document.createElement("h4");
        nameH4.textContent = `Recipient Name: ${arrayOfData[0]}`;
        let messageH4 = document.createElement("span");
        messageH4.textContent = `${arrayOfData[2]}`;
        let divButtonSection = document.createElement("div");
        divButtonSection.setAttribute("id", "list-action");
        let sendButton = document.createElement("button");
        sendButton.type = "submit";
        sendButton.setAttribute("id", "send");
        sendButton.textContent = "Send";
        let deleteButton = document.createElement("button");
        deleteButton.type = "submit";
        deleteButton.setAttribute("id", "delete");
        deleteButton.textContent = "Delete";
        
        divButtonSection.appendChild(sendButton);
        divButtonSection.appendChild(deleteButton);
        currentLi.appendChild(titleH4);
        currentLi.appendChild(nameH4);
        currentLi.appendChild(messageH4);
        currentLi.appendChild(divButtonSection);
        parentUl.appendChild(currentLi);

        recipientName.value = "";
        title.value = "";
        message.value = "";

        sendButton.addEventListener("click", function sendFunc() {
            let sentUl = document.getElementsByClassName("sent-list")[0];
            let sendLi = document.createElement("li");
            let toSpan = document.createElement('span');
            toSpan.textContent = `To: ${arrayOfData[0]}`;
            let titleSpan = document.createElement("span");
            titleSpan.textContent = `Title: ${arrayOfData[1]}`
            let buttonDiv = document.createElement("div");
            buttonDiv.classList.add("btn");
            let deleteButtonFinal = document.createElement("button");
            deleteButtonFinal.type = "submit";
            deleteButtonFinal.classList.add("delete");
            deleteButtonFinal.textContent = "Delete";
            
            buttonDiv.appendChild(deleteButtonFinal);
            sendLi.appendChild(toSpan);
            sendLi.appendChild(titleSpan);
            sendLi.appendChild(buttonDiv);
            currentLi.remove();
            sentUl.appendChild(sendLi);

            deleteButtonFinal.addEventListener("click", function deleteButtonFinalFunc() {
                sendLi.remove();
                let deleteLi = document.createElement("li");
                let toSpanDelete = document.createElement("span");
                toSpanDelete.textContent = `To: ${arrayOfData[0]}`;
                let titleSpanDelete = document.createElement("span");
                titleSpanDelete.textContent = `Title: ${arrayOfData[1]}`
                deleteLi.appendChild(toSpanDelete);
                deleteLi.appendChild(titleSpanDelete);
                let deleteUl = document.getElementsByClassName("delete-list")[0];
                deleteUl.appendChild(deleteLi);
            })
        })

        deleteButton.addEventListener("click", function deleteButtonFunc() {
            currentLi.remove();
            let deleteLi = document.createElement("li");
            let toSpanDelete = document.createElement("span");
            toSpanDelete.textContent = `To: ${arrayOfData[0]}`;
            let titleSpanDelete = document.createElement("span");
            titleSpanDelete.textContent = `Title: ${arrayOfData[1]}`
            deleteLi.appendChild(toSpanDelete);
            deleteLi.appendChild(titleSpanDelete);
            let deleteUl = document.getElementsByClassName("delete-list")[0];
            deleteUl.appendChild(deleteLi);
        })
      } 
    });

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function resetFunc(event) {
        event.preventDefault();
        let recipientName = document.getElementById("recipientName");
        let title = document.getElementById('title');
        let message = document.getElementById('message');
        recipientName.value = "";
        title.value = "";
        message.value = "";
    })
  }
