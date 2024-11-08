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
        <h3 className="header-title">My Website</h3>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`menu ${isOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
