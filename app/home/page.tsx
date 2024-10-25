import React from 'react';
import "@/app/home/home.css";

function HomePage() {
  return (
    <div>
      <div className="card">
        <h3>card 1</h3>
        <label htmlFor="modalToggle" className="open-modal-label">Click to open modal</label>
      </div>

      <div className="card">
        <h3>card 2</h3>
        <p>Content of card 2</p>
      </div>

      <div className="card">
        <h3>card 3</h3>
        <p>Content of card 3</p>
      </div>

      {/* Modal Structure */}
      <input type="checkbox" id="modalToggle" className="modal-toggle" />
      <div className="modal">
        <label htmlFor="modalToggle" className="modal-background"></label> {/* Cierra el modal al hacer clic fuera */}
        <div className="modal-content">
          <label htmlFor="modalToggle" className="close-modal-label">&times;</label>
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
