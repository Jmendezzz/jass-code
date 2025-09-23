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
                hero: {
                    title: "Construimos Software que Inspira Confianza",
                    subtitle: "Soluciones limpias, ágiles y escalables para tu negocio.",
                    button: "Comenzar",
                },
                footer: {
                    rights: "Todos los derechos reservados.",
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
                hero: {
                    title: "We Build Software that Inspires Trust",
                    subtitle: "Clean, agile, and scalable solutions for your business.",
                    button: "Get Started",
                },
                footer: {
                    rights: "All rights reserved.",
                    about: "About",
                    services: "Services",
                    contact: "Contact",
                },
            },
        }

    },

    lng: "es",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
