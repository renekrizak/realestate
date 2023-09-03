import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import PropertyDetailed from "./pages/PropertyDetailed";
import { ListingData } from "./data/ListingsData";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          {ListingData.map((listingData) => (
            <Route
              key={listingData.id}
              path={`/listings/${listingData.id.toString()}`}
              element={<PropertyDetailed property={listingData} />}
            />
          ))}
          <Route path="/services" element={<Services />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
