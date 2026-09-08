function validate() {
    let inputedEmailField = document.getElementById("email");
    inputedEmailField.addEventListener("change", () => {
        let email = inputedEmailField.value;
        let emailRegex = /^([a-z]+\@[a-z]+\.[a-z]+)$/g;
        if(email.match(emailRegex)) {
            inputedEmailField.value = "";
            inputedEmailField.classList.remove("error");
        } else {
            inputedEmailField.classList.add("error");
        }
    })
}
