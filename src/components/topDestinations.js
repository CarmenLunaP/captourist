import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import '../styles/topDestinations.css'; // Estilos de las cartas y el carrusel

const TopDestinationsCarousel = () => {
  const t = useTranslations('destination.destinations'); // Usamos la clave correcta para destinos
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de destinos top, usando las claves de las traducciones
  const topDestinations = [
    'paris',
    'london',
    'rome',
    'barcelona',
    'istanbul',
    'singapore',
    'losangeles',
    'buenosaires',
    'milan',
    'hongkong'
  ];

  // Mapeo de las imágenes correspondientes a cada destino
  const images = {
    verona: '/img/homepagemoment16-600x374.png',
    singapore: '/img/homepagemoment16-600x374.png',
    seoul: '/img/homepagemoment16-600x374.png',
    hongkong: '/img/homepagemoment16-600x374.png',
    johannesburg: '/img/homepagemoment16-600x374.png',
    london: '/img/homepagemoment16-600x374.png',
    florence: '/img/homepagemoment16-600x374.png',
    valencia: '/img/homepagemoment16-600x374.png',
    biarritz: '/img/homepagemoment16-600x374.png',
    saigon: '/img/homepagemoment16-600x374.png',
    marrakech: '/img/homepagemoment16-600x374.png',
    rome: '/img/homepagemoment16-600x374.png',
    istanbul: '/img/homepagemoment16-600x374.png',
    losangeles: '/img/homepagemoment16-600x374.png',
    buenosaires: '/img/homepagemoment16-600x374.png',
    playadelcarmen: '/img/homepagemoment16-600x374.png',
    mauritius: '/img/homepagemoment16-600x374.png',
    barcelona: '/img/homepagemoment16-600x374.png',
    madrid: '/img/homepagemoment16-600x374.png',
    milan: '/img/homepagemoment16-600x374.png',
    paris: '/img/homepagemoment16-600x374.png',
    venice: '/img/homepagemoment16-600x374.png',
  };

  // Función para mover hacia la izquierda o derecha
  const handleNavigation = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? topDestinations.length - 4 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === topDestinations.length - 4 ? 0 : prevIndex + 1));
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-arrow left-arrow" onClick={() => handleNavigation('left')}>
        {/* &lt; */}
        <IoIosArrowBack />
      </button>
      <div className="carousel">
        {topDestinations.slice(currentIndex, currentIndex + 4).map((destinationKey, index) => (
          <div key={index} className="destination-card">
            <div className="imagen-destination-content">
              <Link href={`/destination/${destinationKey}`}>
                <Image
                  src={images[destinationKey]} // Asignación de la imagen correcta
                  alt={t(`${destinationKey}.city`)}
                  width={264}
                  height={175}
                  className="city-img"
                />
              </Link>
            </div>
            <Link href={`/destination/${destinationKey}`} className="links-destinations-prices">
              <h3 className="destination-country">{t(`${destinationKey}.country`)}</h3>
              <h3 className="destination-city">{t(`${destinationKey}.city`)}</h3>
              <div className="price-prices">
                <h3 className="destination-price-from">{t(`${destinationKey}.from`)}</h3>
                <h3 className="destination-price">{t(`${destinationKey}.price`)}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right-arrow" onClick={() => handleNavigation('right')}>
        {/* &gt; */}
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default TopDestinationsCarousel;

// import React, { useState } from 'react';
// import { useTranslations } from 'next-intl';
// import '../styles/topDestinations.css'; // Estilos de las cartas y el carrusel

// const TopDestinationsCarousel = () => {
//   const t = useTranslations("destination.destinations"); // Usamos la clave correcta para destinos
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Lista de destinos top, usando las claves de las traducciones
//   const topDestinations = [
//     "paris",
//     "london",
//     "rome",
//     "barcelona",
//     "istanbul",
//     "singapore",
//     "losangeles",
//     "buenosaires",
//     "milan",
//     "hongkong"
//   ];

//   // Función para mover hacia la izquierda o derecha
//   const handleNavigation = (direction) => {
//     if (direction === 'left') {
//       setCurrentIndex((prevIndex) => (prevIndex === 0 ? topDestinations.length - 4 : prevIndex - 1));
//     } else {
//       setCurrentIndex((prevIndex) => (prevIndex === topDestinations.length - 4 ? 0 : prevIndex + 1));
//     }
//   };

//   return (
//     <div className="carousel-container">
//       <button className="carousel-arrow left-arrow" onClick={() => handleNavigation('left')}>
//         &lt;
//       </button>
//       <div className="carousel">
//         {topDestinations.slice(currentIndex, currentIndex + 4).map((destinationKey, index) => (
//           <div key={index} className="destination-card">
//             <h3>{t(`${destinationKey}.city`)}</h3>
//             <p>{t(`${destinationKey}.country`)}</p>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-arrow right-arrow" onClick={() => handleNavigation('right')}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default TopDestinationsCarousel;

// import React, { useState } from 'react';
// import '../styles/topDestinations.css'; // Estilos de las cartas y el carrusel

// const topDestinations = [
//   { city: "París", country: "Francia" },
//   { city: "Londres", country: "Reino Unido" },
//   { city: "Roma", country: "Italia" },
//   { city: "Barcelona", country: "España" },
//   { city: "Estambul", country: "Turquía" },
//   { city: "Singapur", country: "Singapur" },
//   { city: "Los Ángeles", country: "Estados Unidos" },
//   { city: "Buenos Aires", country: "Argentina" },
//   { city: "Milán", country: "Italia" },
//   { city: "Hong Kong", country: "China" },
// ];

// const TopDestinationsCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Función para mover hacia la izquierda o derecha
//   const handleNavigation = (direction) => {
//     if (direction === 'left') {
//       setCurrentIndex((prevIndex) => (prevIndex === 0 ? topDestinations.length - 4 : prevIndex - 1));
//     } else {
//       setCurrentIndex((prevIndex) => (prevIndex === topDestinations.length - 4 ? 0 : prevIndex + 1));
//     }
//   };

//   return (
//     <div className="carousel-container">
//       <button className="carousel-arrow left-arrow" onClick={() => handleNavigation('left')}>
//         &lt;
//       </button>
//       <div className="carousel">
//       <button class="carousel-arrow left-arrow"  onClick={() => handleNavigation('right')}></button>
//         {topDestinations.slice(currentIndex, currentIndex + 4).map((destination, index) => (
//           <div key={index} className="destination-card">
//             <h3>{destination.city}</h3>
//             <p>{destination.country}</p>
//           </div>
//         ))}
//       </div>
//       <button className="carousel-arrow right-arrow" onClick={() => handleNavigation('right')}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default TopDestinationsCarousel;
