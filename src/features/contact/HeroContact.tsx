import Section from "@/components/molecules/Section";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroContact() {
    const { t } = useTranslation();

    return (
        <Section bgImage="/contact-hero.jpg">
            <motion.div
                className="text-center text-white space-y-6 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    {t("contact.title")}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                    {t("contact.subtitle")}
                </p>
            </motion.div>
        </Section>
    )
}