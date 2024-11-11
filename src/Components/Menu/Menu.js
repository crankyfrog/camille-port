import { useLocation } from 'react-router-dom';
import './Menu.css';

function Menu() {
    const location = useLocation();
    const links = [
        {
            title: 'Home',
            link: '/Home',
            id: 1,
            target: ''
        },
        {
            title: 'Resume',
            link: '/Resume',
            id: 2,
            target: ''
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/camilleux/',
            target: '_blank'
        }
    ];

    const navLinks = links.map((link, index) => {
        // Check if the current link matches the current location
        const isActive = 
        (location.pathname === link.link) || 
        ((location.pathname === '/' || location.pathname === '/Home') && link.link === '/Home');

        return (
            <a
                className={`menuItem small-caps ${isActive ? 'active-link' : ''}`}
                key={index}
                href={link.link}
                target={link.target}
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