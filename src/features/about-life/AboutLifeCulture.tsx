import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { useTranslation } from "react-i18next";

export function AboutLifeCulture() {
    const { t } = useTranslation();
    return (
        <Section bgColor="bg-background">
            <div className="flex flex-col gap-6 items-center md:flex-row   ">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6 flex-1"
                >
                    <h2 className="text-3xl font-extrabold text-primary">
                        {t("aboutLife.culture.title")}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {t("aboutLife.culture.desc1")}

                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        {t("aboutLife.culture.desc2")}

                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/about-life/culture.jpg"
                        alt="Cultura JASS Code"
                        className="w-full max-w-md rounded-[100px_40px_100px_40px] shadow-lg"
                    />
                </motion.div>
            </div>
        </Section>
    );
}
