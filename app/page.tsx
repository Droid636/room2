import Link from "next/link";
import React from "react";


export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Iniciar sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" placeholder="Ingrese su correo" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingrese su contraseña" required />
          </div>
          <button type="submit" className="login-button">Iniciar</button>
        </form>
        <p className="register-link">
          ¿No tienes una cuenta? <Link href="/register"> Registrate</Link> 
        </p>
      </div>
    </div>
  );
}
