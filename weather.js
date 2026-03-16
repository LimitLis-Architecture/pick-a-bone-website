// weather.js - Fetches local weather for Fenton without needing an API key
    async function fetchWeather() {
        try {
            // Coordinates for Fenton. Open-Meteo is completely free for frontend use.
            const url = 'https://api.open-meteo.com/v1/forecast?latitude=42.7978&longitude=-83.7049&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph';
            const response = await fetch(url);
            const data = await response.json();
    
            const temp = Math.round(data.current_weather.temperature);
            const wind = Math.round(data.current_weather.windspeed);
    
            const weatherDiv = document.getElementById('weather-widget');
            if (weatherDiv) {
                weatherDiv.innerHTML = `<span>🌤️ Fenton Weather: ${temp}°F | 💨 Wind: ${wind} mph</span>`;
            }
        } catch (error) {
            console.error("Weather fetch failed:", error);
        }
    }
    
    document.addEventListener('DOMContentLoaded', fetchWeather);
