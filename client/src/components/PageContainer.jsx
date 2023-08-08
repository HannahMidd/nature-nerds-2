import React, { useState } from 'react';
import ParkSearch from './ParkSearch';
import Home from './Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Signup') {
            return <Signup />;
        }
        if (currentPage === 'Login') {
            return <Login />;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return <></>;
}
