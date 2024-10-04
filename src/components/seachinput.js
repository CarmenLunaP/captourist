"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMapPin } from 'react-icons/fi';
import { useTranslations } from 'next-intl';
import Fuse from 'fuse.js'; // Importar Fuse.js
import "../styles/searchinput.css";

// Función para normalizar cadenas (eliminar acentos y convertir a minúsculas)
const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export default function SearchInput() {
  const t = useTranslations('destination-imput');

  // Definición de los destinos con ciudad y país
  const destinationsData = [
    { key: "verona", city: t(`destinations.verona.city`), country: t(`destinations.verona.country`) },
    { key: "singapore", city: t(`destinations.singapore.city`), country: t(`destinations.singapore.country`) },
    { key: "seoul", city: t(`destinations.seoul.city`), country: t(`destinations.seoul.country`) },
    { key: "hongkong", city: t(`destinations.hongkong.city`), country: t(`destinations.hongkong.country`) },
    { key: "johannesburg", city: t(`destinations.johannesburg.city`), country: t(`destinations.johannesburg.country`) },
    { key: "london", city: t(`destinations.london.city`), country: t(`destinations.london.country`) },
    { key: "florence", city: t(`destinations.florence.city`), country: t(`destinations.florence.country`) },
    { key: "valencia", city: t(`destinations.valencia.city`), country: t(`destinations.valencia.country`) },
    { key: "biarritz", city: t(`destinations.biarritz.city`), country: t(`destinations.biarritz.country`) },
    { key: "saigon", city: t(`destinations.saigon.city`), country: t(`destinations.saigon.country`) },
    { key: "marrakech", city: t(`destinations.marrakech.city`), country: t(`destinations.marrakech.country`) },
    { key: "rome", city: t(`destinations.rome.city`), country: t(`destinations.rome.country`) },
    { key: "istanbul", city: t(`destinations.istanbul.city`), country: t(`destinations.istanbul.country`) },
    { key: "losangeles", city: t(`destinations.losangeles.city`), country: t(`destinations.losangeles.country`) },
    { key: "buenosaires", city: t(`destinations.buenosaires.city`), country: t(`destinations.buenosaires.country`) },
    { key: "playadelcarmen", city: t(`destinations.playadelcarmen.city`), country: t(`destinations.playadelcarmen.country`) },
    { key: "mauritius", city: t(`destinations.mauritius.city`), country: t(`destinations.mauritius.country`) },
    { key: "barcelona", city: t(`destinations.barcelona.city`), country: t(`destinations.barcelona.country`) },
    { key: "madrid", city: t(`destinations.madrid.city`), country: t(`destinations.madrid.country`) },
    { key: "milan", city: t(`destinations.milan.city`), country: t(`destinations.milan.country`) },
    { key: "paris", city: t(`destinations.paris.city`), country: t(`destinations.paris.country`) },
    { key: "venice", city: t(`destinations.venice.city`), country: t(`destinations.venice.country`) },
  ];

  // Configuración de Fuse.js para la búsqueda
  const fuse = new Fuse(destinationsData, {
    keys: ['city', 'country'],
    includeScore: true,
    threshold: 0.3, // Permite coincidencias menos precisas
    shouldSort: true,
    findAllMatches: true,
    ignoreLocation: true,
  });

  const [query, setQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      // Normalizar la entrada del usuario
      const normalizedQuery = normalizeString(value);

      const results = fuse.search(normalizedQuery).filter(result => {
        // Filtrar resultados para que coincidan desde el inicio
        const destination = result.item;
        return (
          normalizeString(destination.city).startsWith(normalizedQuery) || 
          normalizeString(destination.country).startsWith(normalizedQuery)
        );
      });
      const destinations = results.map(result => result.item); // Extraemos los destinos de los resultados

      setFilteredDestinations(destinations);
      setShowSuggestions(destinations.length > 0 || !destinations.length); // Mostrar sugerencias si hay resultados
    } else {
      setFilteredDestinations([]);
      setShowSuggestions(false);
    }
  };

  const handleSelect = (destination) => {
    const formattedDestination = destination.key.toLowerCase().replace(/\s+/g, '-');
    router.push(`/destinations/${formattedDestination}`);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFocus = () => {
    if (query) setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const found = destinationsData.find(dest => dest.key === query.toLowerCase().replace(/\s+/g, '-'));
      if (found) {
        router.push(`/destinations/${found.key}`);
      } else {
        router.push('/contacto'); // Redirigir a contacto si no hay coincidencias
      }
    }
  };

  // Agrupamos las ciudades por país
  const groupedDestinations = filteredDestinations.reduce((acc, destination) => {
    const country = destination.country;
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(destination);
    return acc;
  }, {});

  return (
    <div className="search-input">
      <div className={`input-wrapper ${showSuggestions ? 'list-open' : ''}`}>
        <FiMapPin className="input-icon" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={t("search_placeholder")}
          className="input-field"
        />
        {showSuggestions && (
          <ul className="suggestions-list">
            {Object.entries(groupedDestinations).map(([country, destinations]) => (
              <li key={country} className="country-group">
                <strong>{country}</strong> {/* Nombre del país en negrita */}
                <ul>
                  {destinations.map(destination => (
                    <li key={destination.key} onClick={() => handleSelect(destination)}>
                      {destination.city} {/* Muestra solo la ciudad */}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {/* Mostrar la opción de otros destinos de inmediato */}
            {query && !filteredDestinations.length && (
              <li onClick={() => handleSelect({ key: query })}>
                {t(`other_destination`)}: {query} {/* Opción para otro destino */}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

