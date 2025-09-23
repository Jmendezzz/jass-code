import { NavLink } from "react-router-dom";
import { Menu, Globe, Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import Logo from "../atoms/Logo";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks/useTheme";

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `transition hover:text-primary ${isActive ? "text-primary font-semibold" : "text-foreground"
        }`;

    return (
        <nav className="bg-background border-b border-border px-6 py-2 flex justify-center">
            <div className="container flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold text-primary">
                    <Logo height={100} width={90} />
                </NavLink>

                <div className="hidden md:flex gap-6 items-center">
                    <NavLink to="/about" className={navLinkClasses}>
                        {t("navbar.about")}
                    </NavLink>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-base font-normal hover:text-primary transition">
                                    {t("navbar.services")}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-4 w-[300px] md:w-[500px] md:grid-cols-2">
                                        <NavigationMenuLink asChild>
                                            <NavLink
                                                to="/services/custom"
                                                className="block p-3 rounded-md hover:bg-muted transition"
                                            >
                                                <span className="font-medium">
                                                    {t("services.list.custom.title")}
                                                </span>
                                                <p className="text-sm text-muted-foreground">
                                                    {t("services.list.custom.desc")}
                                                </p>
                                            </NavLink>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <NavLink
                                                to="/services/automation"
                                                className="block p-3 rounded-md hover:bg-muted transition"
                                            >
                                                <span className="font-medium">
                                                    {t("services.list.automation.title")}
                                                </span>
                                                <p className="text-sm text-muted-foreground">
                                                    {t("services.list.automation.desc")}
                                                </p>
                                            </NavLink>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <NavLink
                                                to="/services/saas"
                                                className="block p-3 rounded-md hover:bg-muted transition"
                                            >
                                                <span className="font-medium">
                                                    {t("services.list.saas.title")}
                                                </span>
                                                <p className="text-sm text-muted-foreground">
                                                    {t("services.list.saas.desc")}
                                                </p>
                                            </NavLink>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <NavLink
                                                to="/services/consulting"
                                                className="block p-3 rounded-md hover:bg-muted transition"
                                            >
                                                <span className="font-medium">
                                                    {t("services.list.consulting.title")}
                                                </span>
                                                <p className="text-sm text-muted-foreground">
                                                    {t("services.list.consulting.desc")}
                                                </p>
                                            </NavLink>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <NavLink
                                                to="/services/digital"
                                                className="block p-3 rounded-md hover:bg-muted transition"
                                            >
                                                <span className="font-medium">
                                                    {t("services.list.digital.title")}
                                                </span>
                                                <p className="text-sm text-muted-foreground">
                                                    {t("services.list.digital.desc")}
                                                </p>
                                            </NavLink>
                                        </NavigationMenuLink>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <NavLink to="/contact" className={navLinkClasses}>
                        {t("navbar.contact")}
                    </NavLink>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 p-2 hover:text-primary hover:cursor-pointer">
                                <Globe className="h-5 w-5" />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => changeLanguage("es")}>
                                🇪🇸 Español
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeLanguage("en")}>
                                🇬🇧 English
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <button
                        className="flex items-center gap-2 p-2 hover:text-primary hover:cursor-pointer"
                        onClick={changeTheme}
                    >
                        {theme === "dark" ? (
                            <Moon className="h-5 w-5" />
                        ) : (
                            <Sun className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            <div className="md:hidden flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <button aria-label="Abrir menú">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-6 p-6">
                        <NavLink to="/about" className={navLinkClasses}>
                            {t("navbar.about")}
                        </NavLink>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="services">
                                <AccordionTrigger>{t("navbar.services")}</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2">
                                    <NavLink to="/services/custom" className={navLinkClasses}>
                                        {t("services.list.custom.title")}
                                    </NavLink>
                                    <NavLink to="/services/automation" className={navLinkClasses}>
                                        {t("services.list.automation.title")}
                                    </NavLink>
                                    <NavLink to="/services/saas" className={navLinkClasses}>
                                        {t("services.list.saas.title")}
                                    </NavLink>
                                    <NavLink to="/services/consulting" className={navLinkClasses}>
                                        {t("services.list.consulting.title")}
                                    </NavLink>
                                    <NavLink to="/services/digital" className={navLinkClasses}>
                                        {t("services.list.digital.title")}
                                    </NavLink>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <NavLink to="/contact" className={navLinkClasses}>
                            {t("navbar.contact")}
                        </NavLink>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-2 p-2 hover:text-primary hover:cursor-pointer">
                                    <Globe className="h-5 w-5" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => changeLanguage("es")}>
                                    🇪🇸 Español
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                                    🇬🇧 English
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <button
                            className="flex items-center gap-2 p-2 hover:text-primary hover:cursor-pointer"
                            onClick={changeTheme}
                        >
                            {theme === "dark" ? (
                                <Moon className="h-5 w-5" />
                            ) : (
                                <Sun className="h-5 w-5" />
                            )}
                        </button>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
