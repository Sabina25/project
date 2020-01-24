import React, { Component } from 'react';
import './menu.css';


/*class Menu extends React.Component {
    render () {
        return (
            <section>
                <div className="logo">
                    <img />
                </div> 
                <nav>
                    <div>Забронировать Столик </div>
                    <div>Меню</div>
                    <div>О нас</div>
                    <div>Фотогалерея</div>
                    <div>Контакты</div>
                    <div></div>
              </nav>
                <div>
                    Поиск 
                </div>
            </section>
        );
    }
}

export default Menu;*/


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
                    <div>Завтрак</div>
                    <div>Обед</div>
                    <div>Ужин</div>
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
    );
  }
}


export default Menu;