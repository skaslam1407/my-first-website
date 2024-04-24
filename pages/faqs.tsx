// pages/faqs.js
import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"

const FAQsPage = () => {
    const faqs = [
        {
            question: 'What is Next.js?',
            answer: 'Next.js is a React framework for building server-side rendered (SSR) web applications.',
        },
        // Other FAQs...
    ];

    return (
        <div>
            <Header/>
            <h1>FAQs</h1>
            <ul className=''>
                {faqs.map((faq, index) => (
                    <li key={index} className=''>
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
            <Footer/>
        </div>
    );
};

export default FAQsPage;
