"use client"; // Esto indica que es un componente del lado del cliente

import React, { useState } from "react";
import "@/app/register/register.css";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    numberPhone: "",
    email: "",
    password: "",
    role: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    role: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    // Validar rol
    if (!formData.role) {
      newErrors.role = "El rol es obligatorio.";
    }

    // Validar género
    if (!formData.gender) {
      newErrors.gender = "El género es obligatorio.";
    }

    setErrors(newErrors);

    // Devuelve `true` si no hay errores
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Detener el envío si hay errores
    }

    try {
      const response = await fetch(
        "https://clever-kindness-production.up.railway.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        console.log("Usuario creado con éxito");
      } else {
        console.error("Error al crear el usuario");
        console.log(formData)
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Regístrate</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstname">Nombre</label>
              <input
                type="text"
                id="firstname"
                className="form-input"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                id="lastname"
                className="form-input"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberPhone">Teléfono</label>
              <input
                type="tel"
                id="numberPhone"
                className="form-input"
                value={formData.numberPhone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="role">Seleccione un rol</label>
              <select
                id="role"
                className="form-input"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="cliente">cliente</option>
                <option value="propietario">propietario</option>
              </select>
              {errors.role && <p className="error-message">{errors.role}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gender">Género</label>
              <select
                id="gender"
                className="form-input"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="masculino">masculino</option>
                <option value="femenino">femenino</option>
              </select>
              {errors.gender && <p className="error-message">{errors.gender}</p>}
            </div>
          </div>

          <button type="submit" className="register-button">
            Registrarse
          </button>
          <p className="inic-hom">
            ¿Ya tienes cuenta? <a href="/">Inicio</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
