import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";

interface ServiceBenefitsProps {
  title: string;
  benefits: string[];
}

export function ServiceDetailBenefits({ title, benefits }: ServiceBenefitsProps) {
  return (
    <Section bgColor="bg-muted">
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-extrabold">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-2xl p-6 shadow-md border hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <span className="block text-lg font-semibold text-primary">
                {`0${i + 1}`}
              </span>
              <p className="text-muted-foreground mt-2">{b}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
