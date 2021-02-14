// Function to convert Fahrenheit to Celsius
function tempConversionCelsius(temperatureFahrenheit) {

    temperatureCelsius = (temperatureFahrenheit - 32) / (9 / 5);
    console.log(temperatureCelsius + "°C");
}

tempConversionCelsius();

// Function to convert Celsius to Fahrenheit
function tempConversionFahrenheit(temperatureCelsius) {

    temperatureFahrenheit = (temperatureCelsius * (9 / 5)) + 32;
    console.log(temperatureFahrenheit + "°F");
}

tempConversionFahrenheit();
