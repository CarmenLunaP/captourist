// src/app/[locale]/pricing/page.jsx
import Pricing from "../../../components/pricing";
import "../../../styles/pricing.css";
import { useTranslations } from "next-intl";
import FAQ from "@/components/faq";
import Link from "next/link";
import "../../../styles/globals.css";
import Image from "next/image";

export default function Destination() {
  const t = useTranslations("pricing");

  return (
    <div>
      <main>
        <Pricing />

        <div className="containertext">
          <div>
            <p className="pricng-title-2">{t("title-2")}</p>
          </div>

          <div className="containertext-3-4">
            <p>{t("title-3")}</p>
            <Link href="/faq" className="title-4-link">
              {t("title-4")}
            </Link>
          </div>
        </div>

        {/* ------------ */}
        <div className="sec-2-pricing">
          <div className="sec-2-pricing-cards">
            <div className="card-pricing">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Viajes"
                width={310}
                height={275}
              />
              <div className="cards-text">
                {/* <div> */}
                <h3 className="card-title">{t("card1-title-left")}</h3>
                <p className="card-subtitle-pricing">{t("card1-text-left")}</p>
                </div>
                <Link href="/faq" className="card-link-left">
                  {t("card1-text-left-link")}
                </Link>
              {/* </div> */}
            </div>

            <div className="card-pricing">
              <Image
                src="/img/homepagemoment16-600x374.png"
                alt="Viajes"
                width={310}
                height={275}
              />
              <div className="cards-text">
                <h3 className="card-title">{t("card1-title-right")}</h3>
                <p className="card-subtitle-pricing">{t("card1-text-right")}</p>
                <Link href="/faq" className="card-link-right">
                  {t("card1-text-right-link")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------- */}

        <FAQ />

        <div className="containertext">
          <div className="learn-more">
            <p>{t("text-1")}</p>
            <Link href="/booknow" className="learn-more-link">
              {t("text-2")}
            </Link>
          </div>

          <div className="faq-more">
            <p>{t("text-3")}</p>
            <p>{t("text-4")}</p>
            <Link href="/faq" className="faq-more-link">
              {t("text-5")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
