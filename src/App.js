import React from 'react';
import ParallaxView from './components/ParallaxView/ParallaxView';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Slider from './components/slider/Slider';
import Footer from './components/Footer/Footer';
import './App.css';
import  BurgerMenu from './components/BurgerMenu/BurgerMenu';
import logo from './logo.png';


function App() {
  return (
    <div className="App">
      <div className="all-menu">
        <BurgerMenu />
        <div className="block-menu-img">
          <img  className="logo-menu" src={logo} alt="/"/>
        </div>  
      </div>
      
      <Slider />
      <Header />
      <ParallaxView />
      <Footer />
    </div>
  );
}

export default App;
