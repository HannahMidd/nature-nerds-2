
// import React, { useState } from "react";
// import AccuWeather from "./AccuWeather";
// import ParkSearch from "./ParkSearch";

// const ParentComponent = () => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();

//     fetchParkSearchData(searchInput);
//     fetchAccuWeatherData(searchInput);
//   };

//   const handleClearClick = () => {
//     setSearchInput(""); // Clear the search input
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchInput}
//           onChange={handleSearchInputChange}
//           placeholder="Search..."
//         />
//         <button type="submit">Search</button>
//         <button onClick={handleClearClick}>Clear</button>{" "}
//         {/* Use handleClearClick */}
//       </form>

//       <ParkSearch searchTerm={searchInput} />
//       <AccuWeather searchLocation={searchInput} />
//     </div>
//   );
// };

// export default ParentComponent;


import React, { useState } from "react";
import AccuWeather from "./AccuWeather";
import ParkSearch from "./ParkSearch";

const ParentComponent = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    fetchParkSearchData(searchInput);
    fetchAccuWeatherData(searchInput);
  };

  const handleClearClick = () => {
    setSearchInput(""); // Clear the search input
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Park Input..."
        />
        {/* <button type="submit">Search</button> */}
        <button onClick={handleClearClick}>Clear</button>{" "}
        {/* Use handleClearClick */}
        {/* <button type="submit">Search</button>{" "} */}
        {/* Move the search button here */}
      </form>

      <ParkSearch searchTerm={searchInput} />
      <AccuWeather searchLocation={searchInput} />
    </div>
  );
};

export default ParentComponent;
