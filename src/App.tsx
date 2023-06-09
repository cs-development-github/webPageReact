import React from 'react';
import './App.css';
import {Navbar} from './components/narbar/Navbar';
import Footer from "./components/footer/Footer";
import CardsContainer from "./components/card/card";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="content_container">
                <div className="c_pas_propre_container">
                <div className="hero_container">
                    <p className="hero_title"> Default</p>
                    <p className="hero_text">This is a Dashboard example built using this template</p>
                    <div className="round-background">
                        <div className="plus-icon">+</div>
                    </div>
                </div>
                <CardsContainer/>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
