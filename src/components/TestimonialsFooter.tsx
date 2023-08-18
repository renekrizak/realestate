import React, { useState } from "react";
import "../style/compStyles/TestimonialsFooter.scss";

import cust1 from "../assets/customersCard/cust1.jpg";
import cust2 from "../assets/customersCard/cust2.jpg";
import cust3 from "../assets/customersCard/cust3.jpg";
import { Link } from "react-router-dom";
import { navLinks } from "./navbar";

export const Testimonials: React.FC = () => {
  interface Testimonial {
    review: string;
    img: string;
    name: string;
  }
  const Testimonials: Testimonial[] = [
    {
      review:
        "I Highly recommend Jodi J. She was Attentive to our needs and worked tirelessly to find us the perfect home. We couldnt be happier with our new place",
      img: cust1,
      name: "Milan M.",
    },
    {
      review:
        "With unwavering dedication, Jodi J. found our ideal home. Her attentive approach and expertise made the journey exceptional.",
      img: cust2,
      name: "Sandra S.",
    },
    {
      review:
        "Jodi J.'s tireless effort and keen attention led us to our dream home. Highly recommended for a seamless experience.",
      img: cust3,
      name: "Andrea C.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviousTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Testimonials.length - 1 : prevIndex - 1
    );
  };
  const goToNextTestimony = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const helperArr = [0, 1, 2];
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-text">
          <h2>TESTIMONIALS</h2>
          <h1>Look what our customers say</h1>
          <h3>
            Discover the experiences of those who found their dream homes with
            us. Our customers&apos; stories speak volumes.
          </h3>
          <div className="testimonials-buttons">
            <button onClick={goToPreviousTestimony}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button onClick={goToNextTestimony}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="testimonials-card-container">
          <div className="testimonials-card">
            <div className="testimonials-card-inner-container">
              <div className="testimonials-card-content">
                <div className="card-testimony">
                  <h2>{Testimonials[currentIndex].review}</h2>
                </div>
                <div className="card-reviewer">
                  <img
                    src={Testimonials[currentIndex].img}
                    alt={Testimonials[currentIndex].name}
                  />
                  <h3>{Testimonials[currentIndex].name}</h3>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 576 512"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="testimonials-card-current">
              <ul>
                {helperArr.map((helper) => (
                  <li
                    key={helper}
                    className={`${currentIndex === helper ? "current" : ""}`}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-contact">
          <h2>Rezilla</h2>
          <h3>2728 Hickory Street, Lake City, UT 84104</h3>

          <div className="footer-contact-email-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <h3>+1-208-214-2298</h3>
          </div>
          <div className="footer-contact-email-phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
            <h3>support@rezilla.com</h3>
          </div>
        </div>
        <div className="footer-quick-links">
          <h2>Quick Links</h2>
          {navLinks.map((link, index) => (
            <Link to={link.link} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="footer-discovery">
          <h2>Discovery</h2>
          <h3>Canada</h3>
          <h3>United States</h3>
          <h3>France</h3>
          <h3>Germany</h3>
          <h3>Switzerland</h3>
        </div>
        <div className="footer-terms">
          <h2>Legal</h2>
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
        </div>
      </div>
    </footer>
  );
};
