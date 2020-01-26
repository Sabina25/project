import React from 'react';
import ParallaxView from './components/ParallaxView/ParallaxView';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Slider from './components/Slider/Slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Slider />
      <Header />
      <ParallaxView />
    </div>
  );
}

export default App;
