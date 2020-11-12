import React from 'react';
import './header.css';

function Header(){
    return(
        <header className="menu-left">
            <div><a href="#index"><img src="https://www.flaticon.com/svg/static/icons/svg/3720/3720773.svg" className="icon" alt="about-me"></img></a></div>
            <div><a href="#projects"><img src="https://www.flaticon.com/svg/static/icons/svg/2909/2909653.svg" className="icon" alt="projects"></img></a></div>
            <div><a href="education"><img src="https://www.flaticon.com/svg/static/icons/svg/2987/2987867.svg" className="icon" alt="education"></img></a></div>
            <div><a href="contact"><img src="https://www.flaticon.com/svg/static/icons/svg/3062/3062634.svg" className="icon" alt="contact"></img></a></div>
        </header>
    )
}

export default Header;