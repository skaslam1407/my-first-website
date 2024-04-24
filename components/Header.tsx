// components/Header.js
import React from 'react';
import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
const Header = () => {
    return (
       
        <header>
             <TopNavbar/>
            <div className="logo">
                <img src="/logo.jpg" alt="Logo" />
            </div>
          <Navbar/>
        </header>
    );
};

export default Header;
