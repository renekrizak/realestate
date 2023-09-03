import React from "react";
import "../style/compStyles/AboutUs.scss";
import Blog3 from "../assets/homeBlogs/Blog3.jpg";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-hero">
        <img src={Blog3} alt="About Us hero" />
        <div className="about-us-overlay">
          <h2>WHO ARE WE</h2>
          <h3>Talent driving innovation in real estate</h3>
        </div>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to Rezilla, where your real estate dreams come to life. With a
          legacy spanning 10 years in the industry, we&apos;ve established
          ourselves as more than just a real estate agency – we&apos;re your
          trusted partner and advisor on your property journey. Our mission is
          simple: to help you find the perfect home or investment property that
          aligns with your unique goals and aspirations. Whether you&apos;re a
          first-time homebuyer looking to start a new chapter, a seasoned
          investor seeking the next opportunity, or a seller ready to move on to
          the next adventure, we have the expertise and dedication to make it
          happen. At Rezilla, we&apos;ve assembled a dynamic team of real estate
          professionals who are not only passionate about what they do but also
          deeply rooted in the communities we serve. We believe that real estate
          isn&apos;t just about properties; it&apos;s about people and their
          stories. We take the time to understand your needs, preferences, and
          long-term objectives, ensuring that each transaction is tailored to
          your specific requirements. Our commitment to excellence extends
          beyond the standard real estate experience. We pride ourselves on our
          integrity, transparency, and unwavering dedication to client
          satisfaction. We understand that buying or selling a property can be a
          significant life event, and we&apos;re here to provide the support and
          guidance you need, every step of the way. When you choose Rezilla,
          you&apos;re choosing a partner who values your trust and will work
          tirelessly to exceed your expectations. Join us on this exciting
          journey through the world of real estate, where your dreams become a
          reality. Lets embark on this adventure together, and together,
          we&apos;ll unlock the potential of the real estate market for you.
        </p>
      </div>
      <div className="about-us-numbers">
        <div className="about-us-data">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
          </svg>
          <h2>Happy customers</h2>
          <h3>70k+</h3>
        </div>
        <div className="about-us-data">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          <h2>Properties sold</h2>
          <h3>22000</h3>
        </div>
        <div className="about-us-data">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
          <h2>Years in the business</h2>
          <h3>10</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
