"use client";
import React, { useState } from "react";

const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name, "Correo:", email);
    // Aquí puedes manejar el envío del formulario (API, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="newsletter-input"
        required
      />
      <input
        type="email"
        placeholder="Escribe tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="newsletter-input"
        required
      />
      <button type="submit" className="newsletter-button">
        Suscribirse
      </button>
    </form>
  );
};

export default NewsletterForm;
