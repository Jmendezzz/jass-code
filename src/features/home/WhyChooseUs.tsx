import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Section from "@/components/molecules/Section";

export default function WhyChooseUs() {
    const { t } = useTranslation();

    const features = [
        "fusion",
        "architectures",
        "multisector",
        "client",
        "team",
        "agile",
        "impact",
    ];

    return (
        <Section bgColor="bg-background">
            <div className="flex flex-col md:flex-row items-center gap-10">

                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t("why.title")}
                    </h2>

                    <ul className="space-y-4">
                        {features.map((key, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <p className="text-muted-foreground">
                                    {t(`why.features.${key}`)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/whyus.jpg"
                        alt="Equipo innovador de JASS Code"
                        className="w-full max-w-md md:max-w-lg object-contain drop-shadow-lg rounded-xl"
                    />
                </motion.div>
            </div>
        </Section>
    );
}
