// middleware.js
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // Asegúrate de incluir los idiomas que quieres soportar
  locales: ["en", "es"],
  defaultLocale: "en"
});

export const config = {
  // Esto debe coincidir con la estructura de rutas que estás usando
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
