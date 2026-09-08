window.addEventListener('load', solve);
function solve() {
    let buyTicketBtn = document.getElementById("next-btn");
    buyTicketBtn.addEventListener("click", function buyTicket() {

        let firstName = document.getElementById("first-name");
        let lastName = document.getElementById("last-name");
        let numberOfPeople = document.getElementById("people-count");
        let fromDate = document.getElementById("from-date");
        let numberOfDays = document.getElementById("days-count");
        let dataArray = [firstName.value, lastName.value, numberOfPeople.value, fromDate.value, numberOfDays.value];
        
        if (!dataArray.includes("")) {

            let listItem = document.createElement("li");
            listItem.classList.add("ticket");

            let article = document.createElement("article");
            let h3Name = document.createElement("h3");
            h3Name.textContent = `Name: ${firstName.value} ${lastName.value}`;
            let dateP = document.createElement("p");
            dateP.textContent = `From date: ${fromDate.value}`
            let forDaysP = document.createElement("p");
            forDaysP.textContent = `For ${numberOfDays.value} days`
            let forPeopleP = document.createElement("p");
            forPeopleP.textContent = `For ${numberOfPeople.value} people`;
            
            article.appendChild(h3Name);
            article.appendChild(dateP);
            article.appendChild(forDaysP);
            article.appendChild(forPeopleP);
            listItem.appendChild(article);
            
            firstName.value = "";
            lastName.value = "";
            numberOfPeople.value = "";
            fromDate.value = "";
            numberOfDays.value = "";
            dataArray.value = ""
            
            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.classList.add("edit-btn");

            let continueBtn = document.createElement("button");
            continueBtn.textContent = "Continue";
            continueBtn.classList.add("continue-btn");

            listItem.appendChild(editBtn);
            listItem.appendChild(continueBtn);

            let ulParent = document.getElementsByClassName("ticket-info-list");
            ulParent[0].appendChild(listItem);
            buyTicketBtn.disabled = true;

            editBtn = document.getElementsByClassName("edit-btn");
            editBtn[0].addEventListener("click", function editButtonFunc() {
                firstName.value = dataArray[0];
                lastName.value = dataArray[1];
                numberOfPeople.value = dataArray[2];
                fromDate.value = dataArray[3];
                numberOfDays.value = dataArray[4];
                dataArray.value = dataArray[5];
                buyTicketBtn.disabled = false;
                listItem = document.getElementsByClassName("ticket");
                listItem[0].remove();
            })

            continueBtn = document.getElementsByClassName("continue-btn");
            continueBtn[0].addEventListener("click", function continueButtonFunc() {
                let finalUlParent = document.getElementsByClassName("confirm-ticket")[0];
                let finalListItem = document.createElement("li");
                finalListItem.classList.add("ticket-content");
                
                let finalArticle = document.createElement("article");
                finalArticle.appendChild(h3Name);
                finalArticle.appendChild(dateP);
                finalArticle.appendChild(forDaysP);
                finalArticle.appendChild(forPeopleP);
                finalListItem.appendChild(finalArticle);

                let lastConfirm = document.createElement("button");
                lastConfirm.textContent = "Confirm";
                lastConfirm.classList.add("confirm-btn");

                let cancelBtn = document.createElement("button");
                cancelBtn.textContent = "Cancel";
                cancelBtn.classList.add("cancel-btn");

                finalListItem.appendChild(lastConfirm);
                finalListItem.appendChild(cancelBtn);
                finalUlParent.appendChild(finalListItem);

                listItem = document.getElementsByClassName("ticket");
                listItem[0].remove();

                cancelBtn = document.getElementsByClassName("cancel-btn");
                cancelBtn[0].addEventListener("click", function cancelFunc() {
                    firstName.value = dataArray[0];
                    lastName.value = dataArray[1];
                    numberOfPeople.value = dataArray[2];
                    fromDate.value = dataArray[3];
                    numberOfDays.value = dataArray[4];
                    dataArray.value = dataArray[5];
                    buyTicketBtn.disabled = false;
                    finalListItem = document.getElementsByClassName("ticket-content");
                    finalListItem[0].remove();
                })

                lastConfirm = document.getElementsByClassName("confirm-btn");
                lastConfirm[0].addEventListener("click", function lastConfirmFunc() {
                    let mainElement = document.getElementById("main");
                    mainElement.remove();
                    let bodyElement = document.getElementById("body");

                    let finalGreeting = document.createElement("h1");
                    finalGreeting.id = "thank-you";
                    finalGreeting.textContent = "Thank you, have a nice day!";
                    let backBtn = document.createElement("button");
                    backBtn.textContent = "Back";
                    backBtn.id = "back-btn";

                    bodyElement.appendChild(finalGreeting);
                    bodyElement.appendChild(backBtn);

                    backBtn = document.getElementById("back-btn");
                    backBtn.addEventListener("click", function backBtnFunc() {
                        location.reload();
                    })
                })
            })
        }
    })
}


    
    
