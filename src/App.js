import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
        <Menu />
        <Header />
    </div>
  );
}

export default App;