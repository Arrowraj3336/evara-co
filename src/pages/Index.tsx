import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { hotels } from "@/data/hotels";
import { Phone, Mail, Instagram, Menu, X, ArrowRight, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-5 md:px-16 py-4">
          <h1
            className="text-2xl md:text-3xl font-display font-bold tracking-wider text-foreground cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            EVARA <span className="text-lg md:text-xl font-light">Co.</span>
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => navigate(`/hotel/${h.id}`)}
                className="text-xs tracking-[0.2em] uppercase font-body text-muted-foreground hover:text-gold transition-colors"
              >
                {h.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="text-foreground hover:text-gold transition-colors" aria-label="Call">
              <Phone className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="mailto:info@evaraco.com" className="text-foreground hover:text-gold transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-foreground hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {hotels.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { navigate(`/hotel/${h.id}`); setMenuOpen(false); }}
                    className="text-left text-sm tracking-[0.15em] uppercase font-body text-foreground hover:text-gold transition-colors py-2 border-b border-border/50"
                  >
                    {h.name}
                  </button>
                ))}
                <div className="flex items-center gap-5 pt-2">
                  <a href="tel:+1234567890" className="text-foreground hover:text-gold transition-colors"><Phone className="w-4 h-4" /></a>
                  <a href="mailto:info@evaraco.com" className="text-foreground hover:text-gold transition-colors"><Mail className="w-4 h-4" /></a>
                  <a href="#" className="text-foreground hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden pt-[60px]">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={hotels[0].heroImage}
          alt="Evara Co. Luxury Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xs md:text-sm tracking-[0.5em] uppercase font-body text-cream/80 mb-4">
              A Collection of Extraordinary Experiences
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream tracking-wide">
              EVARA Co.
            </h2>
            <div className="w-20 h-px bg-gold mx-auto mt-6 mb-6" />
            <p className="text-sm md:text-base font-body text-cream/70 max-w-lg mx-auto leading-relaxed">
              Three iconic destinations. One extraordinary standard of luxury.
            </p>
            <button
              onClick={() => document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 border border-cream/40 text-cream px-8 py-3 text-xs tracking-[0.3em] uppercase font-body hover:bg-cream hover:text-foreground transition-all duration-500"
            >
              Discover Our Hotels
            </button>
          </motion.div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-gold font-body mb-3">Our Properties</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            The Collection
          </h2>
          <div className="gold-divider mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 max-w-7xl mx-auto">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate(`/hotel/${hotel.id}`)}
            >
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm">
                <img
                  src={hotel.cardImage}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: hotel.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-cream tracking-wide uppercase">
                    {hotel.name}
                  </h3>
                  <p className="text-xs text-cream/70 font-body mt-1 tracking-wider">
                    {hotel.address}, {hotel.city}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-cream/80 group-hover:text-gold transition-colors text-xs font-body tracking-[0.2em] uppercase">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-foreground py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
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
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-gold">{stat.value}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 font-body mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-16 py-10 bg-background">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
            © 2026 Evara Co. All rights reserved.
          </p>
          <p className="text-sm font-display text-foreground tracking-wider">EVARA Co.</p>
          <p className="text-xs tracking-[0.15em] text-muted-foreground font-body">
            A Collection of Extraordinary Experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
