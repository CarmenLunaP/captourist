import "../../styles/globals.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "../../styles/home.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <main>
        {/* SECCCION 1 */}
        <div className="sec-1-home">
          <div className="secc-1-slider">
            <Image
              src="/img/homepagemoment16-600x374.png"
              alt="Captourist Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="secc-1-texto">
            <h1 className="sec-1-title">{t("sec-1-title")}</h1>
            {/* <h1>{t("sec-1-title1")}</h1> */}
            <h2 className="sec-1-title1">{t("sec-1-text1")}</h2>
            <h2 className="sec-1-title2">{t("sec-1-text2")}</h2>
            <div className="search-input">
              <div className="input-wrapper">
                <FaMapMarkerAlt className="input-icon" />
                <input
                  type="text"
                  placeholder="Busca tu destino preferido..."
                  className="input-field"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECCCION 2 */}
        <div className="sec-2-home">
          <div className="secc-1-slider">
            <Image
              src="/img/homepagemoment16-600x374.png"
              alt="Captourist Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="secc-2-texto">
            <h1 className="sec-1-title">{t("sec-2-title")}</h1>
            {/* <h1>{t("sec-1-title1")}</h1> */}
            <h2 className="sec-1-title1">{t("sec-2-text1")}</h2>
            <h2 className="sec-1-title1">{t("sec-2-text2")}</h2>
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
                src="/img/homepagemoment16-600x374.png"
                alt="Viajes"
                width={300}
                height={200}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card1-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card1-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>

            <div className="card">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Tu Ciudad"
                width={300}
                height={200}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card2-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card2-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>

            <div className="card">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Retratos"
                width={300}
                height={200}
              />
              <h3 className="sec-3-card-title">{t("sec-3-card3-title")}</h3>
              <p className="sec-3-card-subtitle">{t("sec-3-card3-text")}</p>
              <a href="#" className="sec-3-card-link">
                {t("sec-3-card-link")}
              </a>
            </div>

            <div className="card">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Boda"
                width={300}
                height={200}
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

        {/* SECCCION 4 */}

        {/* SECCCION 5 */}

        {/* SECCCION 6 */}
      </main>
    </div>
  );
}
