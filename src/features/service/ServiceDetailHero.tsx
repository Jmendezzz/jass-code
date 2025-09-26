import Section from "@/components/molecules/Section";
import { motion } from 'framer-motion'

interface ServiceHeroProps {
    image: string;
    Icon: React.ElementType;
    title: string;
    desc: string;
}

export function ServiceDetailHero({ image, Icon, title, desc }: ServiceHeroProps) {
    return (
        <Section bgImage={image} overlay="bg-gradient-to-t from-jass-black/100 to-transparent">
            <motion.div
                className="text-center text-white space-y-6 relative py-28"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Icon className="w-20 h-20 mx-auto text-jass-white drop-shadow-xl" />
                <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
                    {desc}
                </p>
            </motion.div>
        </Section>
    );
}
