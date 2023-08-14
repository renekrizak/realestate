import React, { useState } from "react";

import "../style/compStyles/ImageSlideshow.scss";
import img1 from "../assets/heroSlideshow/hero-slide1.jpg";
import img2 from "../assets/heroSlideshow/hero-slide2.jpg";
import img3 from "../assets/heroSlideshow/hero-slide3.jpg";
import img4 from "../assets/heroSlideshow/hero-slide4.jpg";

const ImageSlideshow: React.FC = () => {
  const images = [
    {
      src: img1,
      alt: "Slideshow featured property 1",
    },
    {
      src: img2,
      alt: "Slideshow featured property 2",
    },
    {
      src: img3,
      alt: "Slideshow featured property 3",
    },
    {
      src: img4,
      alt: "Slideshow featured property 4",
    },
  ];
  const helperArr = [0, 1, 2, 3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="slideshow">
        <div className="slideshow-image">
          <button onClick={goToPreviousSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
          <div className="slideshow-image-inner">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
          </div>

          <button onClick={goToNextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
        </div>

        <div className="slideshow-current-image">
          <ul>
            {helperArr.map((helper) => (
              <li
                key={helper}
                className={`${currentIndex === helper ? "current-image" : ""}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageSlideshow;
