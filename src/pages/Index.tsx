import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { hotels } from "@/data/hotels";
import { Phone, Mail, Instagram, Menu, X, ArrowRight, Star, ChevronDown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="flex items-center justify-between px-5 md:px-16 py-4">
          <h1
            className="text-xl md:text-2xl font-display font-semibold tracking-[0.15em] text-foreground cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-gold-gradient">EVARA</span>{" "}
            <span className="text-foreground/60 font-light">Co.</span>
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => navigate(`/hotel/${h.id}`)}
                className="text-[11px] tracking-[0.25em] uppercase font-body text-foreground/50 hover:text-gold transition-colors duration-300"
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
              <a key={label} href={href} className="text-foreground/40 hover:text-gold transition-colors duration-300" aria-label={label}>
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground p-1" aria-label="Toggle menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-gold/10 bg-background/95 backdrop-blur-xl"
            >
              <div className="flex flex-col px-6 py-5 gap-1">
                {hotels.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { navigate(`/hotel/${h.id}`); setMenuOpen(false); }}
                    className="text-left text-sm tracking-[0.15em] uppercase font-body text-foreground/80 hover:text-gold transition-colors py-3 border-b border-border/30"
                  >
                    {h.name}
                  </button>
                ))}
                <div className="flex items-center gap-6 pt-4">
                  <a href="tel:+1234567890" className="text-foreground/40 hover:text-gold transition-colors"><Phone className="w-4 h-4" /></a>
                  <a href="mailto:info@evaraco.com" className="text-foreground/40 hover:text-gold transition-colors"><Mail className="w-4 h-4" /></a>
                  <a href="#" className="text-foreground/40 hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={hotels[0].heroImage}
          alt="Evara Co. Luxury Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.6em" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-[10px] md:text-xs uppercase font-body text-gold/80 mb-6"
            >
              Luxury Hotel Collection
            </motion.p>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-semibold tracking-wider">
              <span className="text-gold-gradient">EVARA</span>
              <span className="text-foreground/30 font-light ml-2 md:ml-4">Co.</span>
            </h2>
            <div className="w-24 h-px mx-auto mt-8 mb-8" style={{ background: "linear-gradient(90deg, transparent, hsl(38 70% 52%), transparent)" }} />
            <p className="text-sm md:text-base font-body text-foreground/40 max-w-md mx-auto leading-relaxed tracking-wide">
              Three iconic destinations. One extraordinary standard of luxury.
            </p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-10 group inline-flex items-center gap-3 border border-gold/30 text-gold px-8 py-3.5 text-[10px] tracking-[0.3em] uppercase font-body hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
            >
              Discover Our Hotels
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-body">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 text-gold/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/60 font-body mb-4">Our Properties</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-foreground tracking-wide">
            The Collection
          </h2>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative"
              onClick={() => navigate(`/hotel/${hotel.id}`)}
            >
              <div className="relative overflow-hidden aspect-[3/4.5]">
                <img
                  src={hotel.cardImage}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Gold border glow on hover */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: hotel.rating }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-semibold text-foreground tracking-wider uppercase">
                    {hotel.name}
                  </h3>
                  <p className="text-[10px] text-foreground/40 font-body mt-1.5 tracking-[0.15em] uppercase">
                    {hotel.address}, {hotel.city}
                  </p>
                  <div className="gold-divider-left mt-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors text-[10px] font-body tracking-[0.25em] uppercase">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, hsl(38 70% 52% / 0.08), transparent 70%)" }} />
        <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
          {[
            { value: "3", label: "Iconic Destinations" },
            { value: "15+", label: "Years of Excellence" },
            { value: "50K+", label: "Happy Guests" },
            { value: "5★", label: "Rated Worldwide" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="relative"
            >
              <p className="text-3xl md:text-5xl font-display font-bold text-gold-gradient">{stat.value}</p>
              <p className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-foreground/30 font-body mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tagline Band */}
      <section className="py-20 md:py-28 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/50 font-body mb-6">Philosophy</p>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-display text-foreground/70 max-w-3xl mx-auto leading-snug italic font-light">
            "Where every detail is a <span className="text-gold-gradient not-italic font-semibold">masterpiece</span> and every moment becomes a{" "}
            <span className="text-gold-gradient not-italic font-semibold">memory</span>."
          </h3>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 md:px-16 py-10 bg-background">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-[9px] tracking-[0.2em] uppercase text-foreground/25 font-body">
            © 2026 Evara Co. All rights reserved.
          </p>
          <p className="text-sm font-display tracking-[0.15em]">
            <span className="text-gold-gradient">EVARA</span>{" "}
            <span className="text-foreground/40">Co.</span>
          </p>
          <p className="text-[9px] tracking-[0.15em] text-foreground/25 font-body uppercase">
            A Collection of Extraordinary Experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
