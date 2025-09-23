import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Section bgColor="bg-background">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            {t("hero.subtitle")}
          </p>
          <div>
            <Button size="lg" className="mt-4">
              {t("hero.button")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/hero.png"
            alt="Empresarios trabajando"
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-lg fade-mask" 
          />
        </motion.div>
      </div>
    </Section>
  );
}
