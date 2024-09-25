import Destinations from "../../../components/destinations";
import "../../../styles/destinations.css";
import { useTranslations } from "next-intl";

import "../../../styles/globals.css";

export default function Destination() {
  const t = useTranslations("destination");

  return (
    <div>
      <main>
        <Destinations />
      </main>
    </div>
  );
}
