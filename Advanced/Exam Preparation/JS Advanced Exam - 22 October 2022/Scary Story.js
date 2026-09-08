function solve() {
  let publishButton = document.getElementById("form-btn");
  publishButton.addEventListener("click", function publishFunc() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let age = document.getElementById("age")
    let storyTitle = document.getElementById("story-title")
    let genre = document.getElementById("genre")
    let story = document.getElementById("story")
    let arrayOfInputs = [firstName.value, lastName.value, age.value, storyTitle.value, genre.value, story.value ];
    
    if(!arrayOfInputs.includes("")) {
      let liElement = document.createElement("li");
      liElement.classList.add("story-info");
      let articleEl = document.createElement("article");
      let name = document.createElement("h4");
      name.textContent = `Name: ${arrayOfInputs[0]} ${arrayOfInputs[1]}`
      let finalage = document.createElement("p");
      finalage.textContent = `Age: ${arrayOfInputs[2]}`
      let title = document.createElement("p");
      title.textContent = `Title: ${arrayOfInputs[3]}`;
      let finalgenre = document.createElement("p");
      finalgenre.textContent = `Genre: ${arrayOfInputs[4]}`;
      let storyItself = document.createElement("p");
      storyItself.textContent = `${arrayOfInputs[5]}`;
      articleEl.appendChild(name);
      articleEl.appendChild(finalage);
      articleEl.appendChild(title);
      articleEl.appendChild(finalgenre);
      articleEl.appendChild(storyItself);
      liElement.appendChild(articleEl);

      let saveButton = document.createElement("button");
      saveButton.classList.add("save-btn");
      saveButton.textContent = "Save Story";
      let editButton = document.createElement("button");
      editButton.classList.add("edit-btn");
      editButton.textContent = "Edit Story";
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "Delete Story";
      liElement.appendChild(saveButton);
      liElement.appendChild(editButton);
      liElement.appendChild(deleteButton);
      
      let ulElement = document.getElementById("preview-list");
      ulElement.appendChild(liElement);

      firstName.value = "";
      lastName.value = "";
      age.value = "";
      storyTitle.value = "";
      genre.value = "";
      story.value = "";
      publishButton.disabled = true;

      editButton.addEventListener("click", function editFunc() {
        firstName.value = arrayOfInputs[0];
      lastName.value = arrayOfInputs[1];
      age.value = arrayOfInputs[2];
      storyTitle.value = arrayOfInputs[3];
      genre.value = arrayOfInputs[4];
      story.value = arrayOfInputs[5];
      publishButton.disabled = false;
      liElement.remove();
      })

      saveButton.addEventListener("click", function SaveFunc() {
      let mainDiv = document.getElementById("main");
      mainDiv.innerHTML = "";
      let finalH1 = document.createElement("h1");
      finalH1.textContent = "Your scary story is saved!";
      mainDiv.appendChild(finalH1);
      })

      deleteButton.addEventListener("click", function deleteFunc() {
        liElement.remove();
        publishButton.disabled = false;
      })
    }
})
}
