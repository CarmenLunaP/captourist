import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { PiMapPinAreaLight } from "react-icons/pi";
import { BsCamera } from "react-icons/bs";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaCamera, FaHandshake, FaImages } from "react-icons/fa"; // Importa los íconos
import "../../../../styles/proposals.css"; // Ajusta los estilos aquí
import "../../../../styles/home.css";

const Proposals = () => {
  return (
    <section className="proposal-section">
      <div className="proposal-container">
        {/* Sección izquierda con imagen y título */}
        <div className="proposal-left">
          <Image
            src="/img/img-post7.jpg" // Aquí pones la ruta correcta de tu imagen
            alt="Propuesta sorpresa"
            width={500} // Cambia estos valores según el tamaño necesario
            height={400}
            className="proposal-image"
          />
        </div>

        {/* Sección derecha con el texto */}
        <div className="proposal-right">
          <h1 className="proposal-title">Captura cada momento precioso</h1>
          <p className="proposal-description">
            Obtén fotógrafos expertos y fotos increíbles, comenzando desde solo
            $200 USD en más de 500 ciudades alrededor del mundo.
          </p>
          <button className="proposal-button">Ver paquete de propuestas</button>
        </div>
      </div>

      {/* Sección 2*/}
      <div className="proposal-container-secc2">
        {/* Sección izquierda con imagen */}
        <div className="proposal-left2">
          <Image
            src="/img/pabloyfernanda800x700-600x525.jpg" // Asegúrate de que la ruta sea correcta
            alt="Propuesta sorpresa"
            width={500}
            height={600}
            className="proposal-image2"
          />
        </div>

        {/* Sección derecha con el texto */}
        <div className="proposal-right2">
          <h1 className="proposal-title">
            Need help planning a perfect surprise proposal photo shoot?
          </h1>
          <h3>Surprise proposal shoots include:</h3>
          <ul className="proposal-list">
            <li>Contact your photographer to create the perfect game plan</li>
            <li>Location recommendations for your proposal</li>
            <li>Maps and mockup images to ensure it goes seamlessly</li>
            <li>Tips and tricks to make the most of your surprise</li>
            <li>
              Local insider tips on the best places to celebrate afterwards
            </li>
            <li>Dedicated Concierge team to assist with any questions</li>
          </ul>
          <div className="proposal-buttons">
            <button className="proposal-button-secc2">
              Find Proposal Photographer
            </button>
            <button className="proposal-secondary-button-secc2">
              See Proposal Pricing Packages
            </button>
          </div>
          <p className="proposal-price">
            Over 350 cities, starting from $425 USD
          </p>
        </div>
      </div>

      {/* Sección inferior con íconos y detalles */}
      <div className="proposal-details">
        <div className="detail-item">
          <div className="detail-item1">
            <GiBigDiamondRing size={50} color="#2baab2" />
            {/* <FaCamera size={60} className="proposal-icon" />{" "}
          Ícono de cámara */}
          </div>
          <p>7,000+ Surprise Proposals Captured</p>
        </div>
        <div className="detail-item">
          <PiMapPinAreaLight size={50} color="#2baab2" />
          {/* <FaHandshake size={60} className="proposal-icon" />{" "}
          Ícono de handshake */}
          <p>Easy, Hassle-Free Process</p>
        </div>
        <div className="detail-item">
          <BsCamera size={50} color="#2baab2" />
          {/* <FaImages size={60} className="proposal-icon" />{" "}
          Ícono de imágenes */}
          <p>Hand-Picked, Local Photographers</p>
        </div>
        <div className="detail-item">
          <LuBookOpenCheck size={50} color="#2baab2" />
          {/* <FaImages size={60} className="proposal-icon" />{" "}
          Ícono de imágenes */}
          <p>Beautiful, Professional Photos Guaranteed</p>
        </div>
      </div>

      <div className="sec-9-home">
        {/* <div className="sec-9-content">
            <h1 className="sec-9-title">{t("sec-9-title")}</h1> */}

        <div className="testimonies">
          <div className="testimony-card">
            <div className="testimony-image">
              <img src="/img/Venecia-800-600x383.jpg" alt="Testimonio Paris" />
            </div>

            <div className="testimony-text">
              <p className="testimony-quote">
                Estoy completamente encantada con las fotos de mi viaje a París
                2024, y todo gracias al talentoso equipo de Captouris. Desde el
                primer contacto, su profesionalismo y pasión por capturar
                momentos mágicos fueron evidentes. ¡Cada foto es una obra de
                arte que refleja perfectamente la belleza y la emoción de mi
                viaje!
              </p>
              <div className="testimony-rating">
                <span>⭐⭐⭐⭐⭐</span>

                <p className="testimony-location">
                  {" "}
                  <FaMapMarkerAlt /> Paris
                </p>
              </div>
              <div className="testimony-person">
                <p className="testimony-name">Ana Rojas</p>
                <p className="testimony-year">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposals;
