import React from 'react';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import AboutProducts from './AboutProducts/AboutProducts';
import AboutService from './AboutService/AboutService';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const FrontPage = () => {
    return (
        <div style={{ backgroundColor: "#050c1a" }}>
            <div className="header">
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <div className="p-3">
                <AboutProducts></AboutProducts>
                <AboutService></AboutService>
                <Home></Home>
            </div>
            <div className="footer-bg">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default FrontPage;