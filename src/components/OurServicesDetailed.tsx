import React, { useState } from "react";
import "../style/compStyles/OurServicesDetailed.scss";
import BusinessMan2 from "../assets/ourTeam/BusinessMan2.jpg";
import BusinessWoman1 from "../assets/ourTeam/BusinessWoman1.jpg";
import BusinessWoman2 from "../assets/ourTeam/BusinessWoman2.jpg";
import { Link } from "react-router-dom";

import Blog2 from "../assets/homeBlogs/Blog2.jpg";

const OurServicesDetailed: React.FC = () => {
  return (
    <div className="services-detailed-section">
      <div className="services-detailed-content">
        <div className="services-that-we-offer">
          <img src={Blog2} alt="Services background" />
          <div className="overlay-services">
            <div className="overlay-services-content">
              <h2>Interested in buying a house?</h2>
              <Link to="/listings">Check out our listings!</Link>
            </div>
          </div>
        </div>
        {servicesDetailed()}
      </div>
    </div>
  );
};

interface ServiceList {
  title: string;
  text: string;
}

interface OurTeam {
  fullName: string;
  position: string;
  img: string;
}

const serviceData: Record<string, (ServiceList | OurTeam)[]> = {
  Buy: [
    {
      title: "Buy a New Home",
      text: "Welcome to the world of limitless possibilities in homeownership! Embark on a journey to discover your haven, a place where comfort and style intertwine seamlessly, offering you the ultimate retreat from the hustle and bustle of everyday life. Today marks the beginning of your quest to find the perfect new residence, a space that resonates with your unique personality and fulfills your wildest dreams. Imagine walking through the doors of your new home, greeted by an ambiance that wraps you in warmth and tranquility. Each corner of your haven has been thoughtfully designed to reflect not only the latest trends in architecture and interior design but also your individual taste and preferences. Whether it's the sleek lines of a modern kitchen, the cozy elegance of a living room bathed in natural light, or the inviting embrace of a beautifully landscaped outdoor space, every element speaks to the harmonious blend of comfort and style that you seek.",
    },
  ],
  Sell: [
    {
      title: "Sell your property",
      text: "Open the door to your next chapter with unwavering confidence. Let us guide you through the process of selling your house, ensuring that its true potential is showcased in all its glory. Entrust us with the task of presenting your property in a light that captures its essence and captivates potential buyers. Selling a house is not just a transaction; it's a momentous step toward a new beginning. With our expertise and dedication, you can navigate this journey knowing that every detail is being taken care of. From staging your home to highlight its unique features to crafting compelling listings that tell its story, we are committed to making your selling experience as smooth and rewarding as possible.",
    },
  ],
  Rent: [
    {
      title: "Rent a new place",
      text: "Discover your interim sanctuary effortlessly. Secure a rental house with ease and convenience. Allow us to take the reins in finding the perfect rental space that aligns seamlessly with your lifestyle and preferences. In the dynamic landscape of temporary living arrangements, we understand the importance of finding a place that feels like home, even if just for a little while. Our expertise in the rental market empowers us to navigate the options available and identify the rental house that resonates with your needs. Imagine settling into a space that caters to your comfort and suits your rhythm of life. Our team is dedicated to streamlining the process, from understanding your requirements to presenting you with options that mirror your preferences. Whether it's a cozy cottage, a modern townhouse, or a spacious family home, we are here to ensure that your temporary abode feels like a natural extension of your lifestyle.",
    },
  ],
  OurTeam: [
    {
      fullName: "Jodi S.",
      position: "Real Estate Developer",
      img: BusinessWoman1,
    },
    {
      fullName: "Justin R.",
      position: "Listing Agent",
      img: BusinessMan2,
    },
    {
      fullName: "Susan S.",
      position: "Buyer's Agent",
      img: BusinessWoman2,
    },
  ],
};

function isServiceList(item: ServiceList | OurTeam): item is ServiceList {
  return "title" in item;
}

function servicesDetailed() {
  const [currentSelection, setCurrentSelection] = useState("Buy");
  const handleSelection = (selection: string) => {
    setCurrentSelection(selection);
  };

  return (
    <div className="services-detailed">
      <div className="services-detailed-selectors">
        <ul>
          {Object.keys(serviceData)
            .filter((option) => option !== "OurTeam")
            .map((option) => (
              <li
                key={option}
                onClick={() => handleSelection(option)}
                className={
                  currentSelection === option
                    ? "currently-selected-service-option"
                    : ""
                }
              >
                {option}
              </li>
            ))}
        </ul>
      </div>
      <div className="services-detailed-text-agent">
        <div className="services-detailed-text">
          {serviceData[currentSelection]?.map(
            (item, index) =>
              isServiceList(item) && (
                <div key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              )
          )}
        </div>
        <div className="services-agent-info">
          {serviceData[currentSelection]?.map(
            (item, index) =>
              !isServiceList(item) && (
                <div className="agent-info" key={index}>
                  <img src={item.img} alt={item.fullName} />
                  <h3>{item.fullName}</h3>
                  <p>{item.position}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default OurServicesDetailed;
