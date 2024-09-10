
import "../../styles/globals.css"
import Header from "../../components/header";
import Footer from "../../components/footer"
import pick from "lodash/pick";
import { 
  NextIntlClientProvider,
  useMessages,
 } from "next-intl";


export const metadata = {
  title: "Captouris",
  description: "Captourist Web Site",
};

export default function RootLayout({ 
  children,
  params: { locale },
 }) {
  const messages = useMessages();

  return (
    <html lang={ locale }>
     <body>
      <NextIntlClientProvider messages={pick(messages, "clientCount")}>
         <Header /> 
      </NextIntlClientProvider>
    
        {children}
        <NextIntlClientProvider messages={pick(messages, "clientCount")}>
         <Footer /> 
      </NextIntlClientProvider>
        
        
      </body>
     
    </html>
  );
}
