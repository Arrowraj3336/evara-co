import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ElevatorTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

// Generate elevator sounds using Web Audio API
const playElevatorSound = (type: "close" | "ding" | "open") => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    if (type === "close") {
      // Mechanical sliding door close sound
      const duration = 0.6;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const noise = ctx.createOscillator();
      const noiseGain = ctx.createGain();
      
      // Low rumble
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(80, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(40, ctx.currentTime + duration);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.02, ctx.currentTime + duration);
      
      // Metallic slide
      noise.type = "square";
      noise.frequency.setValueAtTime(2000, ctx.currentTime);
      noise.frequency.linearRampToValueAtTime(800, ctx.currentTime + duration);
      noiseGain.gain.setValueAtTime(0.015, ctx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0.005, ctx.currentTime + duration);
      
      osc.connect(gain).connect(ctx.destination);
      noise.connect(noiseGain).connect(ctx.destination);
      osc.start(); noise.start();
      osc.stop(ctx.currentTime + duration);
      noise.stop(ctx.currentTime + duration);
      
      // Thud at the end
      setTimeout(() => {
        const thud = ctx.createOscillator();
        const thudGain = ctx.createGain();
        thud.type = "sine";
        thud.frequency.setValueAtTime(60, ctx.currentTime);
        thudGain.gain.setValueAtTime(0.12, ctx.currentTime);
        thudGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        thud.connect(thudGain).connect(ctx.destination);
        thud.start(); thud.stop(ctx.currentTime + 0.15);
      }, duration * 1000 - 50);
    }
    
    if (type === "ding") {
      // Classic elevator ding
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1760, ctx.currentTime); // A6
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(2637, ctx.currentTime); // E7
      
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      
      osc1.connect(gain).connect(ctx.destination);
      osc2.connect(gain);
      osc1.start(); osc2.start();
      osc1.stop(ctx.currentTime + 1.2);
      osc2.stop(ctx.currentTime + 1.2);
    }
    
    if (type === "open") {
      // Door opening sound
      const duration = 0.5;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(40, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + duration);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
      
      osc.connect(gain).connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + duration);
    }
  } catch (e) {
    // Audio not available, silently skip
  }
};

const ElevatorTransition = ({ isActive, onComplete }: ElevatorTransitionProps) => {
  const [phase, setPhase] = useState<"idle" | "closing" | "closed" | "light" | "opening" | "done">("idle");

  const runSequence = useCallback(() => {
    // Phase 1: Doors close
    setPhase("closing");
    playElevatorSound("close");
    
    setTimeout(() => {
      // Phase 2: Doors fully closed
      setPhase("closed");
      
      setTimeout(() => {
        // Phase 3: Light flash in the gap
        setPhase("light");
        playElevatorSound("ding");
        
        setTimeout(() => {
          // Phase 4: Doors open
          setPhase("opening");
          playElevatorSound("open");
          
          setTimeout(() => {
            setPhase("done");
            onComplete();
          }, 600);
        }, 400);
      }, 300);
    }, 700);
  }, [onComplete]);

  useEffect(() => {
    if (isActive && phase === "idle") {
      runSequence();
    }
  }, [isActive, phase, runSequence]);

  // Reset when deactivated
  useEffect(() => {
    if (!isActive) {
      setPhase("idle");
    }
  }, [isActive]);

  if (!isActive && phase === "idle") return null;

  const isClosing = phase === "closing";
  const isClosed = phase === "closed" || phase === "light";
  const isOpening = phase === "opening";
  const showLight = phase === "light";

  const leftX = isClosing ? "0%" : isClosed ? "0%" : isOpening ? "-100%" : "-100%";
  const rightX = isClosing ? "0%" : isClosed ? "0%" : isOpening ? "100%" : "100%";

  return (
    <AnimatePresence>
      {(isActive || phase !== "idle") && phase !== "done" && (
        <div className="fixed inset-0 z-[200] pointer-events-auto">
          {/* Left door */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full"
            style={{ 
              background: "linear-gradient(90deg, hsl(220 20% 8%), hsl(220 20% 12%))",
            }}
            initial={{ x: "-100%" }}
            animate={{ 
              x: isClosed || showLight ? "0%" : isOpening ? "-100%" : isClosing ? "0%" : "-100%"
            }}
            transition={{ 
              duration: isClosing ? 0.7 : 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            {/* Door panel lines */}
            <div className="absolute inset-0 flex items-center justify-end pr-6">
              <div className="w-px h-[70%] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            </div>
            {/* Metallic edge */}
            <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full"
            style={{ 
              background: "linear-gradient(-90deg, hsl(220 20% 8%), hsl(220 20% 12%))",
            }}
            initial={{ x: "100%" }}
            animate={{ 
              x: isClosed || showLight ? "0%" : isOpening ? "100%" : isClosing ? "0%" : "100%"
            }}
            transition={{ 
              duration: isClosing ? 0.7 : 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            {/* Door panel lines */}
            <div className="absolute inset-0 flex items-center justify-start pl-6">
              <div className="w-px h-[70%] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            </div>
            {/* Metallic edge */}
            <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />
          </motion.div>

          {/* Center light line - appears when doors meet */}
          <AnimatePresence>
            {showLight && (
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full z-10"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 1] }}
                transition={{ duration: 0.4, times: [0, 0.2, 0.7, 1] }}
              >
                <div className="w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                  style={{ 
                    boxShadow: "0 0 20px 8px hsl(38 70% 45% / 0.6), 0 0 60px 20px hsl(38 70% 45% / 0.3)" 
                  }} 
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floor indicator (subtle) */}
          {(isClosed || showLight) && (
            <motion.div
              className="absolute top-8 left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ElevatorTransition;
