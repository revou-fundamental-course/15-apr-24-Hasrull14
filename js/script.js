const celciusInput = document.getElementById('celcius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');
const convertButton = document.getElementById('button-convert');
const resetButton = document.getElementById('button-reset');
const calculationResult = document.getElementById('calculation-result');

const celciusSection = document.querySelector('.section-celcius');
const fahrenheitSection = document.querySelector('.section-farenheit');

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
        calculationResult.value = `(${celcius} °C * 9/5) + 32 = ${result.toFixed(2)} °F`;
       
    } else if (!isNaN(fahrenheit)) {
        const result = convertToCelcius(fahrenheit);
        celciusInput.value = result.toFixed(2);
        calculationResult.value = `(${fahrenheit} °F - 32) * 5/9 = ${result.toFixed(2)} °C`;
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



// Fungsi untuk membalikkan posisi section
function reverseSections() {
    const parent = celciusSection.parentNode;
    if (parent.firstElementChild === celciusSection) {
        parent.insertBefore(fahrenheitSection, celciusSection);
    } else {
        parent.insertBefore(celciusSection, fahrenheitSection);
    }
}
document.getElementById('button-reverse').addEventListener('click', reverseSections);

convertButton.addEventListener('click', convertTemperature);
resetButton.addEventListener('click', resetInputs);
