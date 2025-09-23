import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        es: {
            translation: {
                navbar: {
                    about: "Acerca de",
                    services: "Servicios",
                    contact: "Contacto",
                },
            },
        },
        en: {
            translation: {
                navbar: {
                    about: "About",
                    services: "Services",
                    contact: "Contact",
                },
            },
        },
    },
    lng: "es", 
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
