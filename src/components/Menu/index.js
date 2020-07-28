import React from 'react';
import Logo from '../../assets/img/logo2.png';
import './Menu.css';
import Button from '../Button';
import './style.js';

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img  className ="Logo" src={Logo} alt ="PrFlix logo" />
            </a>

            <Button as="a" className ="ButtonLink" href="/">
                Novo Video
            </Button>    
        </nav>
    );
}

export default Menu;





