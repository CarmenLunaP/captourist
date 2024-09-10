import localFont from "next/font/local";
import "../../styles/globals.css"
import Header from "../../components/header";

export const metadata = {
  title: "Captouris",
  description: "Captourist Web Site",
};

export default function RootLayout({ 
  children,
  params: { locale },
 }) {
  return (
    <html lang={ locale }>
     <body>
      <Header />
        {children}
        <footer> Aqui va el pie de página</footer>
      </body>
     
    </html>
  );
}
