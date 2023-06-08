import React from 'react';

export const Navbar: React.FC = () => {
    return(
        <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">À propos</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    )
}