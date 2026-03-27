import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hotels } from "@/data/hotels";
import { Phone, Mail, Instagram, Menu, X, MapPin, ArrowRight } from "lucide-react";
import ElevatorTransition from "@/components/ElevatorTransition";
import { useElevatorNavigation } from "@/hooks/useElevatorNavigation";

const Index = () => {
  const { isTransitioning, navigateWithElevator, handleTransitionComplete } = useElevatorNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Elevator Transition */}
      <ElevatorTransition isActive={isTransitioning} onComplete={handleTransitionComplete} />

      {/* Intro Animation — white circle zoom */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {}}
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => navigateWithElevator(`/hotel/${h.id}`)}
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

        {/* Mobile Menu */}
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
                    onClick={() => { navigateWithElevator(`/hotel/${h.id}`); setMenuOpen(false); }}
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

      {/* Main Content — 3 Hotel Cards */}
      <main className="min-h-screen flex flex-col items-center justify-center pt-20 pb-24 px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[9px] tracking-[0.6em] uppercase text-primary/50 font-body mb-3">Discover</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground tracking-wide">
            Our Properties
          </h2>
          <div className="gold-divider mt-5" />
        </motion.div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 max-w-6xl w-full mx-auto">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 50 }}
              animate={introComplete ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => navigateWithElevator(`/hotel/${hotel.id}`)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={hotel.cardImage}
                  alt={hotel.name}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info below image — redesigned */}
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

      {/* Newsletter / Subscribe Section — Redesigned */}
      <section className="relative overflow-hidden">
        <div className="bg-secondary/60 border-t border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
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
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="text-lg font-display font-semibold tracking-[0.15em]">
                <span className="text-gold-gradient">EVARA</span>{" "}
                <span className="text-foreground/40 font-light">Co.</span>
              </p>
              <p className="text-[10px] text-muted-foreground font-body mt-1 tracking-[0.1em]">
                A Collection of Extraordinary Experiences
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              {hotels.map((h) => (
                <button
                  key={h.id}
                  onClick={() => navigateWithElevator(`/hotel/${h.id}`)}
                  className="text-[10px] tracking-[0.15em] uppercase font-body text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {h.name}
                </button>
              ))}
            </div>

            {/* Social */}
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
