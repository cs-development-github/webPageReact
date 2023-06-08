import React from 'react';
import './App.css';
import { Navbar } from './components/Narbar/Navbar';

function App() {
  return (
    <div className="flex_container">
      <Navbar/>
      <div className="content_container">
        <div className="hero_container">
          <p className="hero_title"> Default</p>
          <p className="hero_text">This is a Dashboard example built using this template</p>
          <div className="round-background">
          <div className="plus-icon">+</div>
        </div>
        </div>
      </div>

    </div>
  );
}

export default App;
