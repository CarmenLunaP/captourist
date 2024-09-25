
"use client"; 
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import "../styles/destinations.css";
import SearchInput from "@/components/seachinput";
import "../styles/searchinput.css";

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
    </div>
  );
}

// "use client"; // Esto convierte el componente en un Client Component
// import { useState } from "react";
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import "../styles/destinations.css";
// import SearchInput from "@/components/seachinput"
// import   "../styles/searchinput.css"

// // Listado de continentes y sus destinos clave (usamos las llaves para traducir)
// const destinationsByContinent = {
//   Asia: ["singapore", "seoul", "hongkong", "saigon", "istanbul"],
//   Europa: [
//     "verona", "london", "florence", "valencia", "biarritz", "rome", 
//     "barcelona", "madrid", "milan", "paris", "venice"
//   ],
//   America: ["losangeles", "buenosaires", "playadelcarmen"],
//   Africa: ["johannesburg", "marrakech"],
// };

// // Imágenes de los destinos
// const images = {
//   verona: "/img/homepagemoment16-600x374.png",
//   singapore: "/img/homepagemoment16-600x374.png",
//   seoul: "/img/homepagemoment16-600x374.png",
//   hongkong: "/img/homepagemoment16-600x374.png",
//   johannesburg: "/img/homepagemoment16-600x374.png",
//   london: "/img/homepagemoment16-600x374.png",
//   florence: "/img/homepagemoment16-600x374.png",
//   valencia: "/img/homepagemoment16-600x374.png",
//   biarritz: "/img/homepagemoment16-600x374.png",
//   saigon: "/img/homepagemoment16-600x374.png",
//   marrakech: "/img/homepagemoment16-600x374.png",
//   rome: "/img/homepagemoment16-600x374.png",
//   istanbul: "/img/homepagemoment16-600x374.png",
//   losangeles: "/img/homepagemoment16-600x374.png",
//   buenosaires: "/img/homepagemoment16-600x374.png",
//   playadelcarmen: "/img/homepagemoment16-600x374.png",
//   mauritius: "/img/homepagemoment16-600x374.png",
//   barcelona: "/img/homepagemoment16-600x374.png",
//   madrid: "/img/homepagemoment16-600x374.png",
//   milan: "/img/homepagemoment16-600x374.png",
//   paris: "/img/homepagemoment16-600x374.png",
//   venice: "/img/homepagemoment16-600x374.png",
// };

// export default function Destinations() {
//   const t = useTranslations("destination"); // Cargamos las traducciones de "destination"
//   const [activeContinent, setActiveContinent] = useState("Asia"); // Estado para gestionar el continente activo

//   const destinations = destinationsByContinent[activeContinent];
  
//   return (
//     <div className="destination-content">
//       <div className="destonation-banner">
//         <h2 className="destination-title1">{t("title1")}</h2>
//         {/* <div className="img-destinations-banner">
//           <Image
//             src="/img/Destinations.jpg"
//             alt="Captourist Destinations"
//             width={1140}
//             height={300}
//           />
//         </div> */}
//         <div className="destitation-imput">
//         <SearchInput />
//         </div>
//       </div>

//       {/* Pestañas de Continentes */}
//       <h2 className="destination-title-cities">{t("text4")}</h2>
//       <div className="tabs">
//         {Object.keys(destinationsByContinent).map((continent) => (
//           <button
//             key={continent}
//             className={`tab-button ${activeContinent === continent ? "active" : ""}`}
//             onClick={() => setActiveContinent(continent)}
//           >
//             {continent}
//           </button>
//         ))}
//       </div>

//       {/* Mostrar destinos del continente seleccionado */}
//       <div className={`destinations-grid ${destinations.length < 4 ? "few-items" : ""}`}>
//       {destinations.map((destinationKey) => (
//         <div key={destinationKey}>
//           <div className="imagen-destination-content">
//   <Link href={`/destination/${destinationKey}`}>
//     <Image
//       src={images[destinationKey]} 
//       alt={t(destinationKey)} 
//       width={264}
//       height={175}
//       className="city-img"
//     />
//   </Link>
//   </div>
//   <Link href={`/destination/${destinationKey}`}>
//     <h3 className="destination-country">{t(destinationKey)}</h3>
//     <h3 className="destination-city">{t(destinationKey)}</h3>
//     <h3 className="destination-price">{t(destinationKey)}</h3>
//   </Link>
// </div>

// ))}

//       </div>
//     </div>
//   );
// }


// "use client"; // Esto convierte el componente en un Client Component
// import { useState } from "react";
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import "../styles/destinations.css";
// import SearchInput from "@/components/seachinput"
// import   "../styles/searchinput.css"

// // Listado de continentes y sus destinos clave (usamos las llaves para traducir)
// const destinationsByContinent = {
//   Asia: ["singapore", "seoul", "hongkong", "saigon", "istanbul"],
//   Europa: [
//     "verona", "london", "florence", "valencia", "biarritz", "rome", 
//     "barcelona", "madrid", "milan", "paris", "venice"
//   ],
//   America: ["losangeles", "buenosaires", "playadelcarmen"],
//   Africa: ["johannesburg", "marrakech"],
// };

// // Imágenes de los destinos
// const images = {
//   verona: "/img/homepagemoment16-600x374.png",
//   singapore: "/img/homepagemoment16-600x374.png",
//   seoul: "/img/homepagemoment16-600x374.png",
//   hongkong: "/img/homepagemoment16-600x374.png",
//   johannesburg: "/img/homepagemoment16-600x374.png",
//   london: "/img/homepagemoment16-600x374.png",
//   florence: "/img/homepagemoment16-600x374.png",
//   valencia: "/img/homepagemoment16-600x374.png",
//   biarritz: "/img/homepagemoment16-600x374.png",
//   saigon: "/img/homepagemoment16-600x374.png",
//   marrakech: "/img/homepagemoment16-600x374.png",
//   rome: "/img/homepagemoment16-600x374.png",
//   istanbul: "/img/homepagemoment16-600x374.png",
//   losangeles: "/img/homepagemoment16-600x374.png",
//   buenosaires: "/img/homepagemoment16-600x374.png",
//   playadelcarmen: "/img/homepagemoment16-600x374.png",
//   mauritius: "/img/homepagemoment16-600x374.png",
//   barcelona: "/img/homepagemoment16-600x374.png",
//   madrid: "/img/homepagemoment16-600x374.png",
//   milan: "/img/homepagemoment16-600x374.png",
//   paris: "/img/homepagemoment16-600x374.png",
//   venice: "/img/homepagemoment16-600x374.png",
// };

// export default function Destinations() {
//   const t = useTranslations("destination"); // Cargamos las traducciones de "destination"
//   const [activeContinent, setActiveContinent] = useState("Asia"); // Estado para gestionar el continente activo

//   const destinations = destinationsByContinent[activeContinent];
  
//   return (
//     <div className="destination-content">
//       <div className="destonation-banner">
//         <h2 className="destination-title1">{t("title1")}</h2>
//         {/* <div className="img-destinations-banner">
//           <Image
//             src="/img/Destinations.jpg"
//             alt="Captourist Destinations"
//             width={1140}
//             height={300}
//           />
//         </div> */}
//         <div className="destitation-imput">
//         <SearchInput />
//         </div>
//       </div>

//       {/* Pestañas de Continentes */}
//       <h2 className="destination-title-cities">{t("text4")}</h2>
//       <div className="tabs">
//         {Object.keys(destinationsByContinent).map((continent) => (
//           <button
//             key={continent}
//             className={`tab-button ${activeContinent === continent ? "active" : ""}`}
//             onClick={() => setActiveContinent(continent)}
//           >
//             {continent}
//           </button>
//         ))}
//       </div>

//       {/* Mostrar destinos del continente seleccionado */}
//       <div className={`destinations-grid ${destinations.length < 4 ? "few-items" : ""}`}>
//         {destinations.map((destinationKey) => (
//           <div key={destinationKey}>
//             <Link href={`/destination/${destinationKey}`}>
//               <Image
//                 src={images[destinationKey]} 
//                 alt={t(destinationKey)} 
//                 width={264}
//                 height={175}
//                 className="city-img"
//               />
//             </Link>
//             <Link href={`/destination/${destinationKey}`}>
//             <h3 className="destination-country">{t(destinationKey)}</h3>
//             <h3 className="destination-city">{t(destinationKey)}</h3>
//             <h3 className="destination-price">{t(destinationKey)}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// // pages/destinations.js
// import { useTranslations } from "next-intl";
// import Image from "next/image";
// import Link from "next/link";
// import "../styles/destinations.css";

// // Imágenes de los destinos
// const images = {
//   verona: "/img/homepagemoment16-600x374.png",
//   singapore: "/img/homepagemoment16-600x374.png",
//   seoul: "/img/homepagemoment16-600x374.png",
//   hongkong: "/img/homepagemoment16-600x374.png",
//   johannesburg: "/img/homepagemoment16-600x374.png",
//   london: "/img/homepagemoment16-600x374.png",
//   florence: "/img/homepagemoment16-600x374.png",
//   valencia: "/img/homepagemoment16-600x374.png",
//   biarritz: "/img/homepagemoment16-600x374.png",
//   saigon: "/img/homepagemoment16-600x374.png",
//   marrakech: "/img/homepagemoment16-600x374.png",
//   rome: "/img/homepagemoment16-600x374.png",
//   istanbul: "/img/homepagemoment16-600x374.png",
//   losangeles: "/img/homepagemoment16-600x374.png",
//   buenosaires: "/img/homepagemoment16-600x374.png",
//   playadelcarmen: "/img/homepagemoment16-600x374.png",
//   mauritius: "/img/homepagemoment16-600x374.png",
//   barcelona: "/img/homepagemoment16-600x374.png",
//   madrid: "/img/homepagemoment16-600x374.png",
//   milan: "/img/homepagemoment16-600x374.png",
//   paris: "/img/homepagemoment16-600x374.png",
//   venice: "/img/homepagemoment16-600x374.png",
// };

// export default function Destinations() {
//   const t = useTranslations("destination");
//   const destinations = t("destinations");
//   console.log(destinations);
//   console.log(t)

//   return (
//     <div>
//       <div className="destonation-banner">
//         <h1>{t("title")}</h1>
//         <div className="img-destinations-banner">
//           <Image
//             src="/img/Destinations.jpg"
//             alt="Captourist Destinations"
//             width={1140}
//             height={300}
//             // layout="fill"
//             // objectFit="cover"
//           />
//         </div>
//       </div>
//       <div>
//         <h1>{t("header")}</h1>
//         <h2>{t("description")}</h2>
//         <p>{t("text1")}</p>
//         <p>{t("text2")}</p>
//         <h2>{t("title2")}</h2>
//         <p>{t("text3")}</p>
//       </div>
 
//       <div className="destinations-grid">
//   {Object.keys(images).map((key) => (
//     <div key={key}>
//       <Link href={`/destination/${key}`}>
//         <Image
//           src={images[key]} // Usa la imagen del objeto `images`
//           alt={t(key)} // Usa la traducción correspondiente
//           width={300}
//           height={200}
//         />
//         <h3>{t(key)}</h3> {/* Muestra el nombre del destino traducido */}
//       </Link>
//     </div>
//   ))}
// </div>


//       {/* <div className="destinations-grid">
//   {Object.keys(images).map((key) => (
//     <div key={key}>
//       <Image
//         src={images[key]} 
//         alt={t(key)} 
//         width={300}
//         height={200}
//       />
//       <h3>{t(key)}</h3> 
//     </div>
//   ))}
// </div> */}



//       {/* <button>{t("requestDestination")}</button> */}
//     </div>
//   );
// }
