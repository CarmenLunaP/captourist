"use client"; // Asegúrate de que este componente sea un Client Component

import React, { useState, useEffect } from 'react';
import "../styles/specialsDropdown.css"; // Agrega tus estilos aquí
import { useTranslations } from 'next-intl';
import { FaChevronDown } from "react-icons/fa";



const SpecialsDropdown = () => {

  const t = useTranslations("SpecialsDropdown");
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a
        className="btn btn-secondary-dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown" // Asegúrate de usar data-bs-toggle
        aria-haspopup="true"
        aria-expanded={isOpen} // Controla la expansión
      >
        {t('specials')} <FaChevronDown />
      </a>

      <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="/specials/proposals">{t('propuestas')}</a>
        <a className="dropdown-item" href="/specials/fifteen">{t('quinceaneras')}</a>
        <a className="dropdown-item" href="/specials/weddings">{t('bodas')}</a>
        <a className="dropdown-item-11"></a> 
      </div>
    </div>
  );
}

export default SpecialsDropdown;


// "use client";
// import React, { useState } from 'react';
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
// import { useRouter } from 'next/navigation';
// import { useTranslations } from 'next-intl';
// import { FaChevronDown } from "react-icons/fa";
// import styled from 'styled-components';
// import Link from 'next/link';
// import "../styles/specialsDropdown.css"

// // Estilo para el DropdownTrigger
// const CustomDropdownTrigger = styled(DropdownTrigger)`
//   background: none !important; /* Sin fondo */
//   border: none !important; /* Sin borde */
  
// `;

// // Estilo para el botón del dropdown
// const CustomDropdownButton = styled(Button)`
//   background: none !important; /* Sin fondo */
//   border: none !important; /* Sin borde */
//   color: black !important; /* Texto en color negro */
//   &:hover {
//     background: none !important; /* Sin fondo en hover */
//   }
//      list-style: none !important; 
// `;

// // Estilo para el contenedor del DropdownMenu
// const DropdownMenuStyled = styled(DropdownMenu)`
//   background-color: white !important; /* Fondo blanco para el contenedor */
//   border: 1px solid lightgray !important; /* Borde gris claro */
//   padding: 0 !important; /* Elimina el padding predeterminado */
//   border-radius: 4px;
//   list-style: none  !important; 
//     margin: 0; /* Elimina el margen por defecto */
// `;

// // Estilo para los ítems del dropdown
// const CustomDropdownItem = styled(DropdownItem)`
// padding: 0 !important; 
//   background-color: white !important; /* Fondo blanco */
//   color: black !important; /* Texto en color negro */
//   font-size: 14px !important; /* Tamaño de fuente 14px */

//   border-radius: 4px; /* Radio de borde para suavizar las esquinas */
//   padding: 8px 16px; /* Espaciado interno */
//   margin: 4px 0; /* Espaciado entre ítems */
//   list-style: none !important; /* Elimina viñetas */
//   text-decoration: none !important; /* Sin subrayado */
//   &:hover {
//     background-color: lightgray !important; /* Fondo gris claro al pasar el mouse */
//   }
//      list-style: none  !important; 
// `;

// const SpecialsDropdown = () => {
//   const t = useTranslations("SpecialsDropdown");
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const handleMouseEnter = () => setIsOpen(true);
//   const handleMouseLeave = () => setIsOpen(false);

//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <Dropdown isOpen={isOpen}>
//         <CustomDropdownTrigger>
//           <CustomDropdownButton auto>{t('specials')}<FaChevronDown /></CustomDropdownButton>
//         </CustomDropdownTrigger>
//         <DropdownMenuStyled>
//           <CustomDropdownItem>
//             <Link className='list-dropdown' href="/quinceaneras">{t('quinceaneras')}</Link>
//           </CustomDropdownItem>
//           <CustomDropdownItem>
//             <Link className='list-dropdown'  href="/propuestas">{t('propuestas')}</Link>
//           </CustomDropdownItem>
//           <CustomDropdownItem>
//             <Link className='list-dropdown' href="/bodas">{t('bodas')}</Link>
//           </CustomDropdownItem>
//         </DropdownMenuStyled>
//       </Dropdown>
//     </div>
//   );
// };

// export default SpecialsDropdown;


