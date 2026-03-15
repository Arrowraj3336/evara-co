import hotelEvara from "@/assets/hotel-evara.jpg";
import hotelDalan from "@/assets/hotel-dalan.jpg";
import hotelSophia from "@/assets/hotel-sophia.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import hotelSpa from "@/assets/hotel-spa.jpg";
import hotelDining from "@/assets/hotel-dining.jpg";

export interface HotelRoom {
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
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
}

export const hotels: HotelData[] = [
  {
    id: "evara",
    name: "Evara",
    tagline: "Where Luxury Meets Serenity",
    address: "42 Palm Avenue, Tropical Bay",
    city: "Maldives",
    description:
      "Nestled amidst lush tropical gardens, Evara is a sanctuary of modern elegance. With its striking architecture and world-class amenities, every moment here is designed to captivate your senses and rejuvenate your spirit.",
    heroImage: hotelEvara,
    cardImage: hotelEvara,
    rating: 5,
    rooms: [
      {
        name: "Deluxe Ocean Room",
        description: "Spacious room with panoramic ocean views, king bed, and private balcony.",
        price: "$450",
        image: roomDeluxe,
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
        image: hotelSpa,
        features: ["Private Pool", "Garden View", "Outdoor Shower", "Daybed"],
      },
    ],
    amenities: ["Infinity Pool", "Spa & Wellness", "Fine Dining", "Private Beach", "Concierge", "Fitness Center", "Yoga Studio", "Water Sports"],
    gallery: [hotelEvara, roomDeluxe, hotelSpa, hotelDining],
  },
  {
    id: "dalan-resort",
    name: "Dalan Resort",
    tagline: "Mediterranean Elegance Redefined",
    address: "Coastal Road 7, Amalfi Coast",
    city: "Italy",
    description:
      "Perched above the sparkling Mediterranean, Dalan Resort offers an unparalleled blend of coastal charm and refined luxury. Whitewashed walls, azure waters, and world-renowned cuisine await your arrival.",
    heroImage: hotelDalan,
    cardImage: hotelDalan,
    rating: 5,
    rooms: [
      {
        name: "Sea View Suite",
        description: "Elegant suite with floor-to-ceiling windows overlooking the Mediterranean.",
        price: "$520",
        image: roomDeluxe,
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
        image: hotelDining,
        features: ["Sea Access", "Private Deck", "Outdoor Bath", "Sunset View"],
      },
    ],
    amenities: ["Cliffside Pool", "Mediterranean Spa", "Gourmet Restaurant", "Wine Cellar", "Yacht Charter", "Tennis Court", "Art Gallery", "Helicopter Pad"],
    gallery: [hotelDalan, roomSuite, hotelDining, hotelSpa],
  },
  {
    id: "sophia",
    name: "Sophia",
    tagline: "Urban Luxury, Timeless Grace",
    address: "1 Grand Boulevard, City Center",
    city: "Paris",
    description:
      "In the heart of the city, Sophia stands as a beacon of sophistication. Art deco grandeur meets contemporary comfort in this iconic establishment, where every detail tells a story of refined taste.",
    heroImage: hotelSophia,
    cardImage: hotelSophia,
    rating: 5,
    rooms: [
      {
        name: "Classic Elegance Room",
        description: "Beautifully appointed room with city views and luxurious marble bathroom.",
        price: "$380",
        image: roomDeluxe,
        features: ["City View", "Queen Bed", "Marble Bath", "Nespresso"],
      },
      {
        name: "Grand Suite",
        description: "A magnificent suite with separate study, dining area, and panoramic views.",
        price: "$1,500",
        image: roomSuite,
        features: ["Panoramic View", "Dining Area", "Study", "Walk-in Closet"],
      },
      {
        name: "Penthouse Royale",
        description: "The ultimate urban retreat — our rooftop penthouse with 360° city views.",
        price: "$3,200",
        image: hotelSpa,
        features: ["360° Views", "Private Terrace", "Jacuzzi", "24/7 Butler"],
      },
    ],
    amenities: ["Rooftop Bar", "Luxury Spa", "Michelin Restaurant", "Cigar Lounge", "Valet Parking", "Ballroom", "Business Center", "Limousine Service"],
    gallery: [hotelSophia, roomDeluxe, roomSuite, hotelDining],
  },
];
