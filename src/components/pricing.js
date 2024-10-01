import React from "react";
import { useTranslations } from "next-intl";
import "../styles/pricing.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { SlPicture } from "react-icons/sl";

const Pricing = () => {
  const t = useTranslations("pricing");

  // Definición de los planes de precios directamente desde el archivo JSON
  const plansData = [
    {
      id: "shortStoryteller",
      name: t("plans.shortStoryteller.name"),
      duration: t("plans.shortStoryteller.duration"),
      price: t("plans.shortStoryteller.price"),
      quantity: t("plans.shortStoryteller.quantity"),
      locations: t("plans.shortStoryteller.locations"),
      included: t("plans.shortStoryteller.included"),
    },
    {
      id: "subtleChronicler",
      name: t("plans.subtleChronicler.name"),
      duration: t("plans.subtleChronicler.duration"),
      price: t("plans.subtleChronicler.price"),
      quantity: t("plans.subtleChronicler.quantity"),
      locations: t("plans.subtleChronicler.locations"),
      included: t("plans.subtleChronicler.included"),
    },
    {
      id: "classicSouvenir",
      name: t("plans.classicSouvenir.name"),
      duration: t("plans.classicSouvenir.duration"),
      price: t("plans.classicSouvenir.price"),
      quantity: t("plans.classicSouvenir.quantity"),
      locations: t("plans.classicSouvenir.locations"),
      included: t("plans.classicSouvenir.included"),
    },
    {
      id: "ARompAroundTheCity",
      name: t("plans.ARompAroundTheCity.name"),
      duration: t("plans.ARompAroundTheCity.duration"),
      price: t("plans.ARompAroundTheCity.price"),
      quantity: t("plans.ARompAroundTheCity.quantity"),
      locations: t("plans.ARompAroundTheCity.locations"),
      included: t("plans.ARompAroundTheCity.included"),
    },
  ];

  // Verifica si 'plansData' es un array y tiene elementos
  if (!plansData || !Array.isArray(plansData) || plansData.length === 0) {
    return <p>Error: No se pudieron cargar los planes de precios.</p>;
  }

  return (
    <div className="pricing-container">
      <h2 className="pricing-title">{t("pricingPlans")}</h2>

      <div className="plans">
        {plansData.map((plan) => (
          <div key={plan.id} className="plan">
            <div className="title-services">
              <h3 className="name">{plan.name}</h3>
            </div>
          <div className="services-details">
            <div className="pricing-left-card">
              <p className="dutation-plan"> {plan.duration}</p>
              <p className="price-plan">{plan.price}</p>
            </div>

            <div className="pricing-right-card"> 
              <p>
                <SlPicture className="pricing-icon"/> {plan.quantity}
              </p>
              <p>
                <FiMapPin className="pricing-icon" /> {plan.locations}
              </p>
              <p>
                <HiOutlineDesktopComputer className="pricing-icon" /> {plan.included}
              </p>
            </div>
          </div>
          <button className="pricing-btn">{t("btn-text")}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

// import React from 'react';
// import { useTranslations } from 'next-intl';
// import '../styles/pricing.css';

// const Pricing = () => {
//   const t = useTranslations('pricing');

//   // Definición de los planes de precios directamente desde el archivo JSON
//   const plansData = [
//     {
//       id: "shortStoryteller",
//       name: t('plans.shortStoryteller.name'),
//       duration: t('plans.shortStoryteller.duration'),
//       price: t('plans.shortStoryteller.price'),
//     },
//     {
//       id: "subtleChronicler",
//       name: t('plans.subtleChronicler.name'),
//       duration: t('plans.subtleChronicler.duration'),
//       price: t('plans.subtleChronicler.price'),
//     },
//     {
//       id: "classicSouvenir",
//       name: t('plans.classicSouvenir.name'),
//       duration: t('plans.classicSouvenir.duration'),
//       price: t('plans.classicSouvenir.price'),
//     },
//   ];

//   // Verifica si 'plansData' es un array
//   if (!plansData || !Array.isArray(plansData) || plansData.length === 0) {
//     return <p>Error: No se pudieron cargar los planes de precios.</p>;
//   }

//   return (
//     <div className="pricing-container">
//       <h2>{t('pricingPlans')}</h2>
//       <div className="plans">
//         {plansData.map((plan) => (
//           <div key={plan.id} className="plan">
//             <h3>{plan.name}</h3>
//             <p>{plan.duration}</p>
//             <p>{plan.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;
