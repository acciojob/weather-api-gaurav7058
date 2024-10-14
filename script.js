// Replace with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY_HERE'; // Get this from https://openweathermap.org/api

document.getElementById('getWeather').addEventListener('click', getWeatherData);

function getWeatherData() {
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Make a request to the OpenWeatherMap API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Extract weather information
            const weatherDescription = data.weather[0].description;
            
            // Display weather in the div with id 'weatherData'
            document.getElementById('weatherData').textContent = `Current weather in ${city}: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
