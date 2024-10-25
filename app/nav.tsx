import React from 'react';
// Asegúrate de crear y vincular este archivo CSS

function Nav() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Menu</h3>
      <ul className="sidebar-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Nav;
