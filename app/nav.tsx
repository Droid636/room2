"use client"; 

import React, { useState } from 'react';
import './nav.css'; // Asegúrate de tener este archivo CSS y vincularlo correctamente

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h3 className="header-title">Room for you</h3>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li><a href="/home">Inicio</a></li>
          <li><a href="/">Salir</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
