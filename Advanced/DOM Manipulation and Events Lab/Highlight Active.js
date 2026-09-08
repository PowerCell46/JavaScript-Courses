function focused() {
    let inputFields = document.querySelectorAll("input");
    let divs = document.querySelectorAll("div > div");
    inputFields[0].addEventListener("focus", function field1() {divs[0].classList.add("focused"); inputFields[0].addEventListener("blur", function field1Remove() {divs[0].classList.remove("focused")})});
    inputFields[1].addEventListener("focus", function field2() {divs[1].classList.add("focused"); inputFields[1].addEventListener("blur", function field1Remove() {divs[1].classList.remove("focused")})});
    inputFields[2].addEventListener("focus", function field3() {divs[2].classList.add("focused"); inputFields[2].addEventListener("blur", function field1Remove() {divs[2].classList.remove("focused")})});
    inputFields[3].addEventListener("focus", function field4() {divs[3].classList.add("focused"); inputFields[3].addEventListener("blur", function field1Remove() {divs[3].classList.remove("focused")})});
    
}
