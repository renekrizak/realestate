import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import Listings from "../components/Listings";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <WhoAreWe></WhoAreWe>
      <Listings></Listings>
      <OurServices></OurServices>
    </>
  );
};

export default Home;
