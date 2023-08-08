// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // const apiKey = "gSfvlucG2s8KfvgbigFbfhTYb7ml4uiX";
// // const apiKey = "RwHmrZNBFluZ16Aew2NWoMoDOmVLJkY7";
// // const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";
// // const apiKey = "cD6ZYHRdAJ75WK9SPyNN7EM1gM5LdGUn";
// // const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";


// const AccuWeather = ({ searchLocation }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchWeatherData = async () => {
//     if (searchLocation.trim() === "") {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const locationSearchResponse = await axios.get(
//         "http://dataservice.accuweather.com/locations/v1/cities/search",
//         {
//           params: {
//             apikey: apiKey,
//             q: searchLocation,
//           },
//         }
//       );

//       if (locationSearchResponse.data.length > 0) {
//         const locationKey = locationSearchResponse.data[0].Key;
//         const weatherResponse = await axios.get(
//           `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
//           {
//             params: {
//               apikey: apiKey,
//             },
//           }
//         );
//         console.log("Fetched Weather Data:", weatherResponse.data);
//         setWeatherData(weatherResponse.data);
//       } else {
//         console.error("No matching location found");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchWeatherData();
//   }, [searchLocation]);

//   return (
//     <div>
//       <h2>Current Weather Conditions</h2>
//       <div>
//         {/* ... (other JSX) */}
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : weatherData ? (
//           <div>
//             <p>
//               Current Temperature: {weatherData[0].Temperature.Imperial.Value}{" "}
//               °F
//             </p>
//             <p>Weather: {weatherData[0].WeatherText}</p>
//             {/* Display the weather icon based on the WeatherIcon code
//             {weatherData[0].WeatherIcon && (
//               <WeatherIcons icon={weatherIconMap[weatherData[0].WeatherIcon]} />
//             )} */}
//           </div>
//         ) : (
//           <p>Enter a location and click Search to get weather data.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccuWeather;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // AccuWeather API key
// const apiKey = "dmZnSAOST7J9aFSsGu6rfUt6MogTVDav";

// // Define the mapping between AccuWeather icon codes and descriptions
// const weatherIconDescriptions = {
//   1: "Sunny",
//   2: "Mostly Sunny",
//   3: "Partly Sunny",
//   4: "Intermittent Clouds",
//   5: "Hazy Sunshine",
//   6: "Mostly Cloudy",
//   7: "Cloudy",
//   8: "Dreary",
//   9: "Fog",
//   10: "Showers"


//   // ... add more mappings as needed
// };



// const AccuWeather = ({ searchLocation }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchWeatherData = async () => {
//     if (searchLocation.trim() === "") {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const locationSearchResponse = await axios.get(
//         "http://dataservice.accuweather.com/locations/v1/cities/search",
//         {
//           params: {
//             apikey: apiKey,
//             q: searchLocation,
//           },
//         }
//       );

//       if (locationSearchResponse.data.length > 0) {
//         const locationKey = locationSearchResponse.data[0].Key;
//         const weatherResponse = await axios.get(
//           `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`,
//           {
//             params: {
//               apikey: apiKey,
//             },
//           }
//         );

//         setWeatherData(weatherResponse.data);
//       } else {
//         console.error("No matching location found");
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }

//     setIsLoading(false);
//   };

//   useEffect(() => {
//     fetchWeatherData();
//   }, [searchLocation]);

//   return (
//     <div>
//       <h2>Current Park Conditions</h2>
//       <div>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : weatherData ? (
//           <div>
//             <p>
//               Current Temperature: {weatherData[0].Temperature.Imperial.Value}{" "}
//               °F
//             </p>
//             <p>
//               Weather: {weatherIconDescriptions[weatherData[0].WeatherIcon]}
//             </p>
//           </div>
//         ) : (
//           <p>Enter a location and click Search to get weather data.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccuWeather;
