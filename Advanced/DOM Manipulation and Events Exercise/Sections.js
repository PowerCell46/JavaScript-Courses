function create(words) {
   for (let word of words) {
      let currentDiv = document.createElement("div");
      let currentP = document.createElement("p");
      currentP.textContent = word;
      currentP.style.display = "none";
      currentDiv.appendChild(currentP);

      let divContent = document.getElementById("content");
      divContent.appendChild(currentDiv); 
      currentDiv.addEventListener("click", function () {currentP.style.display = "block"})
   }
}
