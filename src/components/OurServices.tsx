import React from "react";
import "../style/compStyles/OurServices.scss";

import BedIcon from "../assets/services/BedIcon.png";
import HouseIcon from "../assets/services/HouseIcon.png";
import SearchIcon from "../assets/services/SearchIcon.png";

const OurServices: React.FC = () => {
  interface ServiceList {
    icon: string;
    title: string;
    text: string;
    alt: string;
  }

  const ServicesList: ServiceList[] = [
    {
      icon: SearchIcon,
      title: "Buy a New Home",
      text: "Discover Your Haven. Buy a New Home Today. Embrace comfort and style in your perfect new residence.",
      alt: "Search for a house",
    },
    {
      icon: HouseIcon,
      title: "Sell a House",
      text: "Unlock Your Next Chapter. Sell Your House With Confidence. Trust us to showcase your property to its fullest potential.",
      alt: "Sell a house",
    },
    {
      icon: BedIcon,
      title: "Rent a House",
      text: "Find Your Temporary Abode. Rent a House Easily. Let us help you locate a rental space that suits your lifestyle.",
      alt: "Rent a house",
    },
  ];
  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our Services</h2>
        <h1>Real Estate company you can trust.</h1>
        <div className="services-cards">
          {ServicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-image">
                <div className="service-card-image-container">
                  <img src={service.icon} alt={service.alt} />
                </div>
              </div>
              <div className="service-card-text">
                <h1>{service.title}</h1>
                <h3>{service.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
