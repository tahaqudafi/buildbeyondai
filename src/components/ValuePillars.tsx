import { Clock, Phone, Zap, TrendingDown, TrendingUp, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const ValuePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current);
      }
    };
  }, []);
  const statsItems = [
    { icon: Clock, label: t("valuePillars.stats.responseTime.label"), value: t("valuePillars.stats.responseTime.value"), change: t("valuePillars.stats.responseTime.change") },
    { icon: TrendingUp, label: t("valuePillars.stats.conversionRate.label"), value: t("valuePillars.stats.conversionRate.value"), change: t("valuePillars.stats.conversionRate.change") },
    { icon: DollarSign, label: t("valuePillars.stats.costSavings.label"), value: t("valuePillars.stats.costSavings.value"), change: t("valuePillars.stats.costSavings.change") },
  ];

  const pillars = [
    {
      icon: Clock,
      title: t("valuePillars.pillars.alwaysOn.title"),
      description: t("valuePillars.pillars.alwaysOn.description"),
      features: Array.isArray(t("valuePillars.pillars.alwaysOn.features")) ? t("valuePillars.pillars.alwaysOn.features") : []
    },
    {
      icon: TrendingDown,
      title: t("valuePillars.pillars.lowerCost.title"),
      description: t("valuePillars.pillars.lowerCost.description"),
      features: Array.isArray(t("valuePillars.pillars.lowerCost.features")) ? t("valuePillars.pillars.lowerCost.features") : []
    },
    {
      icon: Zap,
      title: t("valuePillars.pillars.revenueReady.title"),
      description: t("valuePillars.pillars.revenueReady.description"),
      features: Array.isArray(t("valuePillars.pillars.revenueReady.features")) ? t("valuePillars.pillars.revenueReady.features") : []
    },
    {
      icon: Phone,
      title: t("valuePillars.pillars.humanLevel.title"),
      description: t("valuePillars.pillars.humanLevel.description"),
      features: Array.isArray(t("valuePillars.pillars.humanLevel.features")) ? t("valuePillars.pillars.humanLevel.features") : []
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-display font-lemonmilk mb-6">
            {t("valuePillars.title")}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            {t("valuePillars.subtitle")}
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto mb-10">
          {statsItems.map((stat, index) => {
            let animationClass = "";
            if (isVisible) {
              if (index === 0) animationClass = "animate-fade-right"; // Left item fades from right to left
              if (index === 1) animationClass = "animate-fade-up"; // Middle item fades up
              if (index === 2) animationClass = "animate-fade-left"; // Right item fades from left to right
            }
            
            return (
              <div key={index} className={`text-center opacity-0 ${animationClass}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-accent font-medium">{stat.change}</div>
              </div>
            );
          })}
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="card-subtle group hover:shadow-lg transition-all duration-1000 hover:scale-105"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: cardsVisible ? `${index * 250}ms` : '0ms'
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-lemonmilk font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="space-y-2 text-sm">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;