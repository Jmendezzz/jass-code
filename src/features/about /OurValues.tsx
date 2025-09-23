import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/molecules/Section";

export default function OurValues() {
    const { t } = useTranslation();
    const values = [
        "Innovación",
        "Transparencia",
        "Agilidad",
        "Colaboración",
        "Excelencia",
        "Compromiso",
    ];

    return (
        <Section bgColor="bg-background">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    {t("aboutPage.valuesTitle", "Nuestros Valores")}
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, idx) => (
                    <motion.div
                        key={value}
                        className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <p className="text-muted-foreground">{value}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
