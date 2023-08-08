import React, { useState } from "react";
import AccuWeather from "./AccuWeather"; // Assuming the path is correct
import ParkSearch from "./ParkSearch"; // Assuming the path is correct

const ParentComponent = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      {/* Render the search input */}
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
      />

      {/* Render Component A (AccuWeather) */}
      <AccuWeather searchLocation={searchInput} />

      {/* Render Component B (ParkSearch) */}
      <ParkSearch searchTerm={searchInput} />
    </div>
  );
};

export default ParentComponent;
