import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

interface AudioDemoProps {
  className?: string;
}

const AudioDemo = ({ className }: AudioDemoProps) => {
  const [activeTab, setActiveTab] = useState("receptionist");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
    <div ref={sectionRef} className={cn("w-full", className)}>
      <div className="text-center mb-8">
        <motion.h3 
          className="text-display mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          Hear It In Action
        </motion.h3>
        <motion.p 
          className="text-body text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94] 
          }}
        >
          Listen to real conversations powered by our AI voice agents. Each agent is customized for your industry and use case.
        </motion.p>
      </div>

      {/* Tab Navigation */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        {demoTabs.map((tab, index) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.5 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
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
          </motion.div>
        ))}
      </motion.div>

      {/* Demo Player */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
        transition={{ 
          duration: 0.7, 
          delay: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
        whileHover={{ y: -5 }}
      >
        <Card className="card-elevated max-w-4xl mx-auto bg-gradient-to-br from-background to-secondary/20 border border-primary/20 shadow-xl">
          <motion.div 
            className="text-center mb-6"
            key={activeTab} // Re-animate when tab changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-2">{activeDemo?.name} Demo</h4>
            <p className="text-muted-foreground">{activeDemo?.description}</p>
          </motion.div>

          {/* Audio Player */}
          <motion.div 
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 mb-6 border border-primary/20"
            key={`${activeTab}-player`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-16 h-16 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    key={isPlaying ? 'pause' : 'play'}
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-muted-foreground"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Volume2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">{activeDemo?.duration}</span>
              </motion.div>
            </div>

            {/* Waveform Placeholder */}
            <motion.div 
              className="flex items-center justify-center space-x-1 h-12 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "w-1 bg-gradient-to-t from-primary/40 to-accent/40 rounded-full transition-all duration-300",
                    isPlaying && i < 20 ? "bg-gradient-to-t from-primary to-accent animate-pulse shadow-sm" : "",
                  )}
                  style={{ 
                    height: `${Math.random() * 32 + 8}px`,
                    animationDelay: `${i * 50}ms`
                  }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.4 + i * 0.02,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Hidden audio element - in real implementation, src would change based on activeTab */}
            <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
              {/* Note: Add actual audio files here */}
              <source src="/audio/demo-placeholder.mp3" type="audio/mpeg" />
            </audio>
          </motion.div>

          {/* Transcript */}
          <motion.div 
            className="bg-gradient-to-r from-secondary/30 to-accent/10 rounded-lg border border-accent/30 p-4 shadow-inner"
            key={`${activeTab}-transcript`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center mb-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full mr-2 animate-pulse shadow-sm"></div>
              <span className="text-sm font-medium text-foreground">Live Transcript:</span>
            </motion.div>
            <motion.p 
              className="text-body leading-relaxed italic text-foreground/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              "{activeDemo?.script}"
            </motion.p>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

export default AudioDemo;