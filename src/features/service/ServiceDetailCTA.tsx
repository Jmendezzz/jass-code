import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCTAProps {
  title: string;
  subtitle: string;
  cta: string;
}

export function ServiceDetailCTA({ title, subtitle, cta }: ServiceCTAProps) {
  return (
    <Section bgColor="bg-jass-black">
      <motion.div
        className="max-w-3xl mx-auto text-center  space-y-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold drop-shadow">{title}</h3>
        <p className="text-lg text-gray-200">{subtitle}</p>
        <Button asChild size="lg" variant="outline" className="mt-4">
          <Link to="/contact">{cta}</Link>
        </Button>
      </motion.div>
    </Section>
  );
}
