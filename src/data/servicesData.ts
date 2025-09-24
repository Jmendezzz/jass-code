import { Code2, Workflow, Cloud, Layers, Building2 } from "lucide-react";

export const servicesData = {
  custom: {
    icon: Code2,
    image: "/services/custom.jpg",
  },
  automation: {
    icon: Workflow,
    image: "/services/automation.jpg",
  },
  saas: {
    icon: Cloud,
    image: "/services/saas.jpg",
  },
  consulting: {
    icon: Layers,
    image: "/services/consulting.jpg",
  },
  digital: {
    icon: Building2,
    image: "/services/digital.jpg",
  },
} as const;

export type ServiceKey = keyof typeof servicesData;
