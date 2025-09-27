import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Phone, Clock, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 100; // Scroll 100px higher than the element
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const trustLogos = [
    { name: "Telnyx", src: "/images/telnyx.svg" },
    { name: "Twilio", src: "/images/twillio.svg" },
    { name: "ElevenLabs", src: "/images/11labs.svg" },
    { name: "Retell", src: "/images/retell.svg" },
    { name: "Gigas", src: "/images/gigas.svg" },
    { name: "OpenRouter", src: "/images/OR.svg" }
  ];

  const statsItems = [
    { icon: Clock, label: "Response Time", value: "<2min", change: "vs 2h avg" },
    { icon: TrendingUp, label: "Conversion Rate", value: "+25%", change: "increase" },
    { icon: DollarSign, label: "Cost Savings", value: "60%", change: "vs human staff" },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <Badge className="inline-flex items-center px-4 py-2 mb-8 bg-primary/20 text-primary border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
              <Phone className="h-4 w-4 mr-2" />
              GDPR Ready • Enterprise Security • 24/7 Support
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-hero mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            AI Voice Agents that{" "}
            <span className="gradient-text">Book More Appointments</span>
            {" "}and{" "}
            <span className="gradient-text">Close More Deals</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            className="text-subheading text-muted-foreground max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            24/7 phone coverage with human-level voice, qualifying leads, handling calls, and syncing your CRM automatically.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="btn-hero text-lg px-8 py-4"
                onClick={() => scrollToSection('get-started')}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="btn-ghost-light text-lg px-8 py-4"
                onClick={() => scrollToSection('hear-it-in-action')}
              >
                <Play className="mr-2 h-5 w-5" />
                Hear a Live Sample
              </Button>
            </motion.div>
          </motion.div>


          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
          >
            <motion.p 
              className="text-sm text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              Powered by enterprise-grade technology
            </motion.p>
            <motion.div 
              className="marquee-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              <div className="marquee-content">
                {/* First set */}
                <div className="marquee-item">
                  {trustLogos.map((logo, index) => (
                    <div
                      key={`set1-${index}`}
                      className="flex items-center justify-center h-14 px-7 border border-border rounded-lg bg-card/80 backdrop-blur-sm whitespace-nowrap flex-shrink-0 shadow-sm mx-4"
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
                {/* Second set */}
                <div className="marquee-item">
                  {trustLogos.map((logo, index) => (
                    <div
                      key={`set2-${index}`}
                      className="flex items-center justify-center h-14 px-7 border border-border rounded-lg bg-card/80 backdrop-blur-sm whitespace-nowrap flex-shrink-0 shadow-sm mx-4"
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;