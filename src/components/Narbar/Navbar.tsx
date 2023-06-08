import React from 'react';
import './Navbar.css'


export const Navbar: React.FC = () => {
    return(
        <nav>
            <div className="wrapper">
                <div className="logo_container">
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png" style={{ width: '80%', height: '80%' }} alt="" />
                    </div>
                    <div className="logo_text">
                        Carolina
                    </div>
                </div>

                <div className="button-container">
                    <div className="download-container button">Download now</div>
                    <div className="pro-container button">View PRO Version</div>
                </div>

                <div className="profil_container">
                    <img src={process.env.PUBLIC_URL + '/assets/profil.png'}  alt="kc" /><div className="display_profil_container"> &rsaquo;</div>
                </div>
            </div>
            <div className="sidebar">
                <div className="side_text">
                    Navigation Menu
                </div>
                <div className="side_container">Dashboard <div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Elements<div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Cards<div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Presentation blocks <div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Widgets<div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Regular Tables<div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Forms Elements<div className="display_container"> &rsaquo;</div></div>
                <div className="side_container">Others<div className="display_container"> &rsaquo;</div></div>
            </div>
        </nav>
    )
}