import React from "react";

const SearchForm = ({ setInputValue, inputValue }) => {
  return (
    <div className="mb-10 p-4">
      <div className="max-w-md mx-auto flex">
        <input
          type="text"
          placeholder="Search by type & status..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border p-2 rounded-l focus:outline-none rounded-r-md"
        />
      </div>
    </div>
  );
};

export default SearchForm;
