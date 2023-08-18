import React from "react";

import Navbar from "../components/navbar";
import { Footer } from "../components/TestimonialsFooter";
import ListingsScrollable from "../components/ListingsScrollable";
const Listings = () => {
  return (
    <>
      <Navbar></Navbar>
      <ListingsScrollable></ListingsScrollable>
      <Footer></Footer>
    </>
  );
};

export default Listings;
