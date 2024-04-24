// components/NavLink.js
import Link from 'next/link';

const NavLink = ({ href, text }) => {
    return (
        <Link href={href}>
            {text}
        </Link>
    );
};

export default NavLink;
