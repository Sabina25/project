import React from 'react';
import './Header.css';
//import Menu from '../menu/menu'; 
import Slider from '../slider/Slider';


class Header extends React.Component {
    render () {
        return (
            <section className="header">
                <Slider/>;
            </section>
        );
    }
}


export default Header;