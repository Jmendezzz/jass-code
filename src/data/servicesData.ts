import {
    Code,
    Workflow,
    Cloud,
    Layers,
    Building,
} from "lucide-react";

export type ServiceKey =
    | "custom"
    | "automation"
    | "saas"
    | "consulting"
    | "digital";

interface ServiceContent {
    title: string;
    desc: string;
    longDescription: string;
    benefits: string[];
    cta: string;
}

export interface ServiceData {
    key: ServiceKey;
    icon: React.ElementType;
    image: string;
    content: {
        es: ServiceContent;
        en: ServiceContent;
    };
}

export const servicesData: Record<ServiceKey, ServiceData> = {
    custom: {
        key: "custom",
        icon: Code,
        image: "/images/services/custom.jpg",
        content: {
            es: {
                title: "Desarrollo de Software a la Medida",
                desc: "Soluciones personalizadas según las necesidades de cada cliente.",
                longDescription:
                    "Creamos aplicaciones robustas y escalables, diseñadas específicamente para resolver los retos de tu negocio. Nos enfocamos en entender a fondo tus procesos y objetivos para entregar software que realmente genere valor.",
                benefits: [
                    "Código limpio y mantenible",
                    "Arquitecturas escalables y modernas",
                    "Entrega continua con metodologías ágiles",
                ],
                cta: "Habla con nuestros arquitectos",
            },
            en: {
                title: "Custom Software Development",
                desc: "Tailored solutions based on each client’s needs.",
                longDescription:
                    "We build robust and scalable applications, specifically designed to solve your business challenges. Our focus is on deeply understanding your processes and goals to deliver software that truly creates value.",
                benefits: [
                    "Clean and maintainable code",
                    "Modern, scalable architectures",
                    "Continuous delivery with agile methodologies",
                ],
                cta: "Talk to our architects",
            },
        },
    },
    automation: {
        key: "automation",
        icon: Workflow,
        image: "/images/services/automation.jpg",
        content: {
            es: {
                title: "Automatización de Procesos",
                desc: "Eliminación de tareas repetitivas mediante bots y agentes IA.",
                longDescription:
                    "Implementamos soluciones de automatización que optimizan los procesos internos, reducen errores y aumentan la productividad. Desde RPA hasta agentes de IA, integramos tecnología que se adapta a tu negocio.",
                benefits: [
                    "Menos errores humanos",
                    "Mayor productividad del equipo",
                    "Escalabilidad operativa",
                ],
                cta: "Agenda una demo",
            },
            en: {
                title: "Process Automation",
                desc: "Eliminating repetitive tasks with bots and AI agents.",
                longDescription:
                    "We implement automation solutions that optimize internal processes, reduce errors, and increase productivity. From RPA to AI agents, we integrate technology that adapts to your business.",
                benefits: [
                    "Fewer human errors",
                    "Higher team productivity",
                    "Operational scalability",
                ],
                cta: "Schedule a demo",
            },
        },
    },
    saas: {
        key: "saas",
        icon: Cloud,
        image: "/images/services/saas.jpg",
        content: {
            es: {
                title: "Desarrollo de SaaS",
                desc: "Creación de productos escalables accesibles bajo suscripción.",
                longDescription:
                    "Diseñamos plataformas SaaS robustas y seguras, listas para crecer con tu negocio. Desde la concepción hasta el despliegue en la nube, construimos soluciones con experiencias fluidas para miles de usuarios.",
                benefits: [
                    "Arquitecturas cloud-native",
                    "Seguridad y cumplimiento",
                    "Escalabilidad bajo demanda",
                ],
                cta: "Lanza tu SaaS con nosotros",
            },
            en: {
                title: "SaaS Development",
                desc: "Building scalable subscription-based products.",
                longDescription:
                    "We design robust and secure SaaS platforms, ready to grow with your business. From concept to cloud deployment, we build solutions that provide seamless experiences for thousands of users.",
                benefits: [
                    "Cloud-native architectures",
                    "Security and compliance",
                    "On-demand scalability",
                ],
                cta: "Launch your SaaS with us",
            },
        },
    },
    consulting: {
        key: "consulting",
        icon: Layers,
        image: "/images/services/consulting.jpg",
        content: {
            es: {
                title: "Consultoría en Arquitectura de Software",
                desc: "Diseño de sistemas seguros, eficientes y listos para crecer.",
                longDescription:
                    "Acompañamos a tu empresa en la definición de arquitecturas modernas, aplicando buenas prácticas en seguridad, escalabilidad y mantenibilidad. Nos aseguramos de que tus sistemas estén preparados para el futuro.",
                benefits: [
                    "Arquitecturas orientadas a eventos y microservicios",
                    "Buenas prácticas de seguridad",
                    "Eficiencia y resiliencia comprobada",
                ],
                cta: "Solicita una consultoría",
            },
            en: {
                title: "Software Architecture Consulting",
                desc: "Designing secure, efficient, and growth-ready systems.",
                longDescription:
                    "We help your company define modern architectures, applying best practices in security, scalability, and maintainability. We ensure your systems are ready for the future.",
                benefits: [
                    "Event-driven and microservices architectures",
                    "Security best practices",
                    "Proven efficiency and resilience",
                ],
                cta: "Request a consultation",
            },
        },
    },
    digital: {
        key: "digital",
        icon: Building,
        image: "/images/services/digital.jpg",
        content: {
            es: {
                title: "Transformación Digital para PYMES",
                desc: "Acompañamiento integral en la adopción de tecnologías modernas.",
                longDescription:
                    "Guiamos a pequeñas y medianas empresas en su proceso de transformación digital, adoptando tecnologías que optimizan la operación y abren nuevas oportunidades de negocio.",
                benefits: [
                    "Diagnóstico de madurez digital",
                    "Implementación de soluciones prácticas",
                    "Capacitación y acompañamiento",
                ],
                cta: "Empieza tu transformación",
            },
            en: {
                title: "Digital Transformation for SMEs",
                desc: "Comprehensive support in adopting modern technologies.",
                longDescription:
                    "We guide small and medium businesses in their digital transformation process, adopting technologies that optimize operations and open new business opportunities.",
                benefits: [
                    "Digital maturity assessment",
                    "Implementation of practical solutions",
                    "Training and ongoing support",
                ],
                cta: "Start your transformation",
            },
        },
    },
};
