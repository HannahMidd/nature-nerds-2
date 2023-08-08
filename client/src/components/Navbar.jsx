import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h4 className="small-nav-logo">
          <span>NATURE. </span> <br /> <span>NERDS. </span> <br /> <span></span>
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse container-fluid"
          id="navbarNav"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="./index.html" className="btn nav-link">
                HOME
              </a>
            </li>
            {/* <li className="nav-item">
              {/* <a href="#AboutUsSection" className="btn nav-link"> */}
            {/* ABOUT US */}
            {/* </a> */}
            {/* </li> */}
            <li className="nav-item">
              <a href="./pages/AboutUs" className="btn nav-link">
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;