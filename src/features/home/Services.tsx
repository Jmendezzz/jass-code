import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Workflow, Cloud, Layers, Building2 } from "lucide-react";
import Section from "@/components/molecules/Section";

const servicesIcons = {
    custom: Code2,
    automation: Workflow,
    saas: Cloud,
    consulting: Layers,
    digital: Building2,
};

export default function Services() {
    const { t } = useTranslation();

    const services = [
        { key: "custom" },
        { key: "automation" },
        { key: "saas" },
        { key: "consulting" },
        { key: "digital" },
    ];

    return (
        <Section bgImage="/services-bg.jpg">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-jass-white">{t("services.title")}</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map(({ key }, index) => {
                    const Icon = servicesIcons[key as keyof typeof servicesIcons];
                    return (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <Icon className="w-10 h-10 text-primary mb-4" />
                                    <CardTitle>{t(`services.list.${key}.title`)}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {t(`services.list.${key}.desc`)}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
