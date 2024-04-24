// components/Navbar.js
import React from 'react';
import NavLink from './NavLink';

const TopNavbar = () => {
    return (
        <nav>
            <ul>

                <li>
                    <NavLink href="/faqs" text="FAQS" />
                </li>
                <li>
                    <NavLink href="/help-us" text="Help US" />
                </li>
            </ul>
        </nav>
    );
};

export default TopNavbar;
