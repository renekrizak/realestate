import React from "react";
import "../style/compStyles/hero.scss";

import ImageSlideshow from "./ImageSlideshow";
import PropertySearch from "./PropertySearch";
import cust1 from "../assets/customersCard/cust1.jpg";
import cust2 from "../assets/customersCard/cust2.jpg";
import cust3 from "../assets/customersCard/cust3.jpg";
import cust4 from "../assets/customersCard/cust4.jpg";
import cust5 from "../assets/customersCard/cust5.jpg";
import listingsCardImg from "../assets/heroSlideshow/hero-slide3.jpg";
const Hero = () => {
  const custImages = [
    {
      img: cust1,
      alt: "Featured customer 1",
    },
    {
      img: cust2,
      alt: "Featured customer 2",
    },
    {
      img: cust3,
      alt: "Featured customer 3",
    },
    {
      img: cust4,
      alt: "Featured customer 4",
    },
    {
      img: cust5,
      alt: "Featured customer 5",
    },
  ];
  return (
    <section className="hero">
      <div className="background-gradient">
        <div className="hero-layout">
          <div className="hero-content">
            <div className="image-slideshow-and-text">
              <h2>REAL ESTATE</h2>
              <h1>Find a perfect home you love..!</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit dignissimos excepturi omnis quia nulla? Asperiores
                quos nobis, officia enim dicta recusandae quibusdam placeat non
                dolor impedit quis nam eum labore!
              </h3>
              <div className="image-slideshow-container">
                <ImageSlideshow />
              </div>
              <div className="happy-customers-wrapper">
                <div className="happy-customers">
                  <div className="happy-customers-list">
                    <ul>
                      {custImages.map((custImage) => (
                        <li key={custImage.alt}>
                          <img alt={custImage.alt} src={custImage.img} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="happy-customers-text">
                    <h3>72k+ Happy Customers</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-property">
              <PropertySearch />
              <div className="listings-card-wrapper">
                <div className="listings-card">
                  <div className="listings-card-featured-property">
                    <img src={listingsCardImg} alt="Featured property" />
                  </div>
                  <div className="listings-card-text">
                    <h3>200+ new listings everyday!</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
