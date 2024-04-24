// pages/service.js
import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
const ServicePage = () => {
    return (
        <div>
             <Header/>
            <h1>Our Services</h1>
            <p>Here are the services we offer:</p>
            <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
            <Footer/>
        </div>
    );
};

export default ServicePage;
