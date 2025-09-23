import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function ContactForm() {
    const { t } = useTranslation();

    return (
        <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <label className="block mb-2 font-medium">{t("contact.form.name", "Nombre")}</label>
                <Input type="text" placeholder={t("contact.form.namePlaceholder")} required />
            </div>
            <div>
                <label className="block mb-2 font-medium">Email</label>
                <Input type="email" placeholder={t("contact.form.emailPlaceholder")} required />
            </div>
            <div>
                <label className="block mb-2 font-medium">{t("contact.form.message", "Mensaje")}</label>
                <Textarea placeholder={t("contact.form.messagePlaceholder")} rows={5} required />
            </div>
            <Button type="submit" size="lg" className="w-full">
                {t("contact.form.send", "Enviar Mensaje")}
            </Button>
        </motion.form>
    )
}