import React, { useState } from "react";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "5b8b6375a78cc74beb5d30d67cfc40ab";
  const baseApiUrl = "https://api.openweathermap.org/data/2.5/forecast";

  const getWeather = (city) => {
    const apiUrl = `${baseApiUrl}?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        // addToSearchHistory(city);
      })
      .catch((error) => {
        console.log(error);
        setWeatherData(null);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    if (city) {
      getWeather(city);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather Data for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* Add other weather data fields as needed */}
        </div>
      )}
      {!weatherData && <p>No weather data available.</p>}
    </div>
  );
};

export default WeatherDisplay;
