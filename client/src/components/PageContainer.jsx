import React, { useState } from 'react';
import HomeContent from './Home';
import AboutUsSection from "./pages/AboutUs";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { capitalizeFirstLetter } from '../../../server/utils/Helpers';

function PageContainer({ currentPage }) {

  const renderPage = () => {
    switch (name) {
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
      <h2>{capitalizeFirstLetter(name)}</h2>
      <PageContainer>{renderPage()} </PageContainer>
    </section>
  );
}
export default PageContainer;