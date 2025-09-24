import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";

interface ServiceDescriptionProps {
    title: string;
    longDescription: string;
}

export function ServiceDetailDescription({ title, longDescription }: ServiceDescriptionProps) {
    return (
        <Section bgColor="bg-jass-black">
            <motion.div
                className="max-w-4xl mx-auto space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-extrabold text-jass-white mb-4">
                    {title}
                </h2>
                <p className="text-lg text-jass-white leading-relaxed">
                    {longDescription}
                </p>
            </motion.div>
        </Section>
    );
}
