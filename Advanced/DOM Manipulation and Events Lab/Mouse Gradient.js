function attachGradientEvents() {
    let gradientElement = document.getElementById("gradient");
    gradientElement.addEventListener("mousemove", gradientMove);
    gradientElement.addEventListener("mouseout", gradientOut);

    function gradientMove(event) {
        let currentPercentage = event.offsetX / (event.target.clientWidth - 1);
        currentPercentage = Math.trunc(currentPercentage * 100);
        document.getElementById("result").textContent = `${currentPercentage}%`;
    }

    function gradientOut(event) {
        document.getElementById("result").textContent = "";
    }
}
