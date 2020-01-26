import React, { Component } from 'react';
import './Menu.css';
import logo from '../../logo.png';


class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = event => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
      <div className="overlay">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="nav-bar">
          <div>
            <div className="point-menu">
              <a>БРОНИРОВАНИЕ</a>
            </div>
          </div>
          <div>
            <div className="point-menu" onClick={this.showMenu}>
              <a>МЕНЮ </a>
            </div>
            {this.state.showMenu ? (
              <div
                className="menu"
                ref={element => {
                  this.dropdownMenu = element;
                }}
              >
                <div className="dropdown-menu">Завтрак</div>
                <div className="dropdown-menu">Обед</div>
                <div className="dropdown-menu">Ужин</div>
              </div>
            ) : null}
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
            <div className="point-menu" onClick={this.showMenu}>
              КОНТАКТЫ
            </div>
          </div>
        </nav>
      </div>
      </div>
    );
  }
}

export default Menu;
