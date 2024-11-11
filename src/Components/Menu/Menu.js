import { useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const location = useLocation();
    const links = [
        {
            title: 'Home',
            link: '/Home',
            id: 1
        },
        {
            title: 'Resume',
            link: '/Resume',
            id: 2
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/camilleux/',
        }
    ];

    const navLinks = links.map((link, index) => {
        // Check if the current link matches the current location
        const isActive = location.pathname === link.link;

        return (
            <a
                className={`menuItem small-caps ${isActive ? 'active-link' : ''}`}
                key={index}
                href={link.link}
            >
                {link.title}
            </a>
        );
    });

    return (
        <nav className='Menu col col-3'>{navLinks}</nav>
    );
}

export default Menu;