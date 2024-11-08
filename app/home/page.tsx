import React from 'react';
import "@/app/home/home.css";
import Nav from '../nav';

function HomePage() {
  return (
    <main>
      {/* Coloca Nav fuera del contenedor principal */}
      <Nav />

      <div className="home-container">
        <div className="card-container">
          {/* Card 1 que activa el modal */}
          <label htmlFor="modalToggle" className="card clickable-card">
            <img className='img' src="https://i.pinimg.com/736x/8c/42/25/8c42257e089f1f737f9803ec2e3f8a49.jpg" alt="ubicacion" />
            <h3>Ingresa tu Ubicacion</h3>
          </label>

          <div className="card">
            <h3>Card 2</h3>
            <p>Contenido del card 2.</p>
          </div>

          <div className="card">
            <h3>Card 3</h3>
            <p>Contenido del card 3.</p>
          </div>
        </div>

        {/* Modal Estructura */}
        <input type="checkbox" id="modalToggle" className="modal-toggle" />
        <div className="modal">
          <label htmlFor="modalToggle" className="modal-background"></label>
          <div className="modal-content">
            <label htmlFor="modalToggle" className="close-modal-label">&times;</label>
            <h2>Busca la colonia donde deseas rentar</h2>

            {/* Menú desplegable */}
            <select className="options-dropdown" defaultValue="">
              <option value="" disabled>Selecciona una opción</option>
              <option value="1">Opción 1</option>
              <option value="2">Opción 2</option>
              <option value="3">Opción 3</option>
            </select>

            {/* Botón de búsqueda */}
            <button className="price-range-btn">Buscar</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
