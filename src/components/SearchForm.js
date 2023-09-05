import React from "react";

const SearchForm = ({ setInputValue, inputValue }) => {
  return (
    <div className="mb-10 p-4">
      <div className="max-w-md mx-auto flex">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full border p-2 rounded-l focus:outline-none rounded-r-md"
        />
        {/* <button
          // onClick={e => handleSearch(e.target.value)}
          className="bg-red-500 text-white px-8 py-2  rounded-l-md ml-10 focus:outline-none"
        >
          Search
        </button> */}
      </div>
    </div>
  );
};

export default SearchForm;
