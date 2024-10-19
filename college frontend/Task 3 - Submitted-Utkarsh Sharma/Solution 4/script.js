const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');
const weatherResult = document.getElementById('weather-result');

// Hardcoded weather data
const weatherData = {
    "delhi": "sunny",
    "Delhi": "cloudy",
    "bareilly": "sunny",
    "Houston": "humid",
    "Phoenix": "hot",
};

// Function to display weather
function displayWeather() {
    const city = cityInput.value.trim();
    if (city && weatherData[city]) {
        weatherResult.textContent = `Weather for ${city} is ${weatherData[city]}.`;
    } else {
        weatherResult.textContent = `Weather data for "${city}" is not available.`;
    }
}

// Add event listener to button
getWeatherButton.addEventListener('click', displayWeather);
