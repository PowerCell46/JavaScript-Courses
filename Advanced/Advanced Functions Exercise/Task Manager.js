function solve() {
    const addButton = document.getElementById("add");
    
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        let task = document.getElementById("task");
        let description = document.getElementById("description");
        let date = document.getElementById("date");
       
        if (task.value != "" && description.value != "" && date.value != "") {
            let parentDiv = document.querySelectorAll("section")[1];
            parentDiv = parentDiv.querySelectorAll("div")[1];
            parentDiv.innerHTML += `<article> <h3>${task.value}</h3> <p>Description: ${description.value}</p> <p>Due Date: ${date.value}</p> <div class="flex"> <button class="green" onclick="startFunc(this)">Start</button> <button class="red" onclick="deleteFunc(this)">Delete</button> </div> </article>`;
        
            task.value = "";
            description.value = "";
            date.value = "";
        }
    });
}

function startFunc(clickedButton) {
    let article = clickedButton.parentNode.parentNode;
    clickedButton.parentNode.parentNode.remove();

    let parentDiv = document.querySelectorAll("section")[2];
    parentDiv = parentDiv.querySelectorAll("div")[1];
    article.querySelector("div").querySelectorAll("button")[0].remove();
    article.querySelector("div").innerHTML += `<button class="orange" onclick="finishFunc(this)">Finish</button>`;
    parentDiv.append(article)    
}

function deleteFunc(clickedButton) {
    clickedButton.parentNode.parentNode.remove();
}

function finishFunc(clickedButton) {
    let article = clickedButton.parentNode.parentNode;
    clickedButton.parentNode.parentNode.remove();
    let parentDiv = document.querySelectorAll("section")[3];
    parentDiv = parentDiv.querySelectorAll("div")[1];
    article.querySelector("div").remove();
    parentDiv.append(article);
}
