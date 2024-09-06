import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../styles/header.css";  // Importa el archivo CSS

export default function Header() {
  return (
    <header className="header">  {/* Usa className para aplicar la clase CSS */}
      {/* Logo */}
      <div className="logo">
        <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={150} height={50} />
      </div>
      
      {/* Navegación */}
      <nav className="nav">
        <Link href="/destinations">
          DESTINOS
        </Link>

        <Link href="/prices">
          PRECIOS
        </Link>

        <Link href="/howitwork">
          CÓMO FUNCIONA
        </Link>

        <Link href="/blog">
          BLOG
        </Link>

        <Link href="/specials">
          ESPECIAL
        </Link>

        <Link href="/english">
          EN
        </Link>
    
        {/* <a href="/prices">PRECIOS</a>
        <a href="/howitwork">CÓMO FUNCIONA</a>
        <a href="/specials">ESPECIAL</a>
        <a href="/english">EN</a> */}
        
      </nav>
    </header>
  );
}

