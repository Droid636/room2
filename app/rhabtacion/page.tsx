import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import '@/app/nav.css'; // Archivo CSS para el diseño

function Nav() {
  return (
    <div>
      {/* Checkbox oculto para activar/desactivar el menú */}
      <input type="checkbox" id="toggle" className="toggle-checkbox" />

      {/* Label como botón de activación */}
      <label htmlFor="toggle" className="toggle-button">
        <FontAwesomeIcon icon={faBars} />
      </label>

      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title">Menu</h3>
        <ul className="sidebar-list">
          <li>
            <a href="#home">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </a>
          </li>
          <li>
            <a href="#services">
              <FontAwesomeIcon icon={faCogs} /> Services
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
