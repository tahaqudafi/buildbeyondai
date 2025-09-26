import { Clock, Phone, Zap, TrendingDown, TrendingUp, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const ValuePillars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    { icon: Clock, label: "Response Time", value: "<2min", change: "vs 2h avg" },
    { icon: TrendingUp, label: "Conversion Rate", value: "+25%", change: "increase" },
    { icon: DollarSign, label: "Cost Savings", value: "35%", change: "vs human staff" },
  ];

  const pillars = [
    {
      icon: Clock,
      title: "Always On",
      description: "Never miss a lead again with 24/7 phone coverage that responds in under 2 minutes.",
      features: ["Instant call pickup", "No hold times", "24/7 availability", "Holiday coverage"]
    },
    {
      icon: TrendingDown,
      title: "Lower Cost",
      description: "Replace or augment call center teams while improving response time and consistency.",
      features: ["30%-45% cost reduction", "No sick days", "Consistent quality", "Instant scaling"]
    },
    {
      icon: Zap,
      title: "Revenue-Ready",
      description: "Qualifies leads, schedules appointments, updates CRM, and triggers automated workflows.",
      features: ["Lead qualification", "Appointment booking", "CRM integration", "Workflow triggers"]
    },
    {
      icon: Phone,
      title: "Human-Level Voice",
      description: "Natural conversation with memory, context, and emotional intelligence that customers trust.",
      features: ["ElevenLabs TTS", "Context awareness", "Emotional responses", "Multiple languages"]
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-display mb-6">
            Why Choose AI Voice Agents?
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            Transform your phone experience with AI that works around the clock,
            sounds completely human, and drives real business results.
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

                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
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