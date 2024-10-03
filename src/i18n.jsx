import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  // Cargar varios archivos de traducción
  const messages = {
    ...(await import(`../public/messages/${locale}/home.json`)).default,
    ...(await import(`../public/messages/${locale}/footer.json`)).default,
    ...(await import(`../public/messages/${locale}/header.json`)).default,
    ...(await import(`../public/messages/${locale}/destination.json`)).default,
    ...(await import(`../public/messages/${locale}/others.json`)).default,
    ...(await import(`../public/messages/${locale}/pricing.json`)).default,
    ...(await import(`../public/messages/${locale}/questions.json`)).default,
  };
 
  return {
    messages
  };
});


// import { getRequestConfig } from "next-intl/server";
// import { notFound } from "next/navigation";

// const locales = ["en", "es"];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale)) {
//     notFound();
//   }

//   return {
//     messages: (await import(`../public/messages/${locale}.json`)).default,
//   };
// });
