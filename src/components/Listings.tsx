import React, { useState } from "react";
import "../style/compStyles/listings.scss";

import listings1 from "../assets/listings/listings1.jpg";
import listings2 from "../assets/listings/listings2.jpg";
import listings3 from "../assets/listings/listings3.jpg";

const Listings: React.FC = () => {
  const [propertyOption, setPropertyOption] = useState("All");
  const handleOptionClick = (option: string) => {
    setPropertyOption(option);
  };
  interface Property {
    id: number;
    image: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    price: string;
    rent: string;
    description: string;
  }

  const properties: Property[] = [
    {
      id: 1,
      image: listings1,
      address: "9300 F ST OAKLAND CA 946033-1222 USA",
      bedrooms: 8,
      bathrooms: 6,
      price: "1,299,500.00",
      rent: "4,800",
      description: "Exquisite villa: 8 beds, 6 baths, infinity pool",
    },
    {
      id: 2,
      image: listings2,
      address: "9300 F ST OAKLAND CA 946033-1222 USA",
      bedrooms: 5,
      bathrooms: 3,
      price: "999,999.00",
      rent: "3,215",
      description: "Secluded paradise: 5 beds, private beach access.",
    },
    {
      id: 3,
      image: listings3,
      address: "9300 F ST OAKLAND CA 946033-1222 USA",
      bedrooms: 7,
      bathrooms: 3,
      price: "540,000.00",
      rent: "5,400",
      description: "Elegant 7-bed villa, Mediterranean charm.",
    },
  ];

  return (
    <section className="listings-section">
      <div className="listings-container">
        <div className="listings-title">
          <h2>CHECKOUT OUR NEW</h2>
        </div>
        <div className="listings-latest-text">
          <h1>Latest Listed Properties</h1>
          <div className="listing-latest-buttons">
            <button
              onClick={() => handleOptionClick("All")}
              className={`${
                propertyOption === "All" ? "property-selection-active" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleOptionClick("Rent")}
              className={`${
                propertyOption === "Rent" ? "property-selection-active" : ""
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => handleOptionClick("Sale")}
              className={`${
                propertyOption === "Sale" ? "property-selection-active" : ""
              }`}
            >
              Sale
            </button>
          </div>
        </div>
        <div className="listings-text">
          <h3>
            Discover diverse, recently listed real estate options to find your
            perfect home.
          </h3>
        </div>
        <div className="listings-cards">
          {properties.map((property) => (
            <div className="property-card" key={property.id}>
              <div className="property-card-image">
                <img src={property.image} alt={property.description} />
              </div>
              <div className="property-card-info">
                <h1>
                  ${" "}
                  {propertyOption === "All" || propertyOption === "Sale"
                    ? property.price
                    : property.rent}
                </h1>
                <h2>{property.description}</h2>
                <h3>{property.address}</h3>
                <div className="property-baths-beds">
                  <div className="property-bedrooms">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                    >
                      <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                    </svg>
                    {property.bedrooms} bedrooms
                  </div>
                  <div className="property-bathrooms">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                    </svg>
                    {property.bathrooms} bathrooms
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;
