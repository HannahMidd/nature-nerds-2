import React, { useState, useEffect } from "react";
import axios from "axios";

// const apiKey = "RwHmrZNBFluZ16Aew2NWoMoDOmVLJkY7";
const apiKey = "gSfvlucG2s8KfvgbigFbfhTYb7ml4uiX";

const AccuWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchLocation.trim() === "") {
      return;
    }

    setIsLoading(true);

    try {
      const locationSearchResponse = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${searchLocation}`
      );
      if (locationSearchResponse.ok) {
        const locationSearchData = await locationSearchResponse.json();
        if (locationSearchData.length > 0) {
          const locationKey = locationSearchData[0].Key;
          const weatherResponse = await fetch(
            `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
          );
          if (weatherResponse.ok) {
            const weatherData = await weatherResponse.json();
            console.log(weatherData); // Log the weather response data

            setWeatherData(weatherData);
          } else {
            console.error(
              "Error fetching weather data:",
              weatherResponse.statusText
            );
          }
        } else {
          console.error("No matching location found");
        }
      } else {
        console.error(
          "Error fetching location data:",
          locationSearchResponse.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h2>Current Weather Conditions</h2>
      <div>
        <input
          type="text"
          placeholder="Enter location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData[0].Temperature.Imperial.Value} °F</p>
          <p>Weather Text: {weatherData[0].WeatherText}</p>
        </div>
      ) : (
        <p>Enter a location and click Search to get weather data.</p>
      )}
    </div>
  );
};

export default AccuWeather;
