function solution() {
  let submitButton = document.getElementById("submitBTN");
  submitButton.addEventListener("click", function submitInfo() {
   
    let fullName = document.getElementById("fname");
    let email = document.getElementById("email");
    let phoneNumber = document.getElementById("phone");
    let address = document.getElementById("address");
    let postalCode = document.getElementById("code");
    let arrayOfInputValues = [fullName.value, email.value, phoneNumber.value, address.value, postalCode.value];
      
    if (arrayOfInputValues[0] != "" && arrayOfInputValues[1] != "") {
        let ulInfoPreview = document.getElementById('infoPreview');
        
        let fullNameLi = document.createElement('li');
        fullNameLi.textContent = "Full Name: " + arrayOfInputValues[0];

        let emailLi = document.createElement("li");
        emailLi.textContent = "Email: " + arrayOfInputValues[1];

        let phoneNumberLi = document.createElement("li");
        phoneNumberLi.textContent = "Phone Number: " + arrayOfInputValues[2];

        let addressLi = document.createElement("li");
        addressLi.textContent = "Address: " + arrayOfInputValues[3];

        let postalCodeLi = document.createElement("li");
        postalCodeLi.textContent = "Postal Code: " + arrayOfInputValues[4];

        ulInfoPreview.appendChild(fullNameLi);
        ulInfoPreview.appendChild(emailLi);
        ulInfoPreview.appendChild(phoneNumberLi);
        ulInfoPreview.appendChild(addressLi);
        ulInfoPreview.appendChild(postalCodeLi);
        fullName.value = "";
        email.value = "";
        phoneNumber.value = "";
        address.value = "";
        postalCode.value = "";
        submitButton.disabled = true;

        let editButton = document.getElementById("editBTN");
        let continueButton = document.getElementById("continueBTN");
        editButton.disabled = false;
        continueButton.disabled = false;

        editButton.addEventListener("click", function edutFunc() {
        fullName.value = arrayOfInputValues[0];
        email.value = arrayOfInputValues[1];
        phoneNumber.value = arrayOfInputValues[2];
        address.value = arrayOfInputValues[3];
        postalCode.value = arrayOfInputValues[4];
        ulInfoPreview.innerHTML = "";
        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;
        })

        continueButton.addEventListener("click", function continueFunc() {
          let mainDiv = document.getElementById("block");
          mainDiv.innerHTML = ""
          let goodbyeMessage = document.createElement("h3");
          goodbyeMessage.textContent = "Thank you for your reservation!";
          mainDiv.appendChild(goodbyeMessage);
        })
      };
  })
}
