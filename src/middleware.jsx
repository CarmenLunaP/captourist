// middleware.js
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // idiomas que usamos en la aplicacion
  locales: ["en", "es"],
  defaultLocale: "en"
});

export const config = {
  // Importante: Esto debe coincidir con la estructura de rutas que estás usando
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
