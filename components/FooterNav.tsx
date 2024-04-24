// components/Navbar.js
import React from 'react';
import NavLink from './NavLink';

const FooterNavbar = () => {
    return (
        <nav>
            <ul>
                    <li>
                    <NavLink href="/terms" text="Terms of Use" />
                    </li>
                    <li>
                    <NavLink href="/privacy" text="Privacy Policy" />
                    </li>
                    <li>
                    <NavLink href="/contact" text="Contact Us" />
                   </li>
            </ul>
        </nav>
    );
};

export default FooterNavbar;
