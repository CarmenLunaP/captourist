import { useTranslations } from 'next-intl';
import "../../../styles/aboutus.css"

const AboutUs = () => {
  const t = useTranslations('about_us');

  return (
    <div className="about-us-container">
      {/* Our Company Section */}
      <section className="company-section">
        <h2>{t('title')}</h2>
        <p>{t('text')}</p>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="story-header">
          <span>{t('numero1')}</span>
          <h3>{t('titulo1')}</h3>
        </div>
        <p>{t('text1')}</p>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration-section">
        <h3>{t('inspiracion-title')}</h3>
        <p>{t('inspiracion-text')}</p>
      </section>

      {/* Present Section */}
      <section className="present-section">
        <h3>{t('presente')}</h3>
        <p>{t('presente-text')}</p>
        <p>{t('presente-text1')}</p>
      </section>

      {/* How We Think Section */}
      <section className="how-we-think-section">
        <div className="think-header">
          <span>{t('numero2')}</span>
          <h3>{t('title2')}</h3>
        </div>
        <p>{t('text2')}</p>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="do-header">
          <span>{t('numero3')}</span>
          <h3>{t('title3')}</h3>
        </div>
        <p>{t('text3')}</p>
        <p>{t('text3-1')}</p>
      </section>

      {/* Work With Us Section */}
      <section className="work-with-us-section">
        <div className="work-header">
          <span>{t('numero')}</span>
          <h3>{t('title4')}</h3>
        </div>
        <p>{t('text4')}</p>
        <button>{t('btn-1')}</button>
      </section>
    </div>
  );
};

export default AboutUs;



// "use client"; 

// import "../../../styles/globals.css";

// import { useTranslations } from "next-intl";


// export default function Aboutus() {
//   const t = useTranslations("about_us");

//   return (
//     <div>
//       <main className="about_us-container">
//        <h1>Hola About us</h1>

//       </main>
//     </div>
//   );
// }

