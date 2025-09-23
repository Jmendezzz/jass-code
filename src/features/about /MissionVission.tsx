import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Section from "@/components/molecules/Section";

export default function MissionVision() {
    const { t } = useTranslation();

    return (
        <Section bgColor="bg-muted">
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                <motion.div
                    className="p-6 bg-card rounded-lg shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Target className="w-10 h-10 text-primary mb-4 mx-auto md:mx-0" />
                    <h3 className="text-2xl font-bold mb-2">
                        {t("aboutPage.missionTitle", "Misión")}
                    </h3>
                    <p className="text-muted-foreground">
                        {t("aboutPage.missionDesc", "Impulsar la transformación digital...")}
                    </p>
                </motion.div>

                <motion.div
                    className="p-6 bg-card rounded-lg shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Eye className="w-10 h-10 text-primary mb-4 mx-auto md:mx-0" />
                    <h3 className="text-2xl font-bold mb-2">
                        {t("aboutPage.visionTitle", "Visión")}
                    </h3>
                    <p className="text-muted-foreground">
                        {t("aboutPage.visionDesc", "Ser reconocidos como una empresa líder...")}
                    </p>
                </motion.div>
            </div>
        </Section>
    );
}
