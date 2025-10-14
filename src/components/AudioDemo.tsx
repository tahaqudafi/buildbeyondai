import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

interface AudioDemoProps {
  className?: string;
}

const AudioDemo = ({ className }: AudioDemoProps) => {
  const [activeTab, setActiveTab] = useState("receptionist");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([0.7]);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const demoTabs = [
    {
      id: "receptionist",
      name: t("audioDemo.tabs.receptionist.name"),
      description: t("audioDemo.tabs.receptionist.description"),
      script: t("audioDemo.tabs.receptionist.script"),
      duration: t("audioDemo.tabs.receptionist.duration"),
      audioFile: "/audio/Dental.mp3"
    },
    {
      id: "outbound",
      name: t("audioDemo.tabs.outbound.name"),
      description: t("audioDemo.tabs.outbound.description"),
      script: t("audioDemo.tabs.outbound.script"),
      duration: t("audioDemo.tabs.outbound.duration"),
      audioFile: "/audio/out bound.mp3"
    }
  ];

  const activeDemo = demoTabs.find(tab => tab.id === activeTab);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Load the correct audio file for the active tab
        audioRef.current.src = activeDemo?.audioFile || "";
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume[0];
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Update audio source when tab changes
  const handleTabChange = (tabId: string) => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setActiveTab(tabId);
  };

  return (
    <div ref={sectionRef} className={cn("w-full", className)}>
      <div className="text-center mb-8">
        <motion.h3
          className="text-display font-lemonmilk mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {t("audioDemo.title")}
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
          {t("audioDemo.subtitle")}
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
              onClick={() => handleTabChange(tab.id)}
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
        <Card className="card-elevated max-w-4xl mx-auto bg-gradient-to-br from-background to-secondary/20 border border-primary/20 shadow-xl p-4 md:p-6">
          <motion.div
            className="text-center mb-6"
            key={activeTab} // Re-animate when tab changes
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-lemonmilk font-semibold mb-2">{activeDemo?.name} Demo</h4>
            <p className="text-muted-foreground">{activeDemo?.description}</p>
          </motion.div>

          {/* Audio Player */}
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 md:p-6 mb-6 border border-primary/20"
            key={`${activeTab}-player`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Mobile Layout */}
            <div className="block md:hidden space-y-4 mb-4">
              {/* Play Button - Centered */}
              <div className="flex justify-center">
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
              </div>

              {/* Duration Display - Centered */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {activeDemo?.duration}
                </span>
              </motion.div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-center space-x-6 mb-4">
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

              {/* Volume Control */}
              <motion.div
                className="flex items-center space-x-3 min-w-[200px]"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMute}
                  className="p-2 hover:bg-primary/10"
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Volume2 className="h-4 w-4 text-accent" />
                  )}
                </Button>
                <Slider
                  value={volume}
                  onValueChange={handleVolumeChange}
                  max={1}
                  step={0.1}
                  className="flex-1"
                />
                <span className="text-sm font-medium text-muted-foreground min-w-[60px]">
                  {activeDemo?.duration}
                </span>
              </motion.div>
            </div>

            {/* Waveform Placeholder */}
            <motion.div
              className="flex items-center justify-center space-x-1 h-12 mb-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    "w-0.5 md:w-1 bg-gradient-to-t from-primary/40 to-accent/40 rounded-full transition-all duration-300",
                    isPlaying && i < 20 ? "bg-gradient-to-t from-primary to-accent animate-pulse shadow-sm" : "",
                    i > 25 ? "hidden md:block" : ""
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

            {/* Audio element */}
            <audio
              ref={audioRef}
              onEnded={() => setIsPlaying(false)}
              onLoadedData={() => {
                if (audioRef.current) {
                  audioRef.current.volume = volume[0];
                  audioRef.current.muted = isMuted;
                }
              }}
            >
              <source src={activeDemo?.audioFile} type="audio/mpeg" />
              Your browser does not support the audio element.
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
              <span className="text-sm font-medium text-foreground">{t("audioDemo.liveTranscript")}</span>
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