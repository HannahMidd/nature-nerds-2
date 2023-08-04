import React, { useState } from 'react';
import ParkSearch from './ParkSearch';
import HomeContent from './Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'AboutUs') {
            return <AboutUs />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return <></>;
}
