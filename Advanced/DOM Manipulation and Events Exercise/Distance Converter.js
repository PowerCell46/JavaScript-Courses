function attachEventsListeners() {
    let convertButton = document.getElementById("convert");
    convertButton.addEventListener("click", function convert() {
        let inputTypeOfData = document.getElementById("inputUnits").value;
        let inputValue = Number((document.getElementById("inputDistance")).value);
        let convertToMetersObj = {
            "km": (a) => a * 1000,
            "m": (s) => s * 1,
            "cm": (b) => b * 0.01,
            "mm": (c) => c * 0.001,
            "mi": (d) => d * 1609.34,
            "yrd": (e) => e * 0.9144,
            "ft": (f) => f * 0.3048,
            "in": (g) => g * 0.0254,
        }
        let inputValueInMeters = convertToMetersObj[inputTypeOfData](inputValue);
        // alert(inputValueInMeters);
        let outputTypeOfData = document.getElementById("outputUnits").value;
        // alert(outputTypeOfData)
        let finalConversionObj = {
            "km": (a) => a / 1000,
            "m": (s) => s / 1,
            "cm": (b) => b / 0.01,
            "mm": (c) => c / 0.001,
            "mi": (d) => d / 1609.34,
            "yrd": (e) => e / 0.9144,
            "ft": (f) => f / 0.3048,
            "in": (g) => g / 0.0254,
        }
        let resultFromTheConversion = finalConversionObj[outputTypeOfData](inputValueInMeters);
        let outputField = document.getElementById("outputDistance");
        outputField.value = resultFromTheConversion;
    })
}
