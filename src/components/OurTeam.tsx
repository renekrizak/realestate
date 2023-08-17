import React from "react";
import "../style/compStyles/OurTeam.scss";

import BusinessMan1 from "../assets/ourTeam/BusinessMan1.jpg";
import BusinessMan2 from "../assets/ourTeam/BusinessMan2.jpg";
import BusinessWoman1 from "../assets/ourTeam/BusinessWoman1.jpg";
import BusinessWoman2 from "../assets/ourTeam/BusinessWoman2.jpg";

const OurTeam: React.FC = () => {
  interface OurTeam {
    fullName: string;
    position: string;
    img: string;
  }
  const TeamMembers: OurTeam[] = [
    {
      fullName: "Brendon M.",
      position: "CEO & Founder",
      img: BusinessMan1,
    },
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
  ];
  return (
    <section className="our-team-section">
      <div className="our-team-container">
        <div className="our-team-text">
          <h2>INTRODUCE YOURSELF TO</h2>
          <h1>Our Team of Experts</h1>
        </div>
        <div className="our-team-cards">
          {TeamMembers.map((member, index) => (
            <div className="our-team-card" key={index}>
              <div className="our-team-card-image">
                <img src={member.img} alt={member.position} />
                <div className="overlay"></div>
              </div>
              <div className="our-team-card-text">
                <h1>{member.fullName}</h1>
                <h2>{member.position}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
