import React from 'react';
import logo from '../assets/images/r5-logo.svg';

import './style.css';

function MainHeader() {
  return (
    <header className="main-header">
      <div className="container">
        <img src={logo} alt="Rocket Five GO Scan" />
        
        <ul>
          <li><a href="/">Ínicio</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Funcionalidades</a></li>
          <li><a href="/">Parceiros</a></li>
        </ul>
      </div>
    </header>
  );
}

export default MainHeader;
