// components/Navbar.js
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink href="/" text="Home" />
                </li>
                <li>
                    <NavLink href="/about" text="About Us" />
                </li>
                <li>
                    <NavLink href="/service" text="Services" />
                </li>
                <li>
                    <NavLink href="/gallery" text="Gallery" />
                </li>
                <li>
                    <NavLink href="/contact" text="Contact Us" />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
