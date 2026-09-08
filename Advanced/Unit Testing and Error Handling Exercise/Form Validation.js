function validate() {

    let companyChecker = document.getElementById("company");
    companyChecker.addEventListener("change", () => {
        if (!companyChecker.checked) {
            let companyInfo = document.getElementById("companyInfo");
            companyInfo.style.display = "none";
        } else {
            let companyInfo = document.getElementById("companyInfo");
            companyInfo.style.display = "block";
        }
        })

    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let usernameRegex = /^([A-Z|a-z|0-9]{3,20})$/;
        let correctUsername = false;
        if (username.match(usernameRegex)) {
            username = document.getElementById("username");
            username.style.borderColor = "";
            correctUsername = true;
        } else {
            username = document.getElementById("username");
            username.style.borderColor = "red";
            correctUsername = false;
        }

        let email = document.getElementById("email").value;
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;
        if (email.match(emailRegex)) {
            email = document.getElementById("email");
            email.style.borderColor = "";
            correctEmail = true;
        } else {
            email = document.getElementById("email");
            email.style.borderColor = "red";
            correctUsername = false;
        }

        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;
        let passwordRegex = /^[\w]{5,15}$/;
        let correctPassword = false;

        if (password.match(passwordRegex) && password === confirmPassword) {
            password = document.getElementById("password");
            password.style.borderColor = "";
            confirmPassword = document.getElementById("confirm-password");
            confirmPassword.style.borderColor = "";
            correctPassword = true;
        } else {
        password = document.getElementById("password");
        password.style.borderColor = "red";
        confirmPassword = document.getElementById("confirm-password");
        confirmPassword.style.borderColor = "red";
        correctPassword = false;
        }

        let correctCompanyNumber = true;
        if (companyChecker.checked) {
           let companyNumber = Number(document.getElementById("companyNumber").value);
           if (companyNumber >= 1000 && companyNumber <= 9999) {
            companyNumber = document.getElementById("companyNumber");
            companyNumber.style.borderColor = "";
            correctCompanyNumber = true;
           } else {
            companyNumber = document.getElementById("companyNumber");
            companyNumber.style.borderColor = "red";
            correctCompanyNumber = false;
           }
        }

        if (correctUsername && correctEmail && correctPassword && correctCompanyNumber) {
                let validDiv = document.getElementById("valid");
                validDiv.style.display = "block";    
        } else {
                let validDiv = document.getElementById("valid");
                validDiv.style.display = "none";  
        }
    })
    }
