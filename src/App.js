import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParallaxView from './components/parallax-view/ParallaxView';
import Header from './components/header/Header';
import Slider from './components/slider/slider';


function App() {
  return (
    <div className="App">
      <Slider />;
      <Header />;
      <ParallaxView />;
      
    </div>
  );
}

export default App;