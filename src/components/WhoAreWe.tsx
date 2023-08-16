import React from "react";
import "../style/compStyles/whoarewe.scss";

import verticalImg from "../assets/whoarewe/whoareweVertical.jpg";
import horizontalImg1 from "../assets/whoarewe/whoareweHorizontal1.jpg";
import horizontalImg2 from "../assets/whoarewe/whoareweHorizontal2.jpg";

const WhoAreWe: React.FC = () => {
  return (
    <section className="who-are-we">
      <div className="who-are-we-container">
        <div className="who-are-we-text">
          <h2>WHO ARE WE</h2>
          <h1>
            Assisting individuals in locating the appropriate real estate.
          </h1>
          <div className="who-are-we-card">
            <div className="who-are-we-card-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" />
              </svg>
            </div>
            <div className="who-are-we-card-text">
              <h2>Your Real Estate Partner</h2>
              <h3>
                Discover the perfect real estate for your needs with our expert
                assistance. We are dedicated to helping you find the ideal
                property that fits your lifestyle.
              </h3>
            </div>
          </div>
          <div className="who-are-we-card">
            <div className="who-are-we-card-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-112 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </div>
            <div className="who-are-we-card-text">
              <h2>Seamless Property Search</h2>
              <h3>
                Let us make your real estate search easy. With our tailored
                approach, locating the right property becomes a hassle-free
                experience. Your dream home is just a step away.
              </h3>
            </div>
          </div>
        </div>
        <div className="who-are-we-images">
          <div className="who-are-we-vertical">
            <img src={verticalImg} alt="Luxurious property vertical" />
          </div>
          <div className="who-are-we-horizontal">
            <div className="horizontal-first">
              <img src={horizontalImg1} alt="Property horizontal" />
            </div>
            <div className="horizontal-second">
              <img src={horizontalImg2} alt="Property horizontal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
