import React from "react";
import { PropertyFull } from "../data/ListingsData";

import Navbar from "../components/navbar";

interface ListingDetailProps {
  property: PropertyFull;
}

const PropertyDetailed: React.FC<ListingDetailProps> = ({ property }) => {
  return (
    <>
      <Navbar></Navbar>
      <section></section>
    </>
  );
};

export default PropertyDetailed;
