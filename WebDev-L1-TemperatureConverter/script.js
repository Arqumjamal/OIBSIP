const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Convert temperature into Celsius
function toCelsius(value, unit) {
    if (unit === "C") {
        return value;
    } else if (unit === "F") {
        return (value - 32) * 5 / 9;
    } else {
        return value - 273.15;
    }
}

// Convert Celsius into the selected unit
function fromCelsius(value, unit) {
    if (unit === "C") {
        return value;
    } else if (unit === "F") {
        return (value * 9 / 5) + 32;
    } else {
        return value + 273.15;
    }
}

// Handle the Convert button
convertBtn.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    // Validate input
    if (temperatureInput.value.trim() === "" || isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    // Validate absolute zero
    const minimum = {
        C: -273.15,
        F: -459.67,
        K: 0
    };

    if (temperature < minimum[from]) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    // Perform conversion
    const celsius = toCelsius(temperature, from);
    const converted = fromCelsius(celsius, to);

    const unitNames = {
        C: "\u00B0C",
        F: "\u00B0F",
        K: "K"
    };

    result.textContent =
        `${temperature} ${unitNames[from]} = ${converted.toFixed(2)} ${unitNames[to]}`;
});
