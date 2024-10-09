import React from "react";



export default function Login() {
  return (
    <div className="login-container">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <div className="login-box">
        <h2 className="login-title">Iniciar sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" value="" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" value="" required />
          </div>
          <button type="submit" className="login-button">Iniciar</button>
        </form>
        <p className="register-link">
          ¿No tienes una cuenta? <a href="/fonts">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
