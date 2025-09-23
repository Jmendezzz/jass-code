import { Link } from "react-router-dom";
import { Github, Linkedin, LocationEditIcon, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "../atoms/Logo";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-background border-t border-border">
            <div className="container mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-muted-foreground">

                    {/* Columna 1: Logo + descripción */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <Logo height={50} width={45} />
                            <span className="text-xl font-bold text-primary">JASS Code</span>
                        </Link>
                        <p className="leading-relaxed">
                            {t("footer.description", { defaultValue: "Soluciones limpias, ágiles y escalables para empresas modernas." })}
                        </p>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-3">{t("footer.links", { defaultValue: "Enlaces" })}</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:text-primary">{t("footer.about")}</Link></li>
                            <li><Link to="/services" className="hover:text-primary">{t("footer.services")}</Link></li>
                            <li><Link to="/contact" className="hover:text-primary">{t("footer.contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-3">{t("footer.contactTitle", { defaultValue: "Contacto" })}</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <LocationEditIcon className="h-4 w-4" /> Armenia, Quindio
                            </li>              
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> +57 312 2123556
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" /> contacto@jasscode.com
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Redes sociales */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-3">{t("footer.follow", { defaultValue: "Síguenos" })}</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 text-center text-xs text-muted-foreground border-t border-border pt-4">
                    © {new Date().getFullYear()} JASS Code. {t("footer.rights")}
                </div>
            </div>
        </footer>
    );
}
