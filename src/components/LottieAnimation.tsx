import { useEffect, useRef, useState } from 'react';

interface LottieAnimationProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation = ({
  src,
  className = "w-full h-full",
  loop = true,
  autoplay = true
}: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Load animation data
    fetch(src)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(() => setError(true));
  }, [src]);

  useEffect(() => {
    let animationInstance: any = null;

    const loadLottie = async () => {
      try {
        // Dynamically import lottie-web to avoid build errors if not installed
        const lottie = await import('lottie-web');

        if (containerRef.current && animationData) {
          animationInstance = lottie.default.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop,
            autoplay,
            animationData,
          });
        }
      } catch (error) {
        console.warn('Lottie-web not installed. Install with: npm install lottie-web');
        setError(true);
      }
    };

    if (animationData) {
      loadLottie();
    }

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, [animationData, loop, autoplay]);

  if (error) {
    return (
      <div className={`${className} flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border/50`}>
        <p className="text-muted-foreground text-center">
          Lottie Animation<br />
          <span className="text-sm">Install lottie-web to view</span>
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ maxWidth: '100%', maxHeight: '100%', marginLeft: '20px', marginTop: '5px' }}
    />
  );
};

export default LottieAnimation;