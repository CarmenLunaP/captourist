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
    ...(await import(`../public/messages/${locale}/blog.json`)).default,
    ...(await import(`../public/messages/${locale}/how_it_works.json`)).default,
    ...(await import(`../public/messages/${locale}/proposals`)).default,
    ...(await import(`../public/messages/${locale}/fifteen`)).default,
    ...(await import(`../public/messages/${locale}/about_us.json`)).default,

    ...(await import(`../public/messages/${locale}/wedding`)).default,
    ...(await import(`../public/messages/${locale}/book_now`)).default,


    
    
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
