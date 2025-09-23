import { Link } from "react-router-dom";
import { Menu, Globe, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../atoms/Logo";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
    const { t, i18n } = useTranslation();

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        if(theme == 'light') setTheme('dark');

        if(theme == 'dark') setTheme('light');
    }


    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className="bg-background border-b border-border px-6 py-2 flex justify-center">
            <div className="container flex justify-between items-center" >
                <Link to="/" className="text-xl font-bold text-primary">
                    <Logo height={100} width={90} />
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/about" className="hover:text-primary">{t("navbar.about")}</Link>
                    <Link to="/services" className="hover:text-primary">{t("navbar.services")}</Link>
                    <Link to="/contact" className="hover:text-primary">{t("navbar.contact")}</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 p-2 hover:text-primary  hover:cursor-pointer">
                                <Globe className="h-5 w-5" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => changeLanguage("es")}>🇪🇸 Español</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeLanguage("en")}>🇬🇧 English</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <button className="flex items-center gap-2 p-2 hover:text-primary  hover:cursor-pointer" onClick={changeTheme}>
                        {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                    </button>
                </div>
            </div>


            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button aria-label="Abrir menú">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-6 p-6">
                        <Link to="/about" className="hover:text-primary">{t("navbar.about")}</Link>
                        <Link to="/services" className="hover:text-primary">{t("navbar.services")}</Link>
                        <Link to="/contact" className="hover:text-primary">{t("navbar.contact")}</Link>


                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 p-2 hover:text-primary hover:cursor-pointer">
                                    <Globe className="h-5 w-5" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => changeLanguage("es")}>🇪🇸 Español</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => changeLanguage("en")}>🇬🇧 English</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
