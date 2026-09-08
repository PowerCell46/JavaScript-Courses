function deleteByEmail() {
    let inputEmail = document.querySelector("input").value;
    let boxElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let emailsArray = Array.from(boxElements);
    let flag = false;

    for (const email of emailsArray) {
        if (email.textContent === inputEmail) {
            email.parentNode.remove();
            flag = true;
        }
    }
    if (flag) {
        let resultField = document.getElementById("result");
        resultField.textContent = "Deleted"
    } else {
        let resultField = document.getElementById("result");
        resultField.textContent = "Not found."
    }
}
