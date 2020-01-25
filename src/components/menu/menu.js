import React, { Component } from 'react';
import './menu.css';
import logo from '../../images/logo.svg';


class Menu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div classNam="menu">
        <div className="logo">
          <svg>{logo}</svg>;
        </div>
         <nav className="nav-bar">
            <div>
                <div className="point-menu">
                    <a>БРОНИРОВАНИЕ</a>
                </div>
            </div>
            <div>
                <div className="point-menu" 
                    onClick={this.showMenu}>
                    <a>МЕНЮ </a>
                </div>
                {
                    this.state.showMenu
                ? (
                <div
                    className="menu"
                    ref={(element) => {
                    this.dropdownMenu = element;
                    }}
                >
                    <div className="dropdown-menu">Завтрак</div>
                    <div className="dropdown-menu">Обед</div>
                    <div className="dropdown-menu">Ужин</div>
                </div>
                )
                : (
                null
                )
                }
            </div>
            <div>
                <div className="point-menu">
                    <a>ФОТОГАЛЕРЕЯ</a>
                </div>
            </div>
            <div>
                <div className="point-menu">
                    <a>О НАС</a>
                </div>
            </div>
            <div>
                <div className="point-menu" 
                    onClick={this.showMenu}>
                   КОНТАКТЫ
                </div>
            </div>
      </nav> 
      </div>

        
    );
  }
}


export default Menu;