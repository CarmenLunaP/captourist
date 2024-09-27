"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";


const NewsletterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const t = useTranslations("newsletterform");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name, "Correo:", email);
    // Aquí puedes manejar el envío del formulario (API, etc.)
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="text"
        placeholder={t("placeholderName")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="newsletter-input"
        required
      />
      <input
        type="email"
        placeholder={t("placeholderMail")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="newsletter-input"
        required
      />
      <button type="submit" className="newsletter-button-footer">
      {t("BtnText")}
      </button>
    </form>
  );
};

export default NewsletterForm;
