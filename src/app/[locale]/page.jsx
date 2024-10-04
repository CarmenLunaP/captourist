/* eslint-disable @next/next/no-img-element */

import "../../styles/globals.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "../../styles/home.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import SliderHome from "@/components/slider-home";
import SearchInput from "@/components/seachinput";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <main className="container">
        {/* SECCCION 1 */}
        <div className="sec-1-home">
          <div className="secc-1-slider">
            <SliderHome />
          </div>

          <div className="secc-1-texto">
            <h1 className="sec-1-title">{t("sec-1-title")}</h1>
            {/* <h1>{t("sec-1-title1")}</h1> */}
            <h2 className="sec-1-title1">{t("sec-1-text1")}</h2>
            <h2 className="sec-1-title2">{t("sec-1-text2")}</h2>
            <div className="search-input">
              {/* <div className="input-wrapper">
                <FiMapPin className="input-icon" />
                <input
                  type="text"
                  placeholder={t("secc-1-placeholder1")}
                  className="input-field"
                />
              </div> */}
              <SearchInput />
            </div>
          </div>
        </div>

        {/* SECCCION 2 - Bonjour */}
        <div className="sec-2-home">
          <div className="secc-2-Video">
            <Image
              src="/img/pabloyfernanda800x700-600x525.jpg"
              alt="Captourist Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="secc-2-texto">
            <h1 className="sec-2-title">{t("sec-2-title")}</h1>
            {/* <h1>{t("sec-1-title1")}</h1> */}
            <h2 className="sec-2-title1">{t("sec-2-text1")}</h2>
            {/* <h2 className="sec-2-title1">{t("sec-2-text2")}</h2> */}

            <button type="submit" className="newsletter-button">
              {t("sec-2-text-btn1")}
            </button>
          </div>
        </div>

        {/* SECCCION 3 */}
        <div className="sec-3-home">
          <h1 className="sec-3-title">{t("sec-3-title")}</h1>
          <p className="sec-3-subtitle">{t("sec-3-subtitle")}</p>

          <div className="sec-3-cards">
            <div className="card">
              <Image
                src="/img/viajes.jpg"
                alt="Viajes"
                width={300}
                height={300}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card1-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card1-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>

            <div className="card">
              <Image
                src="/img/tu-ciudad.jpg"
                alt="Tu Ciudad"
                width={300}
                height={300}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card2-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card2-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>

            <div className="card">
              <Image
                src="/img/retratos.jpg"
                alt="Retratos"
                width={300}
                height={300}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card3-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card3-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>

            <div className="card">
              <Image
                src="/img/bodas.jpg"
                alt="Boda"
                width={300}
                height={300}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card4-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card4-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>
          </div>
          <div className="sec-3-btn">
            <button type="submit" className="secc-3-btn1">
              {t("sec-3-text-btn1")}
            </button>
            <button type="submit" className="secc-3-btn2">
              {t("sec-3-text-btn2")}
            </button>
          </div>
        </div>

        {/* SECCION 4 - Photographer Guarante  */}
        <div className="sec-4-home">
          <div className="sec-4-content">
            <div className="sec-4-image">
              <Image
                src="/img/pabloyfernanda800x700-600x525.jpg"
                alt="Photographer"
                width={521}
                height={267}
              />
            </div>
            <div className="sec-4-guarantee">
              <Image
                src="/img/logo_pg-guarantee_desktop.png"
                alt="Photographer Guarantee Logo"
                width={125}
                height={40}
              />
              <h1 className="sec-4-title">{t("sec-4-title")}</h1>
              <p className="sec-4-text">{t("sec-4-text1")}</p>
              <button className="sec-4-button"> {t("sec-4-text-btn1")}</button>
            </div>
          </div>
        </div>

        {/* SECCCION 5 - How Captourist Works*/}
        <section className="sec-5-home">
          <div className="sec-5-title">
            <h2>{t("sec-5-title")}</h2>
            <div className="secc-5-text-content">
              <p>{t("sec-5-text1")}</p>
              <a href="#">{t("sec-5-link")} </a>
            </div>
          </div>
          <div className="sec-5-steps">
            <div className="step">
              <h3>01</h3>
              <h4>{t("sec-5-step1-title")}</h4>
              <p>{t("sec-5-step1-text")}</p>
            </div>
            <div className="step">
              <h3>02</h3>
              <h4>{t("sec-5-step2-title")}</h4>
              <p>{t("sec-5-step2-text")}</p>
            </div>
            <div className="step">
              <h3>03</h3>
              <h4>{t("sec-5-step3-title")}</h4>
              <p>{t("sec-5-step3-text")}</p>
            </div>
            <div className="step">
              <h3>04</h3>
              <h4>{t("sec-5-step4-title")}</h4>
              <p>{t("sec-5-step4-text")}</p>
            </div>
          </div>
        </section>

        {/* SECCCION 6 */}
        <div className="sec-6-home">
          <h1 className="sec-6-title">{t("sec-6-title")}</h1>
          <p className="sec-6-subtitle">{t("sec-6-subtitle")}</p>

          <div className="sec-6-cards">
            <div className="card-6">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Viajes"
                width={300}
                height={200}
              />
              <div className="sec-6-cards-text">
                <h3 className="sec-6-card-title">{t("sec-6-card1-title")}</h3>
                <p className="sec-6-card-subtitle">{t("sec-6-card1-text")}</p>
              </div>
              <button className="sec-6-button"> {t("sec-6-text-btn1")}</button>
            </div>

            <div className="card-6">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Viajes"
                width={300}
                height={200}
              />
              <div className="sec-6-cards-text">
                <h3 className="sec-6-card-title">{t("sec-6-card1-title")}</h3>
                <p className="sec-6-card-subtitle">{t("sec-6-card1-text")}</p>
              </div>
              <button className="sec-6-button"> {t("sec-6-text-btn1")}</button>
            </div>

            <div className="card-6">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Viajes"
                width={300}
                height={200}
              />
              <div className="sec-6-cards-text">
                <h3 className="sec-6-card-title">{t("sec-6-card1-title")}</h3>
                <p className="sec-6-card-subtitle">{t("sec-6-card1-text")}</p>
              </div>
              <button className="sec-6-button"> {t("sec-6-text-btn1")}</button>
            </div>
          </div>
        </div>

        {/* SECCCION 7 */}

        <div className="sec-7-home">
          <div className="sec-7-content">
            <div className="sec-7-guarantee">
              <h1 className="sec-7-title">{t("sec-7-title")}</h1>
              <p className="sec-7-text">{t("sec-7-text1")}</p>
              <button className="sec-7-button"> {t("sec-7-text-btn1")}</button>
            </div>

            <div className="sec-7-image">
              <Image
                src="/img/pabloyfernanda800x700-600x525.jpg"
                alt="Photographer"
                width={520}
                height={520}
              />
            </div>
          </div>
        </div>

        {/* SECCCION 8 - Instagram */}

        <div className="sec-8-home">
        <h1 className="sec-8-title">{t("sec-8-title")}</h1>
          <div className="sec-8-content">
          
            <div className="instagram">
              <div className="sec-8-instagram-profile">
                <img
                  href="https://www.instagram.com/hola.captourist/"
                  src="/img/captouris-instagram.jpg"
                  alt="Viajes"
                  width={80}
                  height={70}
                  className="sec-8-instagram-icon"
                />
                <div className="sec-8-captourist">
                  <a
                    href="https://www.instagram.com/hola.captourist/"
                    target="_blank"
                    className="sec-8-instagram-link"
                  >
                    Captourist
                  </a>
                  <a className="sec-8-instagram-audio"
                  target="_blank">
                    Audio Original
                    </a>
                </div>
                <button className="sec-8-button">
                  {" "}
                  {t("sec-8-text-btn1")}
                </button>
              </div>
              <div className="instagram-post">
                <img
                  src="/img/sesion-trocadero-1024x655.jpg"
                  alt="Viajes"
                  width={319}
                  height={549}
                  className="sec-8-instagram-post"
                />
              </div>
            </div>
            
            <div className="instagram">
              <div className="sec-8-instagram-profile">
                <img
                  href="https://www.instagram.com/hola.captourist/"
                  src="/img/captouris-instagram.jpg"
                  alt="Viajes"
                  width={80}
                  height={70}
                  className="sec-8-instagram-icon"
                />
                <div className="sec-8-captourist">
                  <a
                    href="https://www.instagram.com/hola.captourist/"
                    target="_blank"
                    className="sec-8-instagram-link"
                  >
                    Captourist
                  </a>
                  <a className="sec-8-instagram-audio"
                  target="_blank">
                    Audio Original
                    </a>
                </div>
                <button className="sec-8-button">
                  {" "}
                  {t("sec-8-text-btn1")}
                </button>
              </div>
              <div className="instagram-post">
                <img
                  src="/img/sesion-trocadero-1024x655.jpg"
                  alt="Viajes"
                  width={319}
                  height={549}
                  className="sec-8-instagram-post"
                />
              </div>
            </div>

            <div className="instagram">
              <div className="sec-8-instagram-profile">
                <img
                  href="https://www.instagram.com/hola.captourist/"
                  src="/img/captouris-instagram.jpg"
                  alt="Viajes"
                  width={80}
                  height={70}
                  className="sec-8-instagram-icon"
                />
                <div className="sec-8-captourist">
                  <a
                    href="https://www.instagram.com/hola.captourist/"
                    target="_blank"
                    className="sec-8-instagram-link"
                  >
                    Captourist
                  </a>
                  <a className="sec-8-instagram-audio"
                  target="_blank">
                    Audio Original
                    </a>
                </div>
                <button className="sec-8-button"
                >
                  {" "}
                  {t("sec-8-text-btn1")}
                </button>
              </div>
              <div className="instagram-post">
                <img
                  src="/img/sesion-trocadero-1024x655.jpg"
                  alt="Viajes"
                  width={319}
                  height={549}
                  className="sec-8-instagram-post"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SECCIÓN 9 - Testimonios */}
        <div className="sec-9-home">
          <div className="sec-9-content">
            <h1 className="sec-9-title">{t("sec-9-title")}</h1>

            <div className="testimonies">
              <div className="testimony-card">
                <div className="testimony-image">
                  <img
                    src="/img/Venecia-800-600x383.jpg"
                    alt="Testimonio Paris"
                  />
                </div>

                <div className="testimony-text">
                  <p className="testimony-quote">
                    Estoy completamente encantada con las fotos de mi viaje a
                    París 2024, y todo gracias al talentoso equipo de Captouris.
                    Desde el primer contacto, su profesionalismo y pasión por
                    capturar momentos mágicos fueron evidentes. ¡Cada foto es
                    una obra de arte que refleja perfectamente la belleza y la
                    emoción de mi viaje!
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
        </div>

        {/* SECCCION 10 - Partners */}

        <div className="sec-10-home">
          <div className="sec-10-content">
            <h1 className="sec-10-title">{t("sec-10-title")}</h1>
            <p className="sec-10-title">Aqui colocar los logos de los socios</p>
          </div>
        </div>
      </main>
    </div>
  );
}
