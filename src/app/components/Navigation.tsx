import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ChangeColor } from "./me/ChangeColor";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  setLanguage: (lang: string) => void;
  currentLanguage: string;
}

export function Navigation({ setLanguage, currentLanguage }: NavigationProps) {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: t("nav.home"), id: "hero" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.skills"), id: "skills" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-[100dvw] z-50 transition-all duration-300 ${
        isScrolled ? "bg-nav backdrop-blur-sm shadow-lg" : "md:bg-transparent bg-nav-mobile"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${isScrolled ? "text-primary" : "text-primary-foreground"} cursor-pointer`}
            onClick={() => scrollToSection("hero")}
          >
            FPC<span className={`${isScrolled ? "text-secondary" : "text-secondary-foreground"}`}>.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${isScrolled ? "text-muted" : "text-muted-foreground"} hover:text-primary transition-colors cursor-pointer`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-muted" : "text-muted-foreground"} `}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(currentLanguage === "es" ? "en" : "es")}
              className={`text-sm font-semibold cursor-pointer ${isScrolled ? "text-muted" : "text-muted-foreground"} hover:text-amber-600 transition-colors`}
            >
              {t("lang_switch." + currentLanguage)}
            </button>
            <ChangeColor
              colorMoon={` ${isScrolled ? "#FFFFFF" : "#000000"}`}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-center justify-around w-full text-left py-2 text-amber-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}