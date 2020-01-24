import React from 'react';
import './Header.css';
import Menu from '../menu/menu'; 
import Slider from '../slider/slider';


class Header extends React.Component {
    render () {
        return (
            <section className="header">
                <Slider />;
                <Menu />;
                
            </section>
        );
    }
}


export default Header;