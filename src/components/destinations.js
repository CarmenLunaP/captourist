

// pages/destinations.js
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "../styles/destinations.css";

// Imágenes de los destinos
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
  const destinations = t("destinations");
  console.log(destinations);
  console.log(t)

  return (
    <div>
      <div className="destonation-banner">
        <h1>{t("title")}</h1>
        <div className="img-destinations-banner">
          <Image
            src="/img/Destinations.jpg"
            alt="Captourist Destinations"
            width={1140}
            height={300}
            // layout="fill"
            // objectFit="cover"
          />
        </div>
      </div>
      <div>
        <h1>{t("header")}</h1>
        <h2>{t("description")}</h2>
        <p>{t("text1")}</p>
        <p>{t("text2")}</p>
        <h2>{t("title2")}</h2>
        <p>{t("text3")}</p>
      </div>
 
      <div className="destinations-grid">
  {Object.keys(images).map((key) => (
    <div key={key}>
      <Link href={`/destination/${key}`}>
        <Image
          src={images[key]} // Usa la imagen del objeto `images`
          alt={t(key)} // Usa la traducción correspondiente
          width={300}
          height={200}
        />
        <h3>{t(key)}</h3> {/* Muestra el nombre del destino traducido */}
      </Link>
    </div>
  ))}
</div>


      {/* <div className="destinations-grid">
  {Object.keys(images).map((key) => (
    <div key={key}>
      <Image
        src={images[key]} 
        alt={t(key)} 
        width={300}
        height={200}
      />
      <h3>{t(key)}</h3> 
    </div>
  ))}
</div> */}



      {/* <button>{t("requestDestination")}</button> */}
    </div>
  );
}
