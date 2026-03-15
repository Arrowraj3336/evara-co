import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { hotels } from "@/data/hotels";
import { Phone, Mail, Instagram } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-8">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-none">
            EVARA <span className="text-2xl md:text-3xl lg:text-4xl font-light align-baseline">Co.</span>
          </h1>
          <p className="text-sm md:text-base font-body tracking-[0.3em] uppercase text-muted-foreground mt-1">
            Luxury Hotel Collection
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+1234567890" className="text-foreground hover:text-gold transition-colors" aria-label="Call us">
            <Phone className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </a>
          <a href="mailto:info@evaraco.com" className="text-foreground hover:text-gold transition-colors" aria-label="Email us">
            <Mail className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </a>
          <a href="#" className="text-foreground hover:text-gold transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
          </a>
        </div>
      </header>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-8 pt-8 pb-4"
      >
        <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground font-body">
          Places about you, luxury, and fulfillment
        </p>
        <div className="gold-divider mt-6" />
      </motion.div>

      {/* Hotel Cards */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/hotel/${hotel.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img
                  src={hotel.cardImage}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-wide text-foreground uppercase">
                    {hotel.name}
                  </h2>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    {hotel.address}, {hotel.city}
                  </p>
                </div>
                <button
                  className="border border-foreground text-foreground px-5 py-2 text-xs tracking-[0.2em] uppercase font-body 
                    hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/hotel/${hotel.id}`);
                  }}
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 md:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
            © 2026 Evara Co. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.15em] text-muted-foreground font-body">
            A Collection of Extraordinary Experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
