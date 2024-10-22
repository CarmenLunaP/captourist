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


// "use client";
// import React, { useState, useEffect } from "react";
// import { useTranslations } from "next-intl";

// const NewsletterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subscriptions, setSubscriptions] = useState([]);
//   const t = useTranslations("newsletterform");

//   // Al cargar el componente, recuperamos los datos del localStorage
//   useEffect(() => {
//     const storedSubscriptions = localStorage.getItem("subscriptions");
//     if (storedSubscriptions) {
//       setSubscriptions(JSON.parse(storedSubscriptions)); // Cargar las suscripciones anteriores
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newSubscription = {
//       name: name,
//       email: email,
//       date: new Date().toISOString(), // Agregar la fecha actual
//     };

//     // Actualizamos el array de suscripciones
//     const updatedSubscriptions = [...subscriptions, newSubscription];
//     setSubscriptions(updatedSubscriptions);

//     // Guardamos las suscripciones en localStorage para persistencia
//     localStorage.setItem("subscriptions", JSON.stringify(updatedSubscriptions));

//     console.log("Suscripción agregada:", newSubscription);

//     // Vaciar los campos del formulario
//     setName("");
//     setEmail("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="newsletter-form">
//       <input
//         type="text"
//         placeholder={t("placeholderName")}
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="newsletter-input"
//         required
//       />
//       <input
//         type="email"
//         placeholder={t("placeholderMail")}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="newsletter-input"
//         required
//       />
//       <button type="submit" className="newsletter-button-footer">
//         {t("BtnText")}
//       </button>
//     </form>
//   );
// };

// export default NewsletterForm;
