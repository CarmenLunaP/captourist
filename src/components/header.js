"use client"; // Esto convierte el componente en un Client Component

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation'; // Importa desde next/navigation
import SpecialsDropdown from "../components/specialsDropdown";
import '../styles/header.css';

export default function Header() {
  const t = useTranslations("header");
  const pathname = usePathname(); // Obtiene el path actual

  // Determina el idioma actual basado en el pathname
  const currentLocale = pathname.startsWith('/en') ? 'en' : 'es';

  // Determina el próximo idioma (español o inglés)
  const nextLocale = currentLocale === 'en' ? 'es' : 'en';

  return (
    <header className="header">
      <div className="container-header">
        <div className="logo">
          <Link href={`/`}>
            <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={150} height={60} />
          </Link>
        </div>
        <nav className="nav">
          <Link href="/destinations">{t('destination')}</Link>
          <Link href="/pricing">{t('pricing')}</Link>
          <Link href="/how-it-works">{t('howItWork')}</Link>
          <Link href="/blog">{t('blog')}</Link>
          <SpecialsDropdown />

          {/* Botón para cambiar de idioma */}
          <Link href={`/${nextLocale}${pathname.replace(`/${currentLocale}`, '')}`}>
            <button className="language-button">
              {currentLocale === 'en' ? 'ES' : 'EN'}
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}


// "use client"; // Esto convierte el componente en un Client Component

// import Image from 'next/image';
// import Link from 'next/link';
// import { useTranslations } from 'next-intl';
// import { usePathname } from 'next/navigation'; // Importa desde next/navigation
// import DropdownMenu from './specialsDropdown';
// import '../styles/header.css';
// import { FaChevronDown } from "react-icons/fa";
// import SpecialsDropdown from "../components/specialsDropdown";

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
//           <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={150} height={60} />
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


