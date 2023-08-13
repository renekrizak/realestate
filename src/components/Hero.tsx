import React from "react";
import "../style/compStyles/hero.scss";

import ImageSlideshow from "./ImageSlideshow";

const Hero = () => {
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
            </div>
            <div className="search-property"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
