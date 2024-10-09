import './Menu.css';

function Menu(){
    const links = [
        {
            title: 'Home',
            link: '/Home'
        },
        {
            title: 'Resume',
            link: '/Resume'
        },
        {
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/camilleux/'
        }
    ]
    const navLinks =
    links.map((link,index) =>{
        return(
            <a className="menuItem" key={index} href={link.link}>{link.title}</a>
        )
    })
    return(
        <nav className='Menu col col-3'>{navLinks}</nav>
    );
}

export default Menu;