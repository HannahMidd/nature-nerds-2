import React, { useState } from 'react';
import HomeContent from './Home';
import AboutUsSection from "./pages/AboutUs";
import Login from './pages/Login';
import Signup from './pages/Signup';
// import capitalizeFirstLetter from '../../../server/utils/Helpers';
import PropTypes from 'prop-types';

function PageContainer(props) {

  const renderPage = () => {
    switch (props.currentPage) {
      case 'about us':
        return <AboutUsSection />;
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <section>
      {renderPage()}
    </section>
  );
}

PageContainer.propTypes = {
  currentPage: PropTypes.object,
}

export default PageContainer;