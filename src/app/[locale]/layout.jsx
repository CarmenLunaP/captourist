import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../styles/globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
    title: "Captouris",
    description: "Captourist Web Site",
    keywords: "fotografía, servico de fotografia"

 };

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className="boby">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
