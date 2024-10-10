"use client"; 

import "../../../styles/globals.css";

import { useTranslations } from "next-intl";


export default function Aboutus() {
  const t = useTranslations("blog");

  return (
    <div>
      <main className="about_us-container">
       <h1>Hola About us</h1>

      </main>
    </div>
  );
}

