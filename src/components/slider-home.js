"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SliderHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Las imágenes que se van a mostrar en el slider
  const images = [
    '/img/homepagemoment16-600x374.png',
    '/img/sesion-trocadero-1024x655.jpg',
    '/img/Venecia-800-600x383.jpg'
  ];

  // Cambiar la imagen automáticamente cada 3 segundos (3000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonte el componente
  }, [images.length]);

  return (
    <div className="slider-container">
      <Image
        src={images[currentIndex]}
        alt={`Captourist slider image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default SliderHome;
