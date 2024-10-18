import React from "react";
import "@/app/register/register.css"

function use() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Regístrate</h2>
        <form className="register-form">
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Apellido</label>
              <input type="text" id="lastname"  className="form-input" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="phone" id="phone"  className="form-input" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password"  className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Seleccione un rol</label>
              <select id="role" className="form-input" required>
                <option value="">Seleccione una opción</option>
                <option value="cliente">Cliente</option>
                <option value="vendedor">Vendedor</option>
              </select>
            </div>
          </div>

          <button type="submit" className="register-button">Registrarse</button>
        </form>
      </div>
    </div>
  );
}

export default use;
