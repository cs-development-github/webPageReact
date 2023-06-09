import React from 'react';
import './App.css';
import { Navbar } from './components/narbar/Navbar';
import Footer from "./components/footer/Footer";
import CardsContainer from "./components/card/card";

function App() {
  return (
    <div>
      <Navbar/>
      <CardsContainer/>
      <Footer/>
    </div>
  );
}

export default App;
