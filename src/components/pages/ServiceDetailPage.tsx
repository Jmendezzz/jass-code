import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "@/components/molecules/Section";
import { Button } from "@/components/ui/button";
import { servicesData, type ServiceKey } from "@/data/servicesData";
import { ServiceDetailHero } from "@/features/service/ServiceDetailHero";
import { ServiceDetailDescription } from "@/features/service/ServiceDetailDescription";
import { ServiceDetailBenefits } from "@/features/service/ServiceDetailBenefits";
import { ServiceDetailCTA } from "@/features/service/ServiceDetailCTA";


export default function ServiceDetailPage() {
    const { serviceName } = useParams<{ serviceName: ServiceKey }>();
    const { i18n, t } = useTranslation();

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

    const { icon: Icon, image, content } = servicesData[serviceName];
    const lang = i18n.language as "es" | "en";
    const { title, desc, longDescription, benefits, cta } = content[lang];

    return (
        <main>
            <ServiceDetailHero image={image} Icon={Icon} title={title} desc={desc} />
            <ServiceDetailDescription title={t("services.detailTitle")} longDescription={longDescription} />
            <ServiceDetailBenefits title={t("services.benefits")} benefits={benefits} />
            <ServiceDetailCTA
                title={t("services.ctaDetail.title")}
                subtitle={t("services.ctaDetail.subtitle")}
                cta={cta}
            />
        </main>
    );
}
