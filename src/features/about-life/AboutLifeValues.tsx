import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { Heart, Users, Rocket, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

const valueIcons = {
    passion: Heart,
    collaboration: Users,
    innovation: Rocket,
    creativity: Lightbulb,
};

export function AboutLifeValues() {
    const { t } = useTranslation();

    const values = Object.keys(valueIcons) as Array<
        keyof typeof valueIcons
    >;

    return (
        <Section bgColor="bg-muted">
            <motion.div
                className="max-w-6xl mx-auto text-center space-y-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-extrabold">
                    {t("aboutLife.values.title")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {values.map((key, i) => {
                        const Icon = valueIcons[key];
                        return (
                            <motion.div
                                key={i}
                                className="bg-background p-6 rounded-2xl shadow hover:shadow-lg transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">
                                    {t(`aboutLife.values.list.${key}.title`)}
                                </h3>
                                <p className="text-muted-foreground">
                                    {t(`aboutLife.values.list.${key}.desc`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </Section>
    );
}
