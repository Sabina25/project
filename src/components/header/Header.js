import React from 'react';
import './Header.css';
import Menu from '../menu/menu'; 

class Header extends React.Component {
    render () {
        return (
            <section className="header">
                <Menu />;
            
            </section>
        );
    }
}


export default Header;