import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/atoms/Logo";
import Section from "@/components/molecules/Section";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <Section
            bgColor="bg-background"
            className="flex items-center justify-center min-h-[80vh]"
        >
            <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Logo height={120} width={120} className="mx-auto" />

                <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
                    {t("notFound.title")}
                </h1>
                <p className="text-lg text-muted-foreground">
                    {t("notFound.message")}
                </p>

                <Button asChild>
                    <Link to="/">{t("notFound.button")}</Link>
                </Button>
            </motion.div>
        </Section>
    );
}
