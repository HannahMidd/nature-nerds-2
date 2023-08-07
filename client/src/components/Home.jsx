import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h4 className="small-nav-logo">
                    <span>NATURE. </span> <br /> <span>NERDS. </span> <br />
                    <span></span>
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
                    style={{ justifyContent: 'space-between' }}
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a
                                href="./index.html"
                                className="btn nav-link"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="#AboutUsSection"
                                className="btn nav-link"
                            >
                                ABOUT US
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const HeroSection = () => {
    const handleScrollToParkSearch = () => {
        const parkSearchSection = document.getElementById(
            'park-search-section'
        );
        if (parkSearchSection) {
            parkSearchSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="page-title">
            <h1 className="text">NATURE NERDS</h1>
            <h1 className="text2">
                EXPLORE THE BEAUTY OF NATIONAL PARKS <br /> WITH A LITTLE
                GUIDANCE FROM CODING NERDS
            </h1>
            <button
                id="arrow-btn"
                onClick={handleScrollToParkSearch}
                style={{ fontSize: 44 }}
            >
                {' '}
                &darr;
            </button>
        </div>
    );
};

const HomeApp = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <section
                id="main-scroll"
                className="main-container"
            ></section>
        </div>
    );
};

export default HomeApp;
