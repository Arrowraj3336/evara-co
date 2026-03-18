import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { hotels } from "@/data/hotels";
import { ArrowLeft, Star, MapPin, Menu, X, Waves, Sparkles, UtensilsCrossed, TreePalm, Dumbbell, Wine, Car, Phone, Wifi } from "lucide-react";

const amenityIcons: Record<string, React.ReactNode> = {
  "Infinity Pool": <Waves className="w-5 h-5" />,
  "Cliffside Pool": <Waves className="w-5 h-5" />,
  "Spa & Wellness": <Sparkles className="w-5 h-5" />,
  "Mediterranean Spa": <Sparkles className="w-5 h-5" />,
  "Luxury Spa": <Sparkles className="w-5 h-5" />,
  "Fine Dining": <UtensilsCrossed className="w-5 h-5" />,
  "Gourmet Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "Michelin Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "Private Beach": <TreePalm className="w-5 h-5" />,
  "Fitness Center": <Dumbbell className="w-5 h-5" />,
  "Wine Cellar": <Wine className="w-5 h-5" />,
  "Valet Parking": <Car className="w-5 h-5" />,
  "Concierge": <Phone className="w-5 h-5" />,
};

const HotelPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find((h) => h.id === id);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-display text-foreground">Hotel not found</h1>
          <button onClick={() => navigate("/")} className="mt-4 text-muted-foreground underline font-body">
            Return home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-5 md:px-16 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-gold transition-colors font-body text-xs tracking-[0.15em] uppercase"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <h2
            className="text-xl md:text-2xl font-display font-bold tracking-wider text-foreground cursor-pointer"
            onClick={() => navigate("/")}
          >
            EVARA Co.
          </h2>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => navigate(`/hotel/${h.id}`)}
                className={`text-xs tracking-[0.15em] uppercase font-body transition-colors ${
                  h.id === id ? "text-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Toggle menu"
          >
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
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="flex flex-col px-6 py-4 gap-3">
                {hotels.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { navigate(`/hotel/${h.id}`); setMenuOpen(false); }}
                    className={`text-left text-sm tracking-[0.15em] uppercase font-body py-2 border-b border-border/50 ${
                      h.id === id ? "text-gold" : "text-foreground"
                    }`}
                  >
                    {h.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={hotel.heroImage}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: hotel.rating }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-cream/80 text-xs tracking-[0.4em] uppercase font-body mb-2">
              {hotel.tagline}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-cream tracking-wide">
              {hotel.name}
            </h1>
            <div className="flex items-center gap-2 mt-3 text-cream/70">
              <MapPin className="w-4 h-4" />
              <span className="text-xs md:text-sm font-body tracking-wider">
                {hotel.address}, {hotel.city}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold font-body mb-3">Welcome to</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-5">
            {hotel.name}
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            {hotel.description}
          </p>
        </motion.div>
      </section>

      {/* Highlights — Restaurant, Banquets, Rooftop, Deluxe Rooms */}
      <section className="pb-10">
        {hotel.highlights.map((highlight, i) => (
          <div
            key={highlight.title}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-stretch`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-14 lg:p-20 ${
                i % 2 === 0 ? "bg-secondary" : "bg-background"
              }`}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-3">Experience</p>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4">
                {highlight.title}
              </h3>
              <div className="w-10 h-px bg-gold mb-5" />
              <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                {highlight.description}
              </p>
              <button className="mt-6 self-start border border-foreground text-foreground px-6 py-2.5 text-xs tracking-[0.2em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-12 lg:px-20 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-center text-xs tracking-[0.4em] uppercase text-gold font-body mb-10">
            Moments & Emotions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {hotel.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`${hotel.name} gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Rooms & Pricing */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-gold font-body mb-3">Accommodations</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
              Rooms & Suites
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotel.rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: true }}
                className="bg-card overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-7">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-display font-semibold text-foreground">{room.name}</h3>
                    <span className="text-lg font-display font-bold text-gold whitespace-nowrap ml-3">
                      {room.price}
                      <span className="text-[10px] text-muted-foreground font-body block text-right">/night</span>
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-body mb-4 leading-relaxed">{room.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] px-2.5 py-0.5 border border-border rounded-full text-muted-foreground font-body"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="w-full border border-foreground text-foreground py-2.5 text-xs tracking-[0.15em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-gold font-body mb-3">Experience</p>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
              Amenities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {hotel.amenities.map((amenity, i) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-2 py-5 px-3 border border-border hover:border-gold transition-colors duration-300"
              >
                <div className="text-gold">
                  {amenityIcons[amenity] || <Wifi className="w-5 h-5" />}
                </div>
                <span className="text-xs font-body text-foreground tracking-wider">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-gold font-body mb-3">Ready to Experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary-foreground mb-5">
            {hotel.name}?
          </h2>
          <p className="text-primary-foreground/60 font-body mb-8 max-w-md mx-auto text-sm">
            Reserve your stay and discover a world of unparalleled luxury and personalized service.
          </p>
          <button className="border border-primary-foreground/40 text-primary-foreground px-8 py-3 text-xs tracking-[0.3em] uppercase font-body hover:bg-primary-foreground hover:text-foreground transition-all duration-300">
            Reserve Your Stay
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-16 py-8 bg-background">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body">
            © 2026 Evara Co. All rights reserved.
          </p>
          <p className="text-sm font-display text-foreground tracking-wider">EVARA Co.</p>
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-body">
            {hotel.address}, {hotel.city}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HotelPage;
