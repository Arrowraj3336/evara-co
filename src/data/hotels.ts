import hotelEvara from "@/assets/hotel-evara.png";
import hotelDallan from "@/assets/hotel-dallan.png";
import hotelExotica from "@/assets/hotel-exotica.png";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import hotelSpa from "@/assets/hotel-spa.jpg";
import hotelDining from "@/assets/hotel-dining.jpg";
import hotelRestaurant from "@/assets/hotel-restaurant.jpg";
import hotelBanquet from "@/assets/hotel-banquet.jpg";
import hotelRooftop from "@/assets/hotel-rooftop.jpg";
import roomDeluxePremium from "@/assets/room-deluxe-premium.jpg";

export interface HotelRoom {
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface HotelHighlight {
  title: string;
  description: string;
  image: string;
}

export interface HotelData {
  id: string;
  name: string;
  tagline: string;
  address: string;
  city: string;
  description: string;
  heroImage: string;
  cardImage: string;
  rating: number;
  rooms: HotelRoom[];
  amenities: string[];
  gallery: string[];
  highlights: HotelHighlight[];
}

export const hotels: HotelData[] = [
  {
    id: "evara",
    name: "Hotel Evara",
    tagline: "Where Luxury Meets Serenity",
    address: "42 Palm Avenue, Tropical Bay",
    city: "Maldives",
    description:
      "Nestled amidst lush tropical gardens, Hotel Evara is a sanctuary of modern elegance. With its striking architecture and world-class amenities, every moment here is designed to captivate your senses and rejuvenate your spirit.",
    heroImage: hotelEvara,
    cardImage: hotelEvara,
    rating: 5,
    rooms: [
      {
        name: "Deluxe Ocean Room",
        description: "Spacious room with panoramic ocean views, king bed, and private balcony.",
        price: "$450",
        image: roomDeluxePremium,
        features: ["Ocean View", "King Bed", "Private Balcony", "Mini Bar"],
      },
      {
        name: "Presidential Suite",
        description: "Our finest suite with separate living area, marble bath, and butler service.",
        price: "$1,200",
        image: roomSuite,
        features: ["Panoramic View", "Living Room", "Marble Bath", "Butler Service"],
      },
      {
        name: "Garden Villa",
        description: "A private villa surrounded by tropical gardens with a plunge pool.",
        price: "$850",
        image: roomDeluxe,
        features: ["Private Pool", "Garden View", "Outdoor Shower", "Daybed"],
      },
    ],
    amenities: ["Infinity Pool", "Spa & Wellness", "Fine Dining", "Private Beach", "Concierge", "Fitness Center", "Yoga Studio", "Water Sports"],
    gallery: [hotelEvara, roomDeluxePremium, hotelSpa, hotelDining, hotelRestaurant, hotelBanquet],
    highlights: [
      {
        title: "The Evara Restaurant",
        description: "Experience world-class cuisine crafted by our Michelin-starred chefs. From fresh seafood to international delicacies, every dish is a masterpiece served in an atmosphere of understated elegance.",
        image: hotelRestaurant,
      },
      {
        title: "Grand Banquet Hall",
        description: "Host unforgettable events in our opulent ballroom featuring crystal chandeliers, marble floors, and seating for up to 500 guests. Perfect for weddings, galas, and corporate events.",
        image: hotelBanquet,
      },
      {
        title: "Sky Lounge & Rooftop",
        description: "Elevate your evenings at our stunning rooftop lounge. Sip handcrafted cocktails while watching the sun set over the ocean from our infinity-edge pool deck.",
        image: hotelRooftop,
      },
      {
        title: "Deluxe Rooms & Suites",
        description: "Each room is a sanctuary of comfort featuring premium linens, smart-home technology, marble bathrooms, and breathtaking views that make every stay extraordinary.",
        image: roomDeluxePremium,
      },
    ],
  },
  {
    id: "dallan-resort",
    name: "The Dallan Resort",
    tagline: "Elegance Redefined",
    address: "Coastal Road 7, Amalfi Coast",
    city: "Italy",
    description:
      "Perched above the sparkling Mediterranean, The Dallan Resort offers an unparalleled blend of coastal charm and refined luxury. Whitewashed walls, azure waters, and world-renowned cuisine await your arrival.",
    heroImage: hotelDallan,
    cardImage: hotelDallan,
    rating: 5,
    rooms: [
      {
        name: "Sea View Suite",
        description: "Elegant suite with floor-to-ceiling windows overlooking the Mediterranean.",
        price: "$520",
        image: roomDeluxePremium,
        features: ["Sea View", "King Bed", "Terrace", "Rainfall Shower"],
      },
      {
        name: "Royal Penthouse",
        description: "The crown jewel — a two-story penthouse with rooftop terrace and hot tub.",
        price: "$2,100",
        image: roomSuite,
        features: ["Rooftop Terrace", "Hot Tub", "2 Floors", "Personal Chef"],
      },
      {
        name: "Cliffside Bungalow",
        description: "A charming bungalow nestled into the cliff with direct sea access.",
        price: "$780",
        image: roomDeluxe,
        features: ["Sea Access", "Private Deck", "Outdoor Bath", "Sunset View"],
      },
    ],
    amenities: ["Cliffside Pool", "Mediterranean Spa", "Gourmet Restaurant", "Wine Cellar", "Yacht Charter", "Tennis Court", "Art Gallery", "Helicopter Pad"],
    gallery: [hotelDallan, roomSuite, hotelDining, hotelSpa, hotelRooftop, hotelRestaurant],
    highlights: [
      {
        title: "La Terrazza Restaurant",
        description: "Savor authentic Italian cuisine with a modern twist. Our cliff-edge restaurant offers panoramic Mediterranean views alongside dishes crafted from the freshest local ingredients.",
        image: hotelRestaurant,
      },
      {
        title: "The Amalfi Ballroom",
        description: "An exquisite venue for celebrations, our ballroom blends coastal elegance with Italian grandeur. Floor-to-ceiling windows frame the Mediterranean as your backdrop.",
        image: hotelBanquet,
      },
      {
        title: "Tramonto Rooftop",
        description: "Watch the Italian sunset paint the sky from our exclusive rooftop bar. Enjoy premium wines from our cellar paired with gourmet Mediterranean tapas.",
        image: hotelRooftop,
      },
      {
        title: "Luxury Accommodations",
        description: "Every room and suite is designed with Italian craftsmanship, featuring hand-selected furnishings, private terraces, and the finest amenities for a truly luxurious coastal retreat.",
        image: roomDeluxePremium,
      },
    ],
  },
  {
    id: "evara-exotica",
    name: "Evara Exotica",
    tagline: "A Retreat Beyond Imagination",
    address: "Forest Lane 12, Nature Reserve",
    city: "Bali",
    description:
      "Hidden within ancient forests and lush landscapes, Evara Exotica is an escape into nature's finest luxury. A unique architectural masterpiece surrounded by tranquil greenery, offering an experience unlike any other.",
    heroImage: hotelExotica,
    cardImage: hotelExotica,
    rating: 5,
    rooms: [
      {
        name: "Forest View Room",
        description: "Beautifully appointed room with panoramic forest views and luxury amenities.",
        price: "$380",
        image: roomDeluxePremium,
        features: ["Forest View", "Queen Bed", "Marble Bath", "Nespresso"],
      },
      {
        name: "Grand Suite",
        description: "A magnificent suite with separate study, dining area, and panoramic views.",
        price: "$1,500",
        image: roomSuite,
        features: ["Panoramic View", "Dining Area", "Study", "Walk-in Closet"],
      },
      {
        name: "Canopy Villa",
        description: "The ultimate nature retreat — our treetop villa with 360° forest views.",
        price: "$2,200",
        image: roomDeluxe,
        features: ["360° Views", "Private Terrace", "Jacuzzi", "24/7 Butler"],
      },
    ],
    amenities: ["Natural Pool", "Jungle Spa", "Farm-to-Table Restaurant", "Meditation Garden", "Nature Walks", "Yoga Pavilion", "Library", "Helipad"],
    gallery: [hotelExotica, roomDeluxePremium, roomSuite, hotelDining, hotelBanquet, hotelRooftop],
    highlights: [
      {
        title: "The Canopy Restaurant",
        description: "Dine among the treetops. Our signature restaurant serves organic, farm-to-table cuisine crafted by world-renowned chefs in a breathtaking open-air setting.",
        image: hotelRestaurant,
      },
      {
        title: "The Grand Pavilion",
        description: "An extraordinary venue nestled in nature. Our pavilion hosts intimate gatherings and grand celebrations alike, surrounded by the sounds of the forest.",
        image: hotelBanquet,
      },
      {
        title: "Sunset Deck",
        description: "Watch golden sunsets from our elevated deck perched above the forest canopy. Enjoy handcrafted cocktails and curated tasting menus under the stars.",
        image: hotelRooftop,
      },
      {
        title: "Luxury Forest Rooms",
        description: "Each room is a sanctuary inspired by nature, featuring natural materials, panoramic windows, luxury amenities, and views that bring the outside in.",
        image: roomDeluxePremium,
      },
    ],
  },
];
