import React, { useState } from "react";
import "./SearchJob.css"; // Create this CSS file for styling if needed

const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    alert(`Searching for job: ${searchTerm}`);
  };

  return (
    <div className="search-job-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter job title"
      />
      <button onClick={handleSearch}>
        <i className="fas fa-search"> Search </i>
      </button>
    </div>
  );
};

export default SearchJob;
