import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import "../styles/footer.css";
import { useTranslations } from "next-intl";
import NewsletterForm from "./newsletterform";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footter-up">
          <div className="footter-up-left">
          <div className="fotterUp-link-section">
          <h3 className="Footer-up-right-title"> {t("CaptureMemories")}</h3>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink1")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink2")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink3")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink4")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink5")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink6")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink7")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink8")}</Link>
            <Link href="/Cap" className="footer-link">{t("CapMemoriesLink9")}</Link>
          </div>

          <div className="fotterUp-link-section">
            <h3 className="Footer-up-right-title">{t("PopularDestinations")}</h3>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink1")}</Link>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink2")}</Link>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink3")}</Link>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink4")}</Link>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink5")}</Link>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink6")}</Link>
            <Link href="/Destinations" className="footer-link">{t("PopularDestLink7")}</Link>
          </div>

          <div className="fotterUp-link-section">
            <h3 className="Footer-up-right-title">{t("OurCompany")}</h3>
            <Link href="/History" className="footer-link">{t("OurCompanyLink1")}</Link>
            <Link href="/Contact" className="footer-link">{t("OurCompanyLink2")}</Link>
            <Link href="/TravelShop" className="footer-link">{t("OurCompanyLink3")}</Link>
            <Link href="/Press" className="footer-link">{t("OurCompanyLink4")}</Link>
            <Link href="/BecomePhotographer" className="footer-link">{t("OurCompanyLink5")}</Link>
            <Link href="/PartnerWithUs" className="footer-link">{t("OurCompanyLink6")}</Link>
            <Link href="/Careers" className="footer-link">{t("OurCompanyLink7")}</Link>
            <Link href="/Reviews" className="footer-link">{t("OurCompanyLink8")}</Link>
            <Link href="/FAQ" className="footer-link">{t("OurCompanyLink9")}</Link>
          </div>
         

            <div className="footter-up-right">
              <h3 className="Footer-up-right-title">{t("NewsLetter")}</h3>
              <p className="foorer-up-left-p">{t("NewsLettertext")}</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Donw Footer */}
        <div className="footter-down">
          <div className="logo">
            <Image
              src="/LOGO-CAPTOURIST-2.png"
              alt="Captourist Logo"
              width={150}
              height={50}
            />
          </div>

          <div className="copyright-Polices">
            <div>
              <p> {t("copyright")}</p>
            </div>

            <div className="Polices-links">
              <Link href="/Policies">{t("PrivacyPolicy")}</Link>
              <p>|</p>
              <Link href="/Policies">{t("T&C")}</Link>
              <p>|</p>
              <Link href="/Policies">{t("CancellationPolicy")}</Link>
            </div>
          </div>

          <div className="footter-Right-donw">
            <div>
              <h2 className="hello"> {t("hello")}</h2>
              <h2 className="hello"> {t("text1")}</h2>
            </div>

            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} color="#FFFFFF" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={24} color="#FFFFFF" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} color="#FFFFFF" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterest size={24} color="#FFFFFF" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";

// import React, { useState } from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaPinterest,
// } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";
// import "../styles/footer.css";
// import { useTranslations } from "next-intl";

// export default function Footer() {
//   const t = useTranslations("footer");

//   // State hooks for form inputs
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     // Add your subscription logic here
//     console.log('Name:', name);
//     console.log('Email:', email);
//     // Reset form
//     setName('');
//     setEmail('');
//   };

//   return (
//     <footer className="footer">
//       <div className="footter-up">
//         <div className="footter-up-left">

//           <div className="fotterUp-link-section">
//           <h2> {t("CaptureMemories")}</h2>
//           <Link href="/Cap">{t("CapMemoriesLink1")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink2")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink3")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink4")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink5")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink6")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink7")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink8")}</Link>
//           <Link href="/Cap">{t("CapMemoriesLink9")}</Link>
//           </div>

//           <div className="fotterUp-link-section">
//           <h2>{t("PopularDestinations")}</h2>
//           <Link href="/Destinations">{t("PopularDestLink1")}</Link>
//           <Link href="/Destinations">{t("PopularDestLink2")}</Link>
//           <Link href="/Destinations">{t("PopularDestLink3")}</Link>
//           <Link href="/Destinations">{t("PopularDestLink4")}</Link>
//           <Link href="/Destinations">{t("PopularDestLink5")}</Link>
//           <Link href="/Destinations">{t("PopularDestLink6")}</Link>
//           <Link href="/Destinations">{t("PopularDestLink7")}</Link>
//           </div>

//           <div className="fotterUp-link-section">
//           <h2>{t("OurCompany")}</h2>
//           <Link href="/History">{t("OurCompanyLink1")}</Link>
//           <Link href="/Contact">{t("OurCompanyLink2")}</Link>
//           <Link href="/TravelShop">{t("OurCompanyLink3")}</Link>
//           <Link href="/Press">{t("OurCompanyLink4")}</Link>
//           <Link href="/BecomePhotographer">{t("OurCompanyLink5")}</Link>
//           <Link href="/PartnerWithUs">{t("OurCompanyLink6")}</Link>
//           <Link href="/Careers">{t("OurCompanyLink7")}</Link>
//           <Link href="/Reviews">{t("OurCompanyLink8")}</Link>
//           <Link href="/FAQ">{t("OurCompanyLink9")}</Link>
//           </div>

//           <div className="footter-up-right">
//           <h2>{t("NewsLetter")}</h2>
//           <h3>{t( "NewsLettertext")}</h3>

//           <form onSubmit={handleSubscribe} className="newsletter-form">
//           <input
//             type="text"
//             placeholder={t("NamePlaceholder")}
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder={t("EmailPlaceholder")}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="submit">{t("SubscribeButton")}</button>
//         </form>

//           </div>

//         </div>
//       </div>

//       {/* Donw Footer */}
//       <div className="footter-down">
//         <div className="logo">
//           <Image
//             src="/LOGO-CAPTOURIST-2.png"
//             alt="Captourist Logo"
//             width={150}
//             height={50}
//           />
//         </div>

//         <div className="copyright-Polices">
//           <div>
//             <p> {t("copyright")}</p>
//           </div>

//           <div>
//             <Link href="/Policies">{t("PrivacyPolicy")}</Link>

//             <Link href="/Policies">{t("T&C")}</Link>

//             <Link href="/Policies">{t("CancellationPolicy")}</Link>
//           </div>
//         </div>

//         <div className="footter-Right-donw">
//           <div>
//             <h2> {t("hello")}</h2>
//             <h2> {t("text1")}</h2>
//           </div>

//           <div className="social-icons">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebook size={24} color="#FFFFFF" />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter size={24} color="#FFFFFF" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram size={24} color="#FFFFFF" />
//             </a>
//             <a
//               href="https://pinterest.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaPinterest size={24} color="#FFFFFF" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
