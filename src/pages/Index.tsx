import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValuePillars from "@/components/ValuePillars";
import AudioDemo from "@/components/AudioDemo";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ValuePillars />

      {/* Audio Demo Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/5 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AudioDemo />
        </div>
      </section>

      <HowItWorks />




      <Footer />
    </div>
  );
};

export default Index;