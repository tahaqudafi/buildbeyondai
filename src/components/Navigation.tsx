import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible } = useScrollDirection();

  const navItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/40 transition-transform duration-300 ease-in-out",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src="/src/assets/images/logo.svg"
                alt="Vocalytics Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm font-medium px-3 py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/security"
                className="nav-link text-sm font-medium px-3 py-2 text-muted-foreground"
              >
                Security
              </a>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
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
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/security"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;