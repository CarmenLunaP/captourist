// src/app/[locale]/pricing/page.jsx
import Pricing from "../../../components/pricing";
import "../../../styles/pricing.css";
import { useTranslations } from "next-intl";
import FAQ from "@/components/faq";

import "../../../styles/globals.css";

export default function Destination() {
  const t = useTranslations("destination");

  return (
    <div>
      <main>
        <Pricing />
        <FAQ />
      </main>
    </div>
  );
}
