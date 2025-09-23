import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";

export default function WhoWeAre() {
    const { t } = useTranslation();

    return (
        <Section bgColor="bg-background">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <motion.div
                    className="flex-1 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {t("aboutPage.whoTitle", "Quiénes Somos")}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {t(
                            "aboutPage.whoDesc",
                            "En JASS Code ayudamos a empresas y personas a construir software limpio, ágil y escalable..."
                        )}
                    </p>
                </motion.div>

                <motion.div
                    className=""
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/about-us.jpg"
                        alt="Equipo JASS Code"
                        className="w-full max-w-md rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </Section>
    );
}
