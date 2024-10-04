"use client"; 
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";


import SearchInput from "@/components/seachinput";
import "../styles/searchinput.css";
import TopDestinationsCarousel from "../components/topDestinations"

const destinationsByContinent = {
  Asia: ["singapore", "seoul", "hongkong", "saigon", "istanbul"],
  Europa: ["verona", "london", "florence", "valencia", "biarritz", "rome", "barcelona", "madrid", "milan", "paris", "venice"],
  America: ["losangeles", "buenosaires", "playadelcarmen"],
  Africa: ["johannesburg", "marrakech"],
};

const images = {
  verona: "/img/homepagemoment16-600x374.png",
  singapore: "/img/homepagemoment16-600x374.png",
  seoul: "/img/homepagemoment16-600x374.png",
  hongkong: "/img/homepagemoment16-600x374.png",
  johannesburg: "/img/homepagemoment16-600x374.png",
  london: "/img/homepagemoment16-600x374.png",
  florence: "/img/homepagemoment16-600x374.png",
  valencia: "/img/homepagemoment16-600x374.png",
  biarritz: "/img/homepagemoment16-600x374.png",
  saigon: "/img/homepagemoment16-600x374.png",
  marrakech: "/img/homepagemoment16-600x374.png",
  rome: "/img/homepagemoment16-600x374.png",
  istanbul: "/img/homepagemoment16-600x374.png",
  losangeles: "/img/homepagemoment16-600x374.png",
  buenosaires: "/img/homepagemoment16-600x374.png",
  playadelcarmen: "/img/homepagemoment16-600x374.png",
  mauritius: "/img/homepagemoment16-600x374.png",
  barcelona: "/img/homepagemoment16-600x374.png",
  madrid: "/img/homepagemoment16-600x374.png",
  milan: "/img/homepagemoment16-600x374.png",
  paris: "/img/homepagemoment16-600x374.png",
  venice: "/img/homepagemoment16-600x374.png",
};

export default function Destinations() {
  const t = useTranslations("destination");
  const [activeContinent, setActiveContinent] = useState("Asia");
  
  const destinations = destinationsByContinent[activeContinent];

  return (
    <div className="destination-content">
      <div className="destonation-banner">
        <h2 className="destination-title1">{t("title1")}</h2>
        <div className="destitation-imput">
          <SearchInput />
        </div>
      </div>

      <h2 className="destination-title-cities">{t("text4")}</h2>
      <div className="tabs">
        {Object.keys(destinationsByContinent).map((continent) => (
          <button
            key={continent}
            className={`tab-button ${activeContinent === continent ? "active" : ""}`}
            onClick={() => setActiveContinent(continent)}
          >
            {continent}
          </button>
        ))}
      </div>

      <div className={`destinations-grid ${destinations.length < 4 ? "few-items" : ""}`}>
        {destinations.map((destinationKey) => (
          <div key={destinationKey}>
            <div className="imagen-destination-content">
              <Link href={`/destination/${destinationKey}`}>
                <Image
                  src={images[destinationKey]} 
                  alt={t(`destinations.${destinationKey}.city`)} 
                  width={264}
                  height={175}
                  className="city-img"
                />
              </Link>
            </div>
            <Link href={`/destination/${destinationKey}`}
            className="links-destinations-prices">
              <h3 className="destination-country">{t(`destinations.${destinationKey}.country`)}</h3>
              <h3 className="destination-city">{t(`destinations.${destinationKey}.city`)}</h3>
              <div className="price-prices">
                 <h3 className="destination-price-from">{t(`destinations.${destinationKey}.from`)}</h3>
                 <h3 className="destination-price">{t(`destinations.${destinationKey}.price`)}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="btn-destination-content"> 
      <button className="btn-destination">{t("btntext")}</button>
      </div>

      <div className="carrusel-top-destination">
      <h2 className="destination-title1">{t("topDestination")}</h2>
        <TopDestinationsCarousel/>
      </div>  

    </div>
  );
}
