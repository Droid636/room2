"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Para obtener la ruta actual
import "./nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtén la ruta actual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define los enlaces según la ruta o el rol
  const menuItems = {
    cliente: [
      { name: "Inicio", path: "/home" },
      { name: "Favoritos", path: "/" },
      { name: "Salir", path: "/" },
    ],
    propietario: [
      { name: "Cuartos", path: "/" },
      { name: "Subir Habitacion", path: "/subhabitacion" },
      { name: "Salir", path: "/" },
    ],
  };

  // Determina el rol basado en la ruta actual (puedes modificar esto según tu lógica real)
  const userRole = pathname.includes("vendedor") ? "propietario" : "cliente";

  return (
    <header className="header">
      <div className="header-container">
        <h3 className="header-title">Room for you</h3>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="menu-list">
          {menuItems[userRole].map((item, index) => (
            <li key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
