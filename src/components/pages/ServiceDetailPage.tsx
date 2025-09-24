import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { Button } from "@/components/ui/button";
import { servicesData, type ServiceKey } from "@/data/servicesData";

export default function ServiceDetailPage() {
    const { serviceName } = useParams<{ serviceName: ServiceKey }>();
    const { i18n, t } = useTranslation();

    if (!serviceName || !(serviceName in servicesData)) {
        return (
            <Section bgColor="bg-background">
                <div className="text-center py-20">
                    <h2 className="text-3xl font-bold mb-4">
                        {t("services.notFound", "Servicio no encontrado")}
                    </h2>
                    <Button asChild>
                        <Link to="/">{t("services.back", "Volver al inicio")}</Link>
                    </Button>
                </div>
            </Section>
        );
    }

    const { icon: Icon, image, content } = servicesData[serviceName];
    const lang = i18n.language as "es" | "en";
    const { title, desc, longDescription, benefits, cta } = content[lang];

    return (
        <main>
            {/* Hero */}
            <Section bgImage={image}>
                <motion.div
                    className="text-center text-white space-y-6 relative py-28"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Icon className="w-20 h-20 mx-auto text-primary drop-shadow-xl" />
                    <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                        {desc}
                    </p>
                </motion.div>
            </Section>

            {/* Descripción larga */}
            <Section bgColor="bg-jass-black">
                <motion.div
                    className="max-w-4xl mx-auto space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-primary mb-4">
                        {t("services.detailTitle")}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {longDescription}
                    </p>
                </motion.div>
            </Section>

            {/* Beneficios */}
            <Section bgColor="bg-muted">
                <motion.div
                    className="max-w-6xl mx-auto text-center space-y-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-extrabold">{t("services.benefits")}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                className="bg-background rounded-2xl p-6 shadow-md border hover:shadow-lg transition"
                                whileHover={{ scale: 1.03 }}
                            >
                                <span className="block text-lg font-semibold text-primary">
                                    {`0${i + 1}`}
                                </span>
                                <p className="text-muted-foreground mt-2">{b}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* CTA final */}
            <Section bgColor="bg-jass-black">
                <motion.div
                    className="max-w-3xl mx-auto text-center text-white space-y-6 py-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl md:text-4xl font-extrabold drop-shadow">
                        {t("services.ctaDetail.title")}
                    </h3>
                    <p className="text-lg text-gray-200">
                        {t("services.ctaDetail.subtitle")}
                    </p>
                    <Button asChild size="lg" variant="secondary" className="mt-4">
                        <Link to="/contact">{cta}</Link>
                    </Button>
                </motion.div>
            </Section>
        </main>
    );
}
