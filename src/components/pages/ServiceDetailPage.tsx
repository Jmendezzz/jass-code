import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Section from "@/components/molecules/Section";
import { Button } from "@/components/ui/button";
import { servicesData, type ServiceKey  } from "@/data/servicesData";

export default function ServiceDetailPage() {
  const { serviceName } = useParams<{ serviceName: string }>();
  const { t } = useTranslation(); 

  if (!serviceName || !(serviceName in servicesData)) {
    return (
      <Section bgColor="bg-background">
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4">
            {t("services.notFound", "Servicio no encontrado")}
          </h2>
          <Button asChild>
            <Link to="/">{t("services.back", "Volver al inicio")}</Link>
          </Button>
        </div>
      </Section>
    );
  }

  const { icon: Icon, image } = servicesData[serviceName as ServiceKey];

  return (
    <main>
      <Section bgImage={image}>
        <motion.div
          className="text-center text-white space-y-6 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Icon className="w-16 h-16 mx-auto text-primary drop-shadow-lg" />
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {t(`services.list.${serviceName}.title`)}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {t(`services.list.${serviceName}.desc`)}
          </p>
        </motion.div>
      </Section>

      <Section bgColor="bg-background">
        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">
            {t("services.detailTitle", "Lo que ofrecemos")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t(`services.details.${serviceName}`, "Contenido detallado próximamente.")}
          </p>
          <Button asChild size="lg">
            <Link to="/contact">{t("services.cta.button", "Contáctanos")}</Link>
          </Button>
        </motion.div>
      </Section>
    </main>
  );
}
