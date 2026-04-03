import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { hotels } from "@/data/hotels";
import { ArrowLeft, Star, MapPin, Menu, X, Waves, Sparkles, UtensilsCrossed, TreePalm, Dumbbell, Wine, Car, Phone, Wifi, ArrowRight, Mail, Instagram, Coffee, Gamepad2, ParkingCircle, Droplets, Scissors } from "lucide-react";
import constructionImg from "@/assets/construction-coming-soon.png";

const amenityIcons: Record<string, React.ReactNode> = {
  "Infinity Pool": <Waves className="w-5 h-5" />,
  "Cliffside Pool": <Waves className="w-5 h-5" />,
  "Natural Pool": <Waves className="w-5 h-5" />,
  "Swimming Pool": <Waves className="w-5 h-5" />,
  "Spa & Wellness": <Sparkles className="w-5 h-5" />,
  "Mediterranean Spa": <Sparkles className="w-5 h-5" />,
  "Luxury Spa": <Sparkles className="w-5 h-5" />,
  "Jungle Spa": <Sparkles className="w-5 h-5" />,
  "Spa & Salon": <Scissors className="w-5 h-5" />,
  "Fine Dining": <UtensilsCrossed className="w-5 h-5" />,
  "Gourmet Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "Michelin Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "Farm-to-Table Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "CHAUKAA Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "Multi-Cuisine Restaurant": <UtensilsCrossed className="w-5 h-5" />,
  "Coffee Shop": <Coffee className="w-5 h-5" />,
  "Private Beach": <TreePalm className="w-5 h-5" />,
  "Fitness Center": <Dumbbell className="w-5 h-5" />,
  "Wine Cellar": <Wine className="w-5 h-5" />,
  "Valet Parking": <Car className="w-5 h-5" />,
  "Car Parking": <ParkingCircle className="w-5 h-5" />,
  "Concierge": <Phone className="w-5 h-5" />,
  "Rain Dance Area": <Droplets className="w-5 h-5" />,
  "Kids Zone": <Gamepad2 className="w-5 h-5" />,
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
          <button onClick={() => navigate("/")} className="mt-4 text-muted-foreground underline font-body">Return home</button>
        </div>
      </div>
    );
  }

  const isComingSoon = hotel.id === "evara-exotica";

  if (isComingSoon) {
    return (
      <div className="min-h-screen bg-background overflow-x-hidden">
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
          <div className="flex items-center justify-between px-5 md:px-16 py-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-[10px] tracking-[0.2em] uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <h2
              className="text-lg md:text-xl font-display font-semibold tracking-[0.12em] cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="text-gold-gradient">EVARA</span>{" "}
              <span className="text-foreground/40 font-light">Co.</span>
            </h2>
            <div className="w-10" />
          </div>
        </nav>

        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img
              src={constructionImg}
              alt="Under Construction"
              width={800}
              height={800}
              className="w-64 md:w-80 mx-auto mb-8"
            />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground tracking-wider mb-4">
              {hotel.name}
            </h1>
            <motion.p
              className="text-xl md:text-2xl text-primary font-display tracking-[0.15em]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Opening Soon………..
            </motion.p>
            <div className="gold-divider mt-8" />
            <button
              onClick={() => navigate("/")}
              className="mt-10 group inline-flex items-center gap-3 border border-primary/30 text-primary px-8 py-3 text-[10px] tracking-[0.3em] uppercase font-body hover:bg-primary/5 hover:border-primary/60 transition-all duration-500"
            >
              Back to Home
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="flex items-center justify-between px-5 md:px-16 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-body text-[10px] tracking-[0.2em] uppercase"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Back</span>
          </button>
          <h2
            className="text-lg md:text-xl font-display font-semibold tracking-[0.12em] cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-gold-gradient">EVARA</span>{" "}
            <span className="text-foreground/40 font-light">Co.</span>
          </h2>

          <div className="hidden md:flex items-center gap-8">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => navigate(`/hotel/${h.id}`)}
                className={`text-[10px] tracking-[0.2em] uppercase font-body transition-colors duration-300 ${
                  h.id === id ? "text-primary" : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground/60 p-1" aria-label="Toggle menu">
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
              <div className="flex flex-col px-6 py-4 gap-1">
                {hotels.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { navigate(`/hotel/${h.id}`); setMenuOpen(false); }}
                    className={`text-left text-sm tracking-[0.12em] uppercase font-body py-3 border-b border-border/50 ${
                      h.id === id ? "text-primary" : "text-foreground/60"
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
      <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden bg-secondary">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={hotel.heroImage}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: hotel.rating }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-[10px] tracking-[0.4em] uppercase font-body mb-2">
              {hotel.tagline}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-semibold tracking-wider text-foreground">
              {hotel.name}
            </h1>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary/60" />
              <span className="text-[10px] md:text-xs font-body tracking-[0.12em] uppercase">
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
          <p className="text-[10px] tracking-[0.5em] uppercase text-primary/60 font-body mb-4">Welcome to</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-semibold text-foreground tracking-wide mb-5">
            {hotel.name}
          </h2>
          <div className="gold-divider mb-7" />
          <p className="text-sm md:text-base text-muted-foreground font-body leading-[1.8] max-w-2xl mx-auto">
            {hotel.description}
          </p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="pb-4">
        {hotel.highlights.map((highlight, i) => (
          <div
            key={highlight.title}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-stretch`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden relative group"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className={`w-full md:w-1/2 flex flex-col justify-center p-8 md:p-14 lg:p-20 ${
                i % 2 === 0 ? "bg-secondary" : "bg-background"
              }`}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-primary/50 font-body mb-4">Experience</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-foreground tracking-wide mb-4">
                {highlight.title}
              </h3>
              <div className="gold-divider-left mb-6" />
              <p className="text-sm text-muted-foreground font-body leading-[1.8]">
                {highlight.description}
              </p>
              <button className="mt-8 self-start group/btn inline-flex items-center gap-3 border border-primary/20 text-primary px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-body hover:bg-primary/5 hover:border-primary/40 transition-all duration-500">
                Learn More
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        ))}
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] tracking-[0.5em] uppercase text-primary/50 font-body mb-4">Gallery</p>
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-foreground mb-3">
            Moments & Emotions
          </h3>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {hotel.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`overflow-hidden relative group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <img
                  src={img}
                  alt={`${hotel.name} gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms & Pricing */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-primary/50 font-body mb-4">Accommodations</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-semibold text-foreground tracking-wide">
              Rooms & Suites
            </h2>
            <div className="gold-divider mt-5" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {hotel.rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-background border border-border overflow-hidden group hover-gold-border luxury-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-primary font-display font-bold text-lg px-4 py-1.5">
                    {room.price}
                    <span className="text-[9px] text-muted-foreground font-body block text-center leading-tight">/night</span>
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h3 className="text-xl font-display font-semibold text-foreground tracking-wide">{room.name}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-2 mb-4 leading-relaxed">{room.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {room.features.map((f) => (
                      <span key={f} className="text-[9px] px-2.5 py-1 border border-border text-muted-foreground font-body tracking-wider uppercase">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="w-full border border-primary/20 text-primary py-3 text-[10px] tracking-[0.2em] uppercase font-body hover:bg-primary/5 hover:border-primary/40 transition-all duration-500">
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
            className="text-center mb-14"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-primary/50 font-body mb-4">Experience</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-semibold text-foreground tracking-wide">
              Amenities
            </h2>
            <div className="gold-divider mt-5" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {hotel.amenities.map((amenity, i) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-3 py-6 px-3 border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all duration-500 group"
              >
                <div className="text-primary/50 group-hover:text-primary transition-colors duration-300">
                  {amenityIcons[amenity] || <Wifi className="w-5 h-5" />}
                </div>
                <span className="text-[9px] sm:text-[10px] font-body text-muted-foreground tracking-[0.12em] uppercase group-hover:text-foreground/70 transition-colors duration-300">{amenity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-primary/50 font-body mb-4">Ready to Experience</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-5 tracking-wide">
            {hotel.name}
          </h2>
          <p className="text-muted-foreground font-body mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Reserve your stay and discover a world of unparalleled luxury and personalized service.
          </p>
          <button className="group inline-flex items-center gap-3 border border-primary/30 text-primary px-10 py-4 text-[10px] tracking-[0.3em] uppercase font-body hover:bg-primary/5 hover:border-primary/60 transition-all duration-500">
            Reserve Your Stay
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-5 md:px-16 py-10 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-display font-semibold tracking-[0.15em]">
                <span className="text-gold-gradient">EVARA</span>{" "}
                <span className="text-foreground/40 font-light">Co.</span>
              </p>
              <p className="text-[10px] text-muted-foreground font-body mt-1 tracking-[0.1em]">
                {hotel.address}, {hotel.city}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {hotels.map((h) => (
                <button
                  key={h.id}
                  onClick={() => navigate(`/hotel/${h.id}`)}
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

export default HotelPage;