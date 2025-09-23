import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Section from "@/components/molecules/Section";

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <Section bgColor="bg-jass-black text-jass-white dark:bg-muted">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold">{t("cta.title")}</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          {t("cta.subtitle")}
        </p>
        <Button asChild size="lg" className="bg-secondary dark:bg-primary text-secondary-foreground dark:text-secondary hover:bg-secondary/90">
          <Link to="/contact">{t("cta.button")}</Link>
        </Button>
      </motion.div>
    </Section>
  );
}
