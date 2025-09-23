import Section from "@/components/molecules/Section";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const photos: string[] = [
    "/team/samuel.jpg",
    "/team/santiago.jpg",
    "/team/juan.jpg",
    "/team/gerard.jpg",
];

export default function OurTeam() {
    const { t } = useTranslation();
    const team = t("team.members", { returnObjects: true }) as {
        name: string;
        role: string;
        description: string;
    }[];

    return (
        <Section bgColor="bg-muted">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">{t("team.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("team.subtitle")}</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, idx) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-card rounded-lg shadow-md p-6 text-center"
                    >
                        <img
                            src={photos[idx]}
                            alt={member.name}
                            className="w-64 h-64 mx-auto rounded-full object-cover mb-4 select-none"
                        />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-sm text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
