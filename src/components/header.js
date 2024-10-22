"use client"; // Esto convierte el componente en un Client Component

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation'; 
import SpecialsDropdown from "../components/specialsDropdown";
import { useState } from 'react'; // Necesitamos el hook useState para el menú móvil
import '../styles/header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú móvil
  const t = useTranslations("header");
  const pathname = usePathname(); 
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';
  const nextLocale = currentLocale === 'en' ? 'es' : 'en';

  // Función para manejar la apertura/cierre del menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú después de seleccionar una opción
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <Link href={`/`}>
            <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={200} height={80} />
          </Link>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}> {/* Añadimos clase 'open' si el menú está abierto */}
          <Link href="/destinations" onClick={closeMenu}>{t('destination')}</Link>
          <Link href="/pricing" onClick={closeMenu}>{t('pricing')}</Link>
          <Link href="/how_it_works" onClick={closeMenu}>{t('howItWork')}</Link>
          <Link href="/blog" onClick={closeMenu}>{t('blog')}</Link>
          <SpecialsDropdown className="splecialdropdown"/>
          <Link href={`/${nextLocale}${pathname.replace(`/${currentLocale}`, '')}`}>
            <button className="language-button" onClick={closeMenu}>
              {currentLocale === 'en' ? 'ES' : 'EN'}
            </button>
          </Link>
        </nav>

        {/* Botón del menú hamburguesa */}
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? 'x' : '☰'} {/* Cambia el icono cuando el menú esté abierto/cerrado */}
        </button>
      </div>
    </header>
  );
}


// "use client"; // Esto convierte el componente en un Client Component

// import Image from 'next/image';
// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation'; 
// import SpecialsDropdown from "../components/specialsDropdown";
// import { useState } from 'react'; // Necesitamos el hook useState para el menú móvil
// import '../styles/header.css';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú móvil
//   const t = useTranslations("header");
//   const pathname = usePathname(); 
//   const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';
//   const nextLocale = currentLocale === 'en' ? 'es' : 'en';

//   // Función para manejar la apertura/cierre del menú
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="container-header">
//         <div className="logo">
//           <Link href={`/`}>
//             <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={200} height={80} />
//           </Link>
//         </div>
//         <nav className={`nav ${menuOpen ? 'open' : ''}`}> {/* Añadimos clase 'open' si el menú está abierto */}
//           <Link href="/destinations">{t('destination')}</Link>
//           <Link href="/pricing">{t('pricing')}</Link>
//           <Link href="/how_it_works">{t('howItWork')}</Link>
//           <Link href="/blog">{t('blog')}</Link>
//           <SpecialsDropdown className="splecialdropdown"/>
//           <Link href={`/${nextLocale}${pathname.replace(`/${currentLocale}`, '')}`}>
//             <button className="language-button">
//               {currentLocale === 'en' ? 'ES' : 'EN'}
//             </button>
//           </Link>
//         </nav>

//         {/* Botón del menú hamburguesa */}
//         <button className="hamburger" onClick={toggleMenu}>
//           {menuOpen ? 'x' : '☰'} {/* Cambia el icono cuando el menú esté abierto/cerrado */}
//         </button>
//       </div>
//     </header>
//   );
// }



// "use client"; // Esto convierte el componente en un Client Component

// import Image from 'next/image';
// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation'; // Importa desde next/navigation
// import SpecialsDropdown from "../components/specialsDropdown";
// import '../styles/header.css';

// export default function Header() {
//   const t = useTranslations("header");
//   const pathname = usePathname(); // Obtiene el path actual

//   // Determina el idioma actual basado en el pathname
//   const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';

//   // Determina el próximo idioma (español o inglés)
//   const nextLocale = currentLocale === 'en' ? 'es' : 'en';

//   return (
//     <header className="header">
//       <div className="container-header">
//         <div className="logo">
//           <Link href={`/`}>
//             <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={150} height={60} />
//           </Link>
//         </div>
//         <nav className="nav">
//           <Link href="/destinations">{t('destination')}</Link>
//           <Link href="/pricing">{t('pricing')}</Link>
//           <Link href="/how-it-works">{t('howItWork')}</Link>
//           <Link href="/blog">{t('blog')}</Link>
//           <SpecialsDropdown />

//           {/* Botón para cambiar de idioma */}
//           <Link href={`/${nextLocale}${pathname.replace(`/${currentLocale}`, '')}`}>
//             <button className="language-button">
//               {currentLocale === 'en' ? 'ES' : 'EN'}
//             </button>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

