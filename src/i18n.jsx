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


// src/i18n.jsx


import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../public/messages/${locale}.json`)).default,
  };
});
