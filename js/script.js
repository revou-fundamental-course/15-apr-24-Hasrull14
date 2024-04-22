const celciusInput = document.getElementById('celcius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');
const convertButton = document.getElementById('button-convert');
const resetButton = document.getElementById('button-reset');
const reverseButton = document.getElementById('button-reverse');
const calculationResult = document.getElementById('calculation-result');

function convertToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

function convertTemperature() {
    const celcius = parseFloat(celciusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);


    if (!isNaN(celcius)) {
        const result = convertToFahrenheit(celcius);
        fahrenheitInput.value = result.toFixed(2);
        // calculationResult.value = `${celcius} &deg;C = ${result.toFixed(2)} &deg;F`;
        calculationResult.value = `${result.toFixed(2)} °F = (${celcius} °C * 9/5) + 32`;
       
    } else if (!isNaN(fahrenheit)) {
        const result = convertToCelcius(fahrenheit);
        celciusInput.value = result.toFixed(2);
        //calculationResult.value = `${fahrenheit} &deg;F = ${result.toFixed(2)} &deg;C`;
        calculationResult.value = `${result.toFixed(2)} °C = (${fahrenheit} °F - 32) * 5/9`;
    }else{
        alert("Silahkan masukkan angka");
        return resetInputs();
    }
}

function resetInputs() {
    celciusInput.value = '';
    fahrenheitInput.value = '';
    calculationResult.value = '';
}

function reverseConversion() {
    const temp = celciusInput.value;
    celciusInput.value = fahrenheitInput.value;
    fahrenheitInput.value = temp;
    convertTemperature();
}

convertButton.addEventListener('click', convertTemperature);
resetButton.addEventListener('click', resetInputs);
reverseButton.addEventListener('click', reverseConversion);