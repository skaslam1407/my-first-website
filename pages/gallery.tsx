// pages/gallery.js
import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const GalleryPage = () => {
    const images = [
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/400',
        'https://via.placeholder.com/400',
    ];

    return (
        <div>
             <Header/>
            <h1>Gallery</h1>
            <div className="image-grid">
                {images.map((imageUrl, index) => (
                    <div key={index} className="image-item">
                        <img src={imageUrl} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default GalleryPage;
