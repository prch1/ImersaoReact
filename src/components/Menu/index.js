import React from 'react';
import Logo from '../../assets/img/logo2.png';
import './Menu.css';
import {LogoImage, MenuWrapper } from './style.js';
import {Link} from 'react-router-dom';
import Button from '../Button';


function Menu() {
    return (

      <MenuWrapper className="Menu">
       <a href="/">
         <LogoImage src={Logo} alt ="PrFlix logo" />
       </a>

       <Button as={Link} className ="ButtonLink" to="/cadastro/video">
                Novo Video
       </Button>    

      </MenuWrapper>

        /*<nav className="Menu">
            <Link to="/">
            <img  className ="Logo" src={Logo} alt ="PrFlix logo" />
            </Link>

            <Button as={Link} className ="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>    
        </nav>*/
    );
}

export default Menu;





