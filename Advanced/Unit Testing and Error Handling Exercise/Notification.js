function notify(message) {
  let workingDiv = document.getElementById("notification");
  workingDiv.style.display = "block";
  workingDiv.textContent = message;
  workingDiv.addEventListener("click", () => {
    workingDiv.style.display = "none";
  })
}
