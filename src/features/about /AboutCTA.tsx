import { useTranslation } from "react-i18next";
import Section from "@/components/molecules/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  const { t } = useTranslation();

  return (
    <Section bgColor="bg-jass-black text-jass-white">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t("aboutPage.ctaTitle", "¿Quieres trabajar con nosotros?")}
        </h2>
        <Button asChild size="lg" variant={"secondary"}>
          <Link to="/contact">{t("aboutPage.ctaButton", "Contáctanos")}</Link>
        </Button>
      </div>
    </Section>
  );
}
