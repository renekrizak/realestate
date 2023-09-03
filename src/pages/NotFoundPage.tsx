import React from "react";
import Navbar from "../components/navbar";
import { Footer } from "../components/TestimonialsFooter";
import "../style/compStyles/NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="not-found-page">
        <h1>This page does not exist yet.</h1>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFoundPage;
