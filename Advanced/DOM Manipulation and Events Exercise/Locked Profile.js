function lockedProfile() {
    const buttons = document.querySelectorAll("button");
    for(let button of buttons) {
        button.addEventListener("click", (e) => {
            let parentNode = button.parentNode;
            const lockedRadio = parentNode.querySelector('input[value="lock"]');
            const unlockedRadio = parentNode.querySelector('input[value="unlock"]');
            if (unlockedRadio.checked) {
                let hiddenDiv = parentNode.querySelector("div");

                if (button.textContent === "Show more") {
                    hiddenDiv.style.display = "block";
                    button.textContent = "Hide it";  
                    // console.log("Unclocked successfully");

                } else {
                    hiddenDiv.style.display = "none";
                    button.textContent = "Show more";
                    // console.log("Locked successfully");
                }
                
            } else {
                // console.log("LOCKED PROFILE!");
            }
        })
    }
    
}
