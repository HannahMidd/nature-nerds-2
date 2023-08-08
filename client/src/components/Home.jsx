import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className="page-title">
      <h1 className="text">NATURE NERDS</h1>
      <h1 className="text2">
        EXPLORE THE BEAUTY OF NATIONAL PARKS <br /> WITH A LITTLE GUIDANCE FROM
        CODING NERDS
      </h1>
      <button id="arrow-btn" href="#main-scroll" style={{ fontSize: 24 }}>
        <i className="fa fa-chevron-circle-down"></i>
      </button>
    </div>
  );
};

const HomeApp = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <section id="main-scroll" className="main-container"></section>
    </div>
  );
};

export default HomeApp;