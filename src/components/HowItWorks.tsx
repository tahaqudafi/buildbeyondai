import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TimelineDemo } from "./TimelineDemo";
import { useLanguage } from "../contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  const steps = [
    {
      step: "01",
      title: "Connect & Configure",
      description: "Connect your phone number and CRM. We'll configure call flows, compliance settings, and voice preferences.",
      timeline: "Week 1",
      details: [
        "Phone number porting or forwarding",
        "CRM integration (Google calendar, Slack, etc.)",
        "Industry-specifics",
        "Compliance & consent setup"
      ]
    },
    {
      step: "02",
      title: "Customize & Train",
      description: "Build custom conversation flows, train the AI with your FAQs, and fine-tune the voice to match your brand.",
      timeline: "Week 2",
      details: [
        "Conversation flow design",
        "FAQ training & responses",
        "Voice tone customization",
        "Integration testing"
      ]
    },
    {
      step: "03",
      title: "Go Live & Monitor",
      description: "Launch your AI voice agent with real-time monitoring, analytics dashboard, and continuous optimization.",
      timeline: "Week 3",
      details: [
        "Soft launch with monitoring",
        "Real-time analytics",
        "Performance optimization",
        "24/7 support & monitoring"
      ]
    }
  ];

  return (
    <section id="contact" className="pb-16 lg:pb-16 bg-secondary/20" style={{ paddingTop: '4rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="inline-flex items-center px-4 py-2 mb-6 bg-accent/20 text-accent border-accent/30 hover:text-white transition-colors duration-200">
            {t("howItWorks.badge")}
          </Badge>
          <h2 className="text-display font-lemonmilk mb-6">
            {t("howItWorks.title")}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            {t("howItWorks.subtitle")}
          </p>
        </div>

        <TimelineDemo />
      </div>
    </section>
  );
};

export default HowItWorks;