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
                about: {
                    title: "Quiénes Somos",
                    description:
                        "En JASS Code ayudamos a empresas y personas a construir software limpio, ágil y escalable. Creemos en la tecnología como motor de innovación y crecimiento.",
                    button: "Conoce nuestros servicios",
                },
                aboutPage: {
                    heroTitle: "Acerca de JASS Code",
                    heroSubtitle:
                        "Fusionamos técnica y creatividad para transformar ideas en soluciones digitales.",
                    whoTitle: "Quiénes Somos",
                    whoDesc:
                        "En JASS Code ayudamos a empresas y personas a construir software limpio, ágil y escalable. Nuestro equipo multidisciplinario combina la disciplina del clean code con la fluidez del jazz, logrando soluciones armónicas y únicas.",
                    missionTitle: "Misión",
                    missionDesc:
                        "Impulsar la transformación digital mediante soluciones de software innovadoras, escalables y alineadas con los objetivos estratégicos de nuestros clientes.",
                    visionTitle: "Visión",
                    visionDesc:
                        "Ser reconocidos como una empresa líder en innovación tecnológica, que combina la excelencia técnica con un enfoque humano y estratégico.",
                    valuesTitle: "Nuestros Valores",
                    ctaTitle: "¿Quieres trabajar con nosotros?",
                    ctaButton: "Contáctanos",
                },
                services: {
                    title: "Nuestros Servicios",
                    list: {
                        custom: {
                            title: "Desarrollo de Software a la Medida",
                            desc: "Soluciones personalizadas según las necesidades de cada cliente.",
                        },
                        automation: {
                            title: "Automatización de Procesos",
                            desc: "Eliminación de tareas repetitivas mediante bots y agentes IA.",
                        },
                        saas: {
                            title: "Desarrollo de SaaS",
                            desc: "Creación de productos escalables accesibles bajo suscripción.",
                        },
                        consulting: {
                            title: "Consultoría en Arquitectura de Software",
                            desc: "Diseño de sistemas seguros, eficientes y listos para crecer.",
                        },
                        digital: {
                            title: "Transformación Digital para PYMES",
                            desc: "Acompañamiento integral en la adopción de tecnologías modernas.",
                        },
                    },
                },
                why: {
                    title: "¿Por qué elegir JASS Code?",
                    features: {
                        fusion:
                            "Fusión de técnica y creatividad: combinamos la disciplina del clean code con la fluidez del jazz, logrando soluciones armónicas, eficientes y únicas.",
                        architectures:
                            "Arquitecturas modernas: trabajamos con microservicios, APIs escalables, RPA, SaaS y cloud-native, garantizando que las soluciones estén listas para crecer y adaptarse al futuro.",
                        multisector:
                            "Experiencia multisectorial: nuestra participación en salud, educación, consultoría y fintech nos da una visión integral para aplicar buenas prácticas de distintos sectores.",
                        client:
                            "Enfoque centrado en el cliente: más que software, entregamos soluciones de negocio alineadas con objetivos estratégicos, no solo con requerimientos técnicos.",
                        team:
                            "Equipo multidisciplinario: especialistas en QA, UI/UX, desarrollo móvil, fullstack y arquitectura que cubren todo el ciclo de vida del producto.",
                        agile:
                            "Agilidad y cercanía: aplicamos metodologías ágiles para adaptarnos rápidamente a los cambios, manteniendo una comunicación constante y transparente con el cliente.",
                        impact:
                            "Impacto comprobado: proyectos como MediTrack, EduFlex, U360 Education y CrediYa han demostrado nuestra capacidad para generar valor real y escalable.",
                    },
                },
                cta: {
                    title: "¿Listo para llevar tu software al siguiente nivel?",
                    subtitle:
                        "Hablemos sobre cómo podemos crear soluciones innovadoras para tu negocio.",
                    button: "Contáctanos",
                },
                clients: {
                    title: "Nuestros Clientes",
                },
                team: {
                    title: "Nuestro Equipo",
                    subtitle:
                        "Un equipo multidisciplinario que combina técnica, creatividad y visión de negocio.",
                    members: [
                        {
                            name: "Samuel Berrio Rojas",
                            role: "QA & Automation Engineer",
                            description:
                                "Encargado de la calidad del software, automatización de pruebas y aseguramiento de la estabilidad de los proyectos.",
                        },
                        {
                            name: "Santiago Cardona Sánchez",
                            role: "UI/UX Designer",
                            description:
                                "Responsable del diseño de interfaces y experiencia de usuario en aplicaciones web y móviles.",
                        },
                        {
                            name: "Juan Andrés Posada",
                            role: "Fullstack & Mobile Developer",
                            description:
                                "Desarrollador especializado en aplicaciones móviles y soluciones fullstack.",
                        },
                        {
                            name: "Juan Gerardo Méndez",
                            role: "Software Architect & Technical Lead",
                            description:
                                "Encargado de la arquitectura de software, liderazgo técnico del equipo y acompañamiento en proyectos estratégicos.",
                        },
                    ],
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
                about: {
                    title: "About Us",
                    description:
                        "At JASS Code, we help companies and people build clean, agile, and scalable software. We believe technology is the engine of innovation and growth.",
                    button: "Discover our services",
                },
                aboutPage: {
                    heroTitle: "About JASS Code",
                    heroSubtitle:
                        "We fuse technique and creativity to transform ideas into digital solutions.",
                    whoTitle: "Who We Are",
                    whoDesc:
                        "At JASS Code, we help companies and people build clean, agile, and scalable software. Our multidisciplinary team combines clean code discipline with the fluidity of jazz, creating harmonious and unique solutions.",
                    missionTitle: "Mission",
                    missionDesc:
                        "To drive digital transformation through innovative, scalable software solutions aligned with our clients' strategic goals.",
                    visionTitle: "Vision",
                    visionDesc:
                        "To be recognized as a leading technology innovation company that combines technical excellence with a human and strategic focus.",
                    valuesTitle: "Our Values",
                    ctaTitle: "Want to work with us?",
                    ctaButton: "Contact Us",
                },
                services: {
                    title: "Our Services",
                    list: {
                        custom: {
                            title: "Custom Software Development",
                            desc: "Tailored solutions based on each client’s needs.",
                        },
                        automation: {
                            title: "Process Automation",
                            desc: "Eliminating repetitive tasks with bots and AI agents.",
                        },
                        saas: {
                            title: "SaaS Development",
                            desc: "Building scalable subscription-based products.",
                        },
                        consulting: {
                            title: "Software Architecture Consulting",
                            desc: "Designing secure, efficient, and growth-ready systems.",
                        },
                        digital: {
                            title: "Digital Transformation for SMEs",
                            desc: "Comprehensive support in adopting modern technologies.",
                        },
                    },
                },
                why: {
                    title: "Why Choose JASS Code?",
                    features: {
                        fusion:
                            "Fusion of technique and creativity: we combine clean code discipline with the fluidity of jazz, creating harmonious, efficient, and unique solutions.",
                        architectures:
                            "Modern architectures: we work with microservices, scalable APIs, RPA, SaaS, and cloud-native systems, ensuring solutions are ready to grow and adapt to the future.",
                        multisector:
                            "Multisector experience: our work in healthcare, education, consulting, and fintech gives us a holistic vision to apply best practices from diverse industries.",
                        client:
                            "Client-focused approach: beyond software, we deliver business solutions aligned with strategic goals, not just technical requirements.",
                        team:
                            "Multidisciplinary team: specialists in QA, UI/UX, mobile, fullstack, and architecture cover the entire product lifecycle.",
                        agile:
                            "Agility and closeness: we use agile methodologies to quickly adapt to change while maintaining constant, transparent communication.",
                        impact:
                            "Proven impact: projects like MediTrack, EduFlex, U360 Education, and CrediYa showcase our ability to generate real, scalable value.",
                    },
                },
                cta: {
                    title: "Ready to take your software to the next level?",
                    subtitle:
                        "Let's talk about how we can create innovative solutions for your business.",
                    button: "Contact Us",
                },
                clients: {
                    title: "Our Clients",
                },
                team: {
                    title: "Our Team",
                    subtitle:
                        "A multidisciplinary team that combines technique, creativity, and business vision.",
                    members: [
                        {
                            name: "Samuel Berrio Rojas",
                            role: "QA & Automation Engineer",
                            description:
                                "Responsible for software quality, test automation, and ensuring project stability.",
                        },
                        {
                            name: "Santiago Cardona Sánchez",
                            role: "UI/UX Designer",
                            description:
                                "Responsible for designing interfaces and user experience for web and mobile applications.",
                        },
                        {
                            name: "Juan Andrés Posada",
                            role: "Fullstack & Mobile Developer",
                            description:
                                "Specialized in mobile applications and fullstack solutions.",
                        },
                        {
                            name: "Juan Gerardo Méndez",
                            role: "Software Architect & Technical Lead",
                            description:
                                "In charge of software architecture, technical leadership, and guidance in strategic projects.",
                        },
                    ],
                },
            },
        },
    },
    lng: "es",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;
