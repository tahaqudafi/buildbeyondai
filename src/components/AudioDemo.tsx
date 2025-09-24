import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudioDemoProps {
  className?: string;
}

const AudioDemo = ({ className }: AudioDemoProps) => {
  const [activeTab, setActiveTab] = useState("receptionist");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const demoTabs = [
    {
      id: "receptionist",
      name: "Receptionist",
      description: "Answering calls, booking appointments, handling FAQs",
      script: "Thanks for calling Metro Dental. I can book you in today - may I have your name and preferred time? We accept most insurance plans including BlueCross. I have Tuesday 10:30 or Wednesday 4:00 PM available. What works best for you?",
      duration: "0:32"
    },
    {
      id: "outbound",
      name: "Outbound Sales", 
      description: "Following up on leads, qualifying prospects",
      script: "Hi Sarah, this is the booking line for Home Pro Services. You requested a quote for kitchen renovation yesterday. I can schedule our designer to visit this week - would morning or afternoon work better for you?",
      duration: "0:28"
    },
    {
      id: "reminder",
      name: "Appointment Reminder",
      description: "Confirming appointments, reducing no-shows",
      script: "Hi Mr. Johnson, reminding you of your appointment tomorrow at 2 PM with Dr. Smith. Press 1 to confirm, 2 to reschedule - I can handle that right now. Otherwise, we'll see you tomorrow!",
      duration: "0:25"
    }
  ];

  const activeDemo = demoTabs.find(tab => tab.id === activeTab);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Note: In a real implementation, you would load different audio files
        // For demo purposes, we're using a placeholder
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="text-center mb-8">
        <h3 className="text-display mb-4">Hear It In Action</h3>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto">
          Listen to real conversations powered by our AI voice agents. Each agent is customized for your industry and use case.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {demoTabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-3 transition-all duration-300",
              activeTab === tab.id 
                ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl" 
                : "border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground text-foreground"
            )}
          >
            {tab.name}
          </Button>
        ))}
      </div>

      {/* Demo Player */}
      <Card className="card-elevated max-w-4xl mx-auto bg-gradient-to-br from-background to-secondary/20 border border-primary/20 shadow-xl">
        <div className="text-center mb-6">
          <h4 className="text-xl font-semibold mb-2">{activeDemo?.name} Demo</h4>
          <p className="text-muted-foreground">{activeDemo?.description}</p>
        </div>

        {/* Audio Player */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6 border border-primary/20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Button
              onClick={togglePlay}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-16 h-16 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Volume2 className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{activeDemo?.duration}</span>
            </div>
          </div>

          {/* Waveform Placeholder */}
          <div className="flex items-center justify-center space-x-1 h-12 mb-4">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1 bg-gradient-to-t from-primary/40 to-accent/40 rounded-full transition-all duration-300",
                  isPlaying && i < 20 ? "bg-gradient-to-t from-primary to-accent animate-pulse shadow-sm" : "",
                )}
                style={{ 
                  height: `${Math.random() * 32 + 8}px`,
                  animationDelay: `${i * 50}ms`
                }}
              />
            ))}
          </div>

          {/* Hidden audio element - in real implementation, src would change based on activeTab */}
          <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
            {/* Note: Add actual audio files here */}
            <source src="/audio/demo-placeholder.mp3" type="audio/mpeg" />
          </audio>
        </div>

        {/* Transcript */}
        <div className="bg-gradient-to-r from-secondary/30 to-accent/10 rounded-lg border border-accent/30 p-4 shadow-inner">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mr-2 animate-pulse shadow-sm"></div>
            <span className="text-sm font-medium text-foreground">Live Transcript:</span>
          </div>
          <p className="text-body leading-relaxed italic text-foreground/90">
            "{activeDemo?.script}"
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AudioDemo;