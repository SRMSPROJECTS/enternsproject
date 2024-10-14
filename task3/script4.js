document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const weatherResultDiv = document.getElementById('weather-result');
    
    // Check if the input is empty
    if (city.trim() === "") {
        weatherResultDiv.innerHTML = "Please enter a city name.";
    } else {
        // Hardcoded placeholder weather message
        const weatherMessage = `The weather in ${city} is sunny and 25°C.`;
        
        // Display the result in the weather-result div
        weatherResultDiv.innerHTML = weatherMessage;
    }
    
    // Trigger the fade-in animation for the weather result
    weatherResultDiv.style.opacity = 0;
    setTimeout(() => {
        weatherResultDiv.style.opacity = 1;
    }, 10);
});
