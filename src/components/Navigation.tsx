import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useLanguage } from "../contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible } = useScrollDirection();
  const { t, language, setLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Scroll 100px above the section

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { name: t("footer.companyLinks.aboutUs"), action: () => window.location.href = "/about" },
    { name: t("navigation.contact"), action: () => scrollToSection("get-started") },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/40 transition-transform duration-300 ease-in-out",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:justify-between items-center h-16 relative">
          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <div className="flex-shrink-0 lg:flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none">
            <a href="/" className="flex items-center">
              <img
                src="/images/g37-5.svg"
                alt="Vocalytics Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="nav-link text-sm font-medium px-3 py-2 bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
              {/* Language Switch */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-sm font-medium px-3 py-2 bg-transparent text-black hover:text-white transition-colors"
                style={{ 
                  '--hover-bg': 'rgb(8,97,64)'
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgb(8,97,64)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'ES' : 'EN'}</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "transition-all duration-200",
                isOpen
                  ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/50 mt-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors w-full text-left bg-transparent border-none cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            {/* Mobile Language Switch */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 px-3 py-2 text-base font-medium bg-transparent text-black hover:text-white transition-colors w-full text-left border-none cursor-pointer rounded-md"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(8,97,64)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'Español' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;