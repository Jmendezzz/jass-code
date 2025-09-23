
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
        >
            <h2 className="text-2xl font-bold">{t("contact.info.title")}</h2>
            <p className="text-muted-foreground">
                {t("contact.info.desc",)}
            </p>
            <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                <span>contacto@jasscode.com</span>
            </div>
            <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <span>+57 300 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                <span>Armenia, Quindio</span>
            </div>
        </motion.div>
    )
}