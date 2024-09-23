// SearchInput.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Asegúrate de que esta importación es correcta
import { FiMapPin } from 'react-icons/fi';
import "../styles/searchinput.css";

const destinations = [
  "Verona",
  "Singapur",
  "Seúl",
  "Hong Kong",
  "Johannesburgo",
  "Londres",
  "Florencia",
  "Valencia",
  "Biarritz",
  "Saigón",
  "Marrakech",
  "Roma",
  "Estambul",
  "Los Ángeles",
  "Buenos Aires",
  "Playa del Carmen",
  "Mauricio",
  "Barcelona",
  "Madrid",
  "Milán",
  "París",
  "Venecia"
];

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      // Filtra las sugerencias para que solo muestre palabras que comienzan con el texto ingresado
      setFilteredDestinations(
        destinations.filter(destination =>
          destination.toLowerCase().startsWith(value.toLowerCase())
        )
      );
      setShowSuggestions(true);
    } else {
      setFilteredDestinations([]);
      setShowSuggestions(false);
    }
  };

  const handleSelect = (destination) => {
    const formattedDestination = destination.toLowerCase().replace(/\s+/g, '-');

    // Verifica si el destino es "Otro destino"
    if (destination.toLowerCase().startsWith("otro destino:")) {
      router.push('/contacto'); // Redirige a la página de contacto
    } else {
      router.push(`/destinations/${formattedDestination}`); // Redirige a la página del destino
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200); // Delay to allow click on suggestion
  };

  const handleFocus = () => {
    if (query) setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const formattedDestination = query.toLowerCase().replace(/\s+/g, '-');
      if (destinations.map(d => d.toLowerCase()).includes(formattedDestination)) {
        router.push(`/destinations/${formattedDestination}`);
      } else {
        router.push('/contacto'); // Redirige a la página de contacto en caso de "Otro destino"
      }
    }
  };

  return (
    <div className="search-input">
      <div className="input-wrapper">
        <FiMapPin className="input-icon" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="Busca el destino"
          className="input-field"
        />
        {showSuggestions && (
          <ul className="suggestions-list">
            {filteredDestinations.map((destination, index) => (
              <li key={index} onClick={() => handleSelect(destination)}>
                {destination}
              </li>
            ))}
            {filteredDestinations.length === 0 && query && (
              <li onClick={() => handleSelect(`Otro destino: ${query}`)}>
                Otro destino: {query}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}


// // SearchInput.js

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Asegúrate de que esta importación es correcta
// import { FiMapPin } from 'react-icons/fi';
// import "../styles/searchinput.css";

// const destinations = [
//   "Verona",
//   "Singapur",
//   "Seúl",
//   "Hong Kong",
//   "Johannesburgo",
//   "Londres",
//   "Florencia",
//   "Valencia",
//   "Biarritz",
//   "Saigón",
//   "Marrakech",
//   "Roma",
//   "Estambul",
//   "Los Ángeles",
//   "Buenos Aires",
//   "Playa del Carmen",
//   "Mauricio",
//   "Barcelona",
//   "Madrid",
//   "Milán",
//   "París",
//   "Venecia"
// ];

// export default function SearchInput() {
//   const [query, setQuery] = useState('');
//   const [filteredDestinations, setFilteredDestinations] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const router = useRouter();

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value) {
//       setFilteredDestinations(
//         destinations.filter(destination =>
//           destination.toLowerCase().includes(value.toLowerCase())
//         )
//       );
//       setShowSuggestions(true);
//     } else {
//       setFilteredDestinations([]);
//       setShowSuggestions(false);
//     }
//   };

//   const handleSelect = (destination) => {
//     const formattedDestination = destination.toLowerCase().replace(/\s+/g, '-');

//     // Verifica si el destino es "Otro destino"
//     if (destination.toLowerCase().startsWith("otro destino:")) {
//       router.push('/contacto'); // Redirige a la página de contacto
//     } else {
//       router.push(`/destinations/${formattedDestination}`); // Redirige a la página del destino
//     }
//   };

//   const handleBlur = () => {
//     setTimeout(() => setShowSuggestions(false), 200); // Delay to allow click on suggestion
//   };

//   const handleFocus = () => {
//     if (query) setShowSuggestions(true);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       const formattedDestination = query.toLowerCase().replace(/\s+/g, '-');
//       if (destinations.map(d => d.toLowerCase()).includes(formattedDestination)) {
//         router.push(`/destinations/${formattedDestination}`);
//       } else {
//         router.push('/contacto'); // Redirige a la página de contacto en caso de "Otro destino"
//       }
//     }
//   };

//   return (
//     <div className="search-input">
//       <div className="input-wrapper">
//         <FiMapPin className="input-icon" />
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange}
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           onKeyDown={handleKeyDown}
//           placeholder="Busca el destino"
//           className="input-field"
//         />
//         {showSuggestions && (
//           <ul className="suggestions-list">
//             {filteredDestinations.map((destination, index) => (
//               <li key={index} onClick={() => handleSelect(destination)}>
//                 {destination}
//               </li>
//             ))}
//             {filteredDestinations.length === 0 && query && (
//               <li onClick={() => handleSelect(`Otro destino: ${query}`)}>
//                 Otro destino: {query}
//               </li>
//             )}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
