import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <main>
        <h1>{t("title")}</h1>
      </main>
    </div>
  );
}
