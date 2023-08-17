import React from "react";

import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import Listings from "../components/Listings";
import OurServices from "../components/OurServices";
import TownAreas from "../components/TownAreas";
import OurTeam from "../components/OurTeam";
import HomeBlogs from "../components/HomeBlogs";
import { Testimonials, Footer } from "../components/TestimonialsFooter";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <WhoAreWe></WhoAreWe>
      <Listings></Listings>
      <OurServices></OurServices>
      <TownAreas></TownAreas>
      <OurTeam></OurTeam>
      <HomeBlogs></HomeBlogs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  );
};

export default Home;
