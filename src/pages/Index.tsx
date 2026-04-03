import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hotels } from "@/data/hotels";
import { Phone, Mail, Instagram, Menu, X, MapPin, ArrowRight, ArrowDown } from "lucide-react";
import ZoomTransition from "@/components/ZoomTransition";
import { useZoomNavigation } from "@/hooks/useZoomNavigation";

const Index = () => {
  const { isTransitioning, navigateWithZoom, handleTransitionComplete } = useZoomNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const scrollToProperties = () => {
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ZoomTransition isActive={isTransitioning} onComplete={handleTransitionComplete} />

      {/* Intro Animation */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="rounded-full"
              style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.15), hsl(var(--background)))" }}
              initial={{ width: 0, height: 0, opacity: 0.8, filter: "blur(40px)" }}
              animate={{ width: "300vmax", height: "300vmax", opacity: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              onAnimationComplete={() => setIntroComplete(true)}
            />
            <motion.p
              className="absolute text-2xl md:text-4xl font-display font-semibold tracking-[0.2em]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.1] }}
              transition={{ duration: 0.9, times: [0, 0.2, 0.7, 1] }}
            >
              <span className="text-gold-gradient">EVARA</span>
              <span className="text-foreground/40 font-light ml-2">Co.</span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="flex items-center justify-between px-5 md:px-16 py-4">
          <h1
            className="text-xl md:text-2xl font-display font-semibold tracking-[0.12em] cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-gold-gradient">EVARA</span>{" "}
            <span className="text-foreground/40 font-light">Co.</span>
          </h1>

          <div className="hidden md:flex items-center gap-10">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => navigateWithZoom(`/hotel/${h.id}`)}
                className="text-[11px] tracking-[0.2em] uppercase font-body text-foreground/50 hover:text-primary transition-colors duration-300"
              >
                {h.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            {[
              { icon: Phone, href: "tel:+1234567890", label: "Call" },
              { icon: Mail, href: "mailto:info@evaraco.com", label: "Email" },
              { icon: Instagram, href: "#", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="text-foreground/30 hover:text-primary transition-colors duration-300" aria-label={label}>
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-1" aria-label="Toggle menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl"
            >
              <div className="flex flex-col px-6 py-5 gap-1">
                {hotels.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { navigateWithZoom(`/hotel/${h.id}`); setMenuOpen(false); }}
                    className="text-left text-sm tracking-[0.12em] uppercase font-body text-foreground/70 hover:text-primary transition-colors py-3 border-b border-border/50"
                  >
                    {h.name}
                  </button>
                ))}
                <div className="flex items-center gap-6 pt-4">
                  <a href="tel:+1234567890" className="text-foreground/30 hover:text-primary transition-colors"><Phone className="w-4 h-4" /></a>
                  <a href="mailto:info@evaraco.com" className="text-foreground/30 hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
                  <a href="#" className="text-foreground/30 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section — Inspired by reference */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={introComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Accent line + subtitle */}
            <div className="flex items-center gap-4">
              <div className="w-10 md:w-16 h-px bg-primary" />
              <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-body text-primary">
                The Evara Collection
              </p>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold text-foreground leading-[0.95] tracking-wide">
              Where <em className="text-gold-gradient font-normal italic">Luxury</em>
              <br />
              Meets Legacy
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted-foreground/70 font-body leading-relaxed max-w-lg">
              Three extraordinary hotels, one defining philosophy — every stay is a story written in gold, silence, and pure indulgence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button
                onClick={scrollToProperties}
                className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 md:px-10 py-4 text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-body hover:bg-primary transition-colors duration-500"
              >
                Explore Hotels
              </button>
              <button
                onClick={scrollToProperties}
                className="group inline-flex items-center gap-3 text-muted-foreground/60 px-4 py-4 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-body hover:text-primary transition-colors duration-300"
              >
                Discover More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1, y: [0, 8, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
        </motion.div>
      </section>

      {/* Hotel Cards Section */}
      <main id="properties" className="py-20 md:py-32 px-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.6em] uppercase text-primary/50 font-body mb-3">Discover</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-wide">
            Our Properties
          </h2>
          <div className="gold-divider mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-7xl w-full mx-auto">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigateWithZoom(`/hotel/${hotel.id}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.cardImage}
                  alt={hotel.name}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="mt-6 text-center space-y-2.5">
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground tracking-[0.15em] uppercase group-hover:text-primary transition-colors duration-300">
                  {hotel.name}
                </h3>
                <div className="gold-divider !w-10" />
                <div className="flex items-center justify-center gap-2 pt-0.5">
                  <MapPin className="w-3 h-3 text-primary/70 flex-shrink-0" strokeWidth={2} />
                  <p className="text-[10px] text-muted-foreground/80 font-body tracking-[0.15em] uppercase">
                    {hotel.address}
                  </p>
                </div>
                <p className="text-[10px] text-muted-foreground/50 font-body tracking-[0.1em]">
                  {hotel.city}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden">
        <div className="border-t border-b border-border" style={{ background: "hsl(var(--olive) / 0.06)" }}>
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-[9px] tracking-[0.6em] uppercase text-primary/50 font-body">Stay Connected</p>
              <h3 className="text-2xl md:text-4xl font-display font-semibold text-foreground tracking-wide">
                Exclusive Privileges Await
              </h3>
              <div className="gold-divider" />
              <p className="text-sm text-muted-foreground/70 font-body leading-relaxed max-w-lg mx-auto">
                Subscribe to receive curated offers, seasonal packages, and early access to our newest properties.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:flex-1 bg-background border border-border px-5 py-3 text-[11px] tracking-[0.1em] font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 transition-colors"
                />
                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 bg-foreground text-background px-7 py-3 text-[10px] tracking-[0.25em] uppercase font-body hover:bg-primary transition-colors duration-500">
                  Subscribe
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <p className="text-[8px] text-muted-foreground/40 font-body tracking-wider pt-1">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 md:px-16 py-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-display font-semibold tracking-[0.15em]">
                <span className="text-gold-gradient">EVARA</span>{" "}
                <span className="text-foreground/40 font-light">Co.</span>
              </p>
              <p className="text-[10px] text-muted-foreground font-body mt-1 tracking-[0.1em]">
                A Collection of Extraordinary Experiences
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {hotels.map((h) => (
                <button
                  key={h.id}
                  onClick={() => navigateWithZoom(`/hotel/${h.id}`)}
                  className="text-[10px] tracking-[0.15em] uppercase font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {h.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors"><Phone className="w-4 h-4" strokeWidth={1.5} /></a>
              <a href="mailto:info@evaraco.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-4 h-4" strokeWidth={1.5} /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-4 h-4" strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60 font-body">
              © 2026 Evara Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;