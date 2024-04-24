// pages/project.js
import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
const ProjectPage = () => {
    return (
        <div>
            <Header/>
            <h1>Our Projects</h1>
            <p>Here are some of our featured projects:</p>
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
            <Footer/>
        </div>
    );
};

export default ProjectPage;
