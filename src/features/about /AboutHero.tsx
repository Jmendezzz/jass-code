import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";

export default function AboutHero() {
    const { t } = useTranslation();

    return (
        <Section bgImage="/about-hero.jpg">
            <motion.div
                className="text-center text-white space-y-6 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    {t("aboutPage.heroTitle", "Acerca de JASS Code")}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                    {t(
                        "aboutPage.heroSubtitle",
                        "Fusionamos técnica y creatividad para transformar ideas en soluciones digitales."
                    )}
                </p>
            </motion.div>
        </Section>
    );
}
