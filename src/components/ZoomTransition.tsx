import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ZoomTransitionProps {
  isActive: boolean;
  onComplete: () => void;
  targetImage?: string;
}

const ZoomTransition = ({ isActive, onComplete, targetImage }: ZoomTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const doorLeftRef = useRef<HTMLDivElement>(null);
  const doorRightRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Phase 1: Zoom into the scene - the camera rushes forward
    tl.fromTo(
      overlayRef.current,
      { opacity: 0, scale: 1 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.in" }
    );

    // Phase 2: Camera enters through golden arch/doorway
    tl.fromTo(
      lightRef.current,
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" },
      "-=0.1"
    );

    // Phase 3: Doors swing open revealing the hotel interior
    tl.to(
      doorLeftRef.current,
      { x: "-110%", duration: 0.5, ease: "power3.inOut" },
      "-=0.2"
    );
    tl.to(
      doorRightRef.current,
      { x: "110%", duration: 0.5, ease: "power3.inOut" },
      "<"
    );

    // Phase 4: Light burst and fade
    tl.to(
      lightRef.current,
      { opacity: 0, scale: 3, duration: 0.3, ease: "power2.out" },
      "-=0.2"
    );

    // Phase 5: Full overlay fades out
    tl.to(
      containerRef.current,
      { opacity: 0, duration: 0.3, ease: "power2.out" }
    );

    return () => {
      tl.kill();
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] pointer-events-auto"
      style={{ perspective: "1200px" }}
    >
      {/* Dark overlay background */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsl(40 20% 28% / 0.95), hsl(30 10% 12% / 0.98))",
        }}
      />

      {/* Left door panel */}
      <div
        ref={doorLeftRef}
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(90deg, hsl(30 10% 12%), hsl(40 20% 20%))",
          borderRight: "2px solid hsl(36 45% 42% / 0.4)",
        }}
      >
        {/* Door details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-[60%] h-[70%] border border-primary/20 rounded-t-[80px]"
            style={{
              background: "linear-gradient(180deg, hsl(36 45% 42% / 0.08), transparent)",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
      </div>

      {/* Right door panel */}
      <div
        ref={doorRightRef}
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          background: "linear-gradient(-90deg, hsl(30 10% 12%), hsl(40 20% 20%))",
          borderLeft: "2px solid hsl(36 45% 42% / 0.4)",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="w-[60%] h-[70%] border border-primary/20 rounded-t-[80px]"
            style={{
              background: "linear-gradient(180deg, hsl(36 45% 42% / 0.08), transparent)",
            }}
          />
        </div>
        <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
      </div>

      {/* Central light burst */}
      <div
        ref={lightRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div
          className="w-[200px] h-[200px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(36 45% 60% / 0.8), hsl(36 45% 42% / 0.3), transparent 70%)",
            boxShadow: "0 0 120px 60px hsl(36 45% 42% / 0.3)",
          }}
        />
      </div>

      {/* Golden arch frame */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[50vw] h-[70vh] max-w-[400px] border-2 border-primary/20 rounded-t-[200px]"
          style={{
            background: "transparent",
            boxShadow: "inset 0 0 60px hsl(36 45% 42% / 0.05)",
          }}
        />
      </div>
    </div>
  );
};

export default ZoomTransition;