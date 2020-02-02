import React from 'react';
import './BurgerMenu.css';
import logo from '../../logo.png';
import menu from '../../image/Hamburger_icon.png';

class  BurgerMenu extends React.Component {
    render () {
        return (
            <header className="wrapper"> 
                <a href="#main-menu"
                    id="main-menu-toggle"
                    className="menu-toggle"
                    aria-label="Open main menu">
                    <span class="sr-only">Open main menu</span>
                    <span class="fa fa-bars" aria-hidden="true"></span>
                    <img className="burger-menu" src={menu}/>
                </a>

                
                <nav id="main-menu" class="main-menu" aria-label="Main menu">
                    <a href="#main-menu-toggle"
                    id="main-menu-close"
                    className="menu-close"
                    aria-label="Close main menu">
                    <span class="sr-only">Close main menu</span>
                    <span class="fa fa-close" aria-hidden="true"></span>
                    </a>
                        <ul>
                            <li><a href="#">БРОНИРОВАНИЕ</a></li>
                            <li><a href="#">ФОТОГАЛЕРЕЯ</a></li>
                            <li><a href="#">О НАС</a></li>
                            <li><a href="#">КОНТАКТЫ</a></li>
                        </ul>
                </nav>
                <a href="#main-menu-toggle"
                    className="backdrop"
                    tabindex="-1"
                    aria-hidden="true" hidden>
                </a>
            </header>
        );
    }
}

export default BurgerMenu;