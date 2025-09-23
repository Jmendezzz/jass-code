import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/molecules/Section";

export default function About() {
    const { t } = useTranslation();

    return (
        <Section bgColor="bg-background">
            <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                    className="flex-1 flex justify-center md:justify-start order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/about.jpg"
                        alt="Equipo JASS Code"
                        className="w-full md:max-w-lg object-contain drop-shadow-lg rounded-lg"
                    />
                </motion.div>

                <motion.div
                    className="flex-1 text-center md:text-left space-y-6 order-1 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {t("about.title")}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
                        {t("about.description")}
                    </p>
                    <Button asChild>
                        <Link to="/services">{t("about.button")}</Link>
                    </Button>
                </motion.div>
            </div>
        </Section>

    );
}
