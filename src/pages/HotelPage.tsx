import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { hotels } from "@/data/hotels";
import { ArrowLeft, Star, MapPin, Phone, Wifi, Car, UtensilsCrossed, Waves, Dumbbell, Wine, Sparkles, TreePalm } from "lucide-react";

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between px-6 md:px-16 py-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-gold transition-colors font-body text-sm tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline uppercase">Back to Collection</span>
          </button>
          <h2
            className="text-xl md:text-2xl font-display font-semibold tracking-wider text-foreground cursor-pointer"
            onClick={() => navigate("/")}
          >
            EVARA Co.
          </h2>
          <div className="flex items-center gap-1">
            {Array.from({ length: hotel.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={hotel.heroImage}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-cream text-sm tracking-[0.4em] uppercase font-body mb-3 opacity-80">
              {hotel.tagline}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream tracking-wide">
              {hotel.name}
            </h1>
            <div className="flex items-center gap-2 mt-4 text-cream/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-body tracking-wider">
                {hotel.address}, {hotel.city}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.4em] uppercase text-gold font-body mb-4">Welcome to</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            {hotel.name}
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            {hotel.description}
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-center text-sm tracking-[0.4em] uppercase text-gold font-body mb-12">
            Moments & Emotions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {hotel.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2" : ""}`}
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
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.4em] uppercase text-gold font-body mb-4">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Rooms & Suites
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hotel.rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-foreground">{room.name}</h3>
                    <span className="text-xl font-display font-bold text-gold whitespace-nowrap ml-4">
                      {room.price}
                      <span className="text-xs text-muted-foreground font-body block text-right">/night</span>
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground font-body"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="w-full border border-foreground text-foreground py-3 text-xs tracking-[0.2em] uppercase font-body hover:bg-foreground hover:text-primary-foreground transition-all duration-300">
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
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.4em] uppercase text-gold font-body mb-4">Experience</p>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Amenities
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {hotel.amenities.map((amenity, i) => (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-3 py-6 px-4 border border-border rounded-lg hover:border-gold transition-colors duration-300"
              >
                <div className="text-gold">
                  {amenityIcons[amenity] || <Wifi className="w-5 h-5" />}
                </div>
                <span className="text-sm font-body text-foreground tracking-wider">{amenity}</span>
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
          <p className="text-sm tracking-[0.4em] uppercase text-gold font-body mb-4">Ready to Experience</p>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary-foreground mb-6">
            {hotel.name}?
          </h2>
          <p className="text-primary-foreground/70 font-body mb-10 max-w-xl mx-auto">
            Reserve your stay and discover a world of unparalleled luxury and personalized service.
          </p>
          <button className="border border-primary-foreground text-primary-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase font-body hover:bg-primary-foreground hover:text-foreground transition-all duration-300">
            Reserve Your Stay
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-8 md:px-16 py-10 bg-background">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body">
            © 2026 Evara Co. All rights reserved.
          </p>
          <p className="text-sm font-display text-foreground">
            EVARA Co.
          </p>
          <p className="text-xs tracking-[0.15em] text-muted-foreground font-body">
            {hotel.address}, {hotel.city}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HotelPage;
