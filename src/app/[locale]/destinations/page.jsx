import Destinations from "../../../components/destinations";
import "../../../styles/destinations.css";
import { useTranslations } from "next-intl";

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
