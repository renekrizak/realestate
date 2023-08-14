import React, { useState } from "react";

import "../style/compStyles/PropertySearch.scss";

const PropertySearch: React.FC = () => {
  const [currentOption, setCurrentOption] = useState("For Sale");

  const handleOptionClick = (option: string) => {
    setCurrentOption(option);
  };
  return (
    <div className="property-search-container">
      <div className="property-search-content">
        <div className="sale-rent-options">
          <div
            className={`${
              currentOption === "For Sale"
                ? "for-sale property-search-selected"
                : "for-sale"
            }`}
            onClick={() => handleOptionClick("For Sale")}
          >
            <h2>For Sale</h2>
          </div>
          <div
            className={`${
              currentOption === "For Rent"
                ? "for-rent property-search-selected"
                : "for-rent"
            }`}
            onClick={() => handleOptionClick("For Rent")}
          >
            <h2>For Rent</h2>
          </div>
        </div>
        <div className="sale-rent-inputs">
          <form>
            <input
              type="text"
              name="location"
              placeholder="New York, San Francisco, etc"
            />

            <select>
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Apartment">Apartment</option>
              <option value="Cabin">Cabin</option>
            </select>

            <select>
              <option value="">Select Rooms</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </form>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
