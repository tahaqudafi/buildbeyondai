import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Security", href: "/security" },
    { name: "Contact", href: "/contact" },
    { name: "Book Demo", href: "/book-demo" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Policy", href: "/legal/cookies" },
    { name: "DPA", href: "/legal/dpa" },
    { name: "SLA", href: "/legal/sla" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <img
                src="/images/path10.svg"
                alt="Vocalytics Logo"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform your business phone experience with AI voice agents that work 24/7,
              sound completely human, and drive real results.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm mb-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>Barcelona, Spain</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <a href="mailto:taha@buildbeyondai.com" className="hover:text-foreground transition-colors">
                  taha@buildbeyondai.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-secondary/50 hover:bg-secondary rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links - Horizontal */}
          <div className="text-center lg:text-left">
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-4 lg:mb-0">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <button className="text-sm text-foreground font-medium">EN</button>
                <span className="text-muted-foreground">|</span>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">ES</button>
              </div>

              <div className="text-sm text-muted-foreground">
                © 2025 Build Beyond. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;