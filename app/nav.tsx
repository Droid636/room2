"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation"; // Para la navegación
import "./nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Lógica para destruir la sesión
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Limpia cookies
    localStorage.removeItem("user"); // Limpia almacenamiento local
    sessionStorage.clear(); // Limpia sesión
    setIsModalOpen(false); // Cierra el modal

    // Redirigir a la página de inicio de forma segura
    router.replace("/"); // Usa replace para evitar que se almacene en el historial
  };

  const menuItems = {
    cliente: [
      { name: "Inicio", path: "/home" },
      {
        name: "Salir",
        action: () => setIsModalOpen(true), // Abre el modal
      },
    ],
    propietario: [
      { name: "Cuartos", path: "/" },
      { name: "Subir Habitación", path: "/subhabitacion" },
      {
        name: "Salir",
        action: () => setIsModalOpen(true), // Abre el modal
      },
    ],
  };

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
              {item.path ? (
                <a href={item.path}>{item.name}</a>
              ) : (
                <button onClick={item.action} className="menu-button">
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¿Deseas cerrar sesión?</h2>
            <div className="modal-buttons">
              <button className="btn-confirm" onClick={handleLogout}>
                Confirmar
              </button>
              <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
