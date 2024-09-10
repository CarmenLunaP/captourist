import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../styles/header.css";  
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="header">
      {/* Contenedor que limita el ancho */}
      <div className="container-header">
        {/* Logo */}
        <div className="logo">
          <Image src="/LOGO-CAPTOURIST-2.png" alt="Captourist Logo" width={150} height={50} />
        </div>

        {/* Navegación */}
        <nav className="nav">
          <Link href="/destinations">{t("destination")}</Link>
          <Link href="/pricing">{t("pricing")}</Link>
          <Link href="/how-it-works">{t("howItWork")}</Link>
          <Link href="/blog">{t("blog")}</Link>
          <Link href="/specials">{t("specials")}</Link>
          <Link href="/english">{t("en")}</Link>
        </nav>
      </div>
    </header>
  );
}

