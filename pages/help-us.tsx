// pages/help.js
import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const HelpUsPage = () => {
    return (
        <div>
            <Header/>
            <h1>Help Us</h1>
            <p>If you need assistance or have any questions, please contact us:</p>
            <ul>
                <li>Email: contact@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Main St, City, Country</li>
            </ul>
            <Footer/>
        </div>
    );
};

export default HelpUsPage;
