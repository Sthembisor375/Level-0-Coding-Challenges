function fahrenheitToCelsius(temperatureFahrenheit) {

    var temperatureCelsius = (temperatureFahrenheit - 32) / (9 / 5);
    console.log(temperatureCelsius + "°C");
}

fahrenheitToCelsius(50);

function celciusToFahrenheit(temperatureCelsius) {

    var temperatureFahrenheit = (temperatureCelsius * (9 / 5)) + 32;
    console.log(temperatureFahrenheit + "°F");
}

celciusToFahrenheit(10);
