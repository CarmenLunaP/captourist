 import Image from "next/image";
// import Link from "next/link";
import "../../../styles/globals.css";
import "../../../styles/howitworks.css"

import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa";

export default function How_it_works() {
  const t = useTranslations("how_it_works");

  return (
    <div className="how_it_w-container">
      {/* Left Section */}
      <section className="how_it_w-left-section">
        <div className="left-content">
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
          <button className="book-now-btn">
            {t("book-now")} <FaArrowRight />
          </button>
        </div>
      </section>

     

{/* Right Section */}
<section className="how_it_w-right-section">
        <div className="steps-container">
          {/* Step 1 */}
          <div className="step">
            <Image
              src="/img/Step1.jpg"
              alt="Step 1"
              width={250}
              height={203}
              className="step-image"
            />
            <div className="step-content">
              <h2>01</h2>
              <h3>{t("step1-title")}</h3>
              <p>{t("step1-description")}</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="step">
            <Image
              src="/img/Step2.jpg"
              alt="Step 2"
              width={250}
              height={203}
              className="step-image"
            />
            <div className="step-content">
              <h2>02</h2>
              <h3>{t("step2-title")}</h3>
              <p>{t("step2-description")}</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="step">
            <Image
              src="/img/Step3.jpg"
              alt="Step 3"
              width={250}
              height={203}
              className="step-image"
            />
            <div className="step-content">
              <h2>03</h2>
              <h3>{t("step3-title")}</h3>
              <p>{t("step3-description")}</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="step">
            <Image
              src="/img/Step4.jpg"
              alt="Step 4"
              width={250}
              height={203}
              className="step-image"
            />
            <div className="step-content">
              <h2>04</h2>
              <h3>{t("step4-title")}</h3>
              <p>{t("step4-description")}</p>
            </div>
          </div>
          {/* Step 5 */}
          <div className="step">
            <Image
              src="/img/Step5.jpg"
              alt="Step 5"
              width={250}
              height={203}
              className="step-image"
            />
            <div className="step-content">
              <h2>05</h2>
              <h3>{t("step5-title")}</h3>
              <p>{t("step5-description")}</p>
            </div>
          </div>
          {/* Step 6 */}
          <div className="step">
            <Image
              src="/img/Step6.jpg"
              alt="Step 6"
              width={250}
              height={203}
              className="step-image"
            />
            <div className="step-content">
              <h2>06</h2>
              <h3>{t("step6-title")}</h3>
              <p>{t("step6-description")}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}


// "use client"; 

// import Image from "next/image";
// import Link from "next/link";
// import "../../../styles/globals.css";
// import { useTranslations } from "next-intl";
// import { FaArrowRight } from "react-icons/fa";

// export default function How_it_works() {
//    const t = useTranslations("how_it_works");

//   return (
//     <div>
//       <main className="how_it_w-container">
//         <h1>Hola How it works</h1>
//       </main>
//     </div>
//   );
// }
