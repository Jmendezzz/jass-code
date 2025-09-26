import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { useTranslation } from "react-i18next";

export function AboutLifeHero() {
    const {t} = useTranslation();
    return (
        <Section bgImage="/about-life/hero.jpg"  overlay="bg-black/70 dark:bg-black/60">
            <motion.div
                className="text-center text-white space-y-6 py-32"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
                    {t("aboutLife.hero.title")}
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
                    {t("aboutLife.hero.subtitle")}

                </p>
            </motion.div>
        </Section>
    );
}
