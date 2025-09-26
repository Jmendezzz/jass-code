import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { useTranslation } from "react-i18next";

const images = [
    "/about-life/team1.jpg",
    "/about-life/team2.jpg",
    "/about-life/event1.jpg",
    "/about-life/event2.jpg",
    "/about-life/fun1.jpg",
    "/about-life/fun2.jpg",
    "/about-life/fun3.jpg",
    "/about-life/fun4.jpg",
];

export function AboutLifeGallery() {
    const { t } = useTranslation();
    return (
        <Section bgColor="bg-background">
            <motion.div
                className="max-w-6xl mx-auto text-center space-y-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-extrabold">
                    {t("aboutLife.gallery.title")}
                </h2>

                <div
                    className="
            grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]
          "
                >
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`
                relative overflow-hidden rounded-xl shadow-lg
                hover:scale-[1.02] transition
                ${i === 0 ? "col-span-2 row-span-2" : ""}
                ${i === 3 ? "col-span-2" : ""}
              `}
                        >
                            <img
                                src={img}
                                alt={`Vida en JASS Code ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
