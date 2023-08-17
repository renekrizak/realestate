import React from "react";

import "../style/compStyles/TownAreas.scss";

import Houston from "../assets/townAreas/Houston.jpg";
import NewYork from "../assets/townAreas/NewYork.jpg";
import Philadelphia from "../assets/townAreas/Philadelphia.jpg";
import SanDiego from "../assets/townAreas/SanDiego.jpg";
import SanFrancisco from "../assets/townAreas/SanFrancisco.jpg";

const TownAreas: React.FC = () => {
  interface NeighborhoodProperty {
    image: string;
    alt: string;
    location: string;
    PropertyCount: number;
  }

  const NeighborhoodPropertiesThree: NeighborhoodProperty[] = [
    {
      image: NewYork,
      alt: "New York City, New York",
      location: "New York City, NY",
      PropertyCount: 215,
    },
    {
      image: Houston,
      alt: "Houston, Texas",
      location: "Houston, TX",
      PropertyCount: 361,
    },
    {
      image: SanDiego,
      alt: "San Diego, Californa",
      location: "San Diego, CA",
      PropertyCount: 178,
    },
  ];
  const NeighborhoodPropertiesTwo: NeighborhoodProperty[] = [
    {
      image: Philadelphia,
      alt: "Philadelphia, Pennsylvania",
      location: "Philadelphia, PA",
      PropertyCount: 183,
    },
    {
      image: SanFrancisco,
      alt: "San Francisco, California",
      location: "San Francisco, CA",
      PropertyCount: 659,
    },
  ];

  return (
    <section className="town-areas-section">
      <div className="town-areas-container">
        <div className="town-areas-text">
          <h2>AREAS ACROSS THE TOWN</h2>
          <h1>Neighborhood properties</h1>
        </div>
        <div className="town-areas-images">
          <div className="town-areas-images-three">
            {NeighborhoodPropertiesThree.map((property, index) => (
              <div className="town-area-card-three" key={index}>
                <img src={property.image} alt={property.alt} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{property.PropertyCount}</h3>
                    <h3>{property.location}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="town-areas-images-two">
            {NeighborhoodPropertiesTwo.map((property, index) => (
              <div className="town-area-card-two" key={index}>
                <img src={property.image} alt={property.alt} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{property.PropertyCount}</h3>
                    <h3>{property.location}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TownAreas;
