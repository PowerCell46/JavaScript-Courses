function validate() {
    let emailField = document.getElementById("email");
    emailField.addEventListener("change", emailValidation);
    
    function emailValidation() {
        let enteredEmail = emailField.value
        const regex = /([a-z]+\@[a-z]+\.[a-z]+)/g;
        if (regex.test(enteredEmail)) {
            emailField.classList.remove("error");
        } else {
            emailField.classList.add("error");
        }
    }
}
