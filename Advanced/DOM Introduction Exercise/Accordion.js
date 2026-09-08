function toggle() {
    let text = document.getElementById("extra");
    if (text.style.display === "none") {
        text.style.display = "block";
        let textValue = document.getElementsByClassName("button")[0];
        textValue.textContent = "Less";    
    } else {
    text.style.display = "none";
    let textValue = document.getElementsByClassName("button")[0];
    textValue.textContent = "More";
}
}
