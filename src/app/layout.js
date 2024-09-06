import localFont from "next/font/local";
import "../styles/globals.css"

export const metadata = {
  title: "Captouris",
  description: "Pagina web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer> Aqui va el pie de página</footer>
      </body>
    </html>
  );
}
