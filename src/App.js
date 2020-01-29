import React from 'react';
import ParallaxView from './components/ParallaxView/ParallaxView';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Slider from './components/slider/Slider';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Header />
      <ParallaxView />
      <Footer />
    </div>
  );
}

export default App;
