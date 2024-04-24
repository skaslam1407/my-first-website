// components/Footer.js
import React from 'react';
import FooterNavbar from './FooterNav';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <FooterNavbar/>
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
