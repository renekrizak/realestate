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
      prevIndex === images.length - 1 ? 0 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="slideshow">
        <div className="slideshow-image">
          <button onClick={goToPreviousSlide}>Dozadu</button>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          <button onClick={goToNextSlide}>Dopredu</button>
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
