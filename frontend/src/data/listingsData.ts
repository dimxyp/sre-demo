// Mock data for 3D printer listings
import { Listing } from '../types/types';

const listingsData: Listing[] = [
  {
    id: "1",
    name: "Bambu Lab X1 Carbon",
    type: "fdm",
    location: "Desktop FDM",
    description: "High-speed CoreXY FDM printer with multi-material system, lidar-based first layer inspection, and AI failure detection.",
    supportedMaterials: ["PLA", "ABS", "PETG", "TPU (flexible)"],
    specifications: ["Build: 256x256x256mm", "Speed: 500mm/s", "AMS multi-material", "AI monitoring"],
    photos: ["bambu-x1c.jpg", "bambu-x1c-2.jpg"],
    rating: 4.7,
    reviews: [
      {
        id: "101",
        userId: "user1",
        userName: "Alex Johnson",
        rating: 5,
        comment: "Incredible print quality with the multi-material system. PLA and PETG prints come out flawless.",
        date: "2025-04-15"
      },
      {
        id: "102",
        userId: "user2",
        userName: "Taylor Smith",
        rating: 4,
        comment: "Fast and reliable. AMS system is a game-changer for multi-color prints.",
        date: "2025-04-10"
      }
    ],
    contactInfo: {
      phone: "555-123-4567",
      email: "support@bambulab.com",
      website: "https://bambulab.com"
    }
  },
  {
    id: "2",
    name: "Prusa MK4S",
    type: "fdm",
    location: "Desktop FDM",
    description: "Open-source FDM printer with input shaping, load cell bed leveling, and extensive community support.",
    supportedMaterials: ["PLA", "PETG", "ABS", "Nylon"],
    specifications: ["Build: 250x210x220mm", "Speed: 200mm/s", "Input shaping", "Open-source"],
    photos: ["prusa-mk4s.jpg", "prusa-mk4s-2.jpg"],
    rating: 4.5,
    reviews: [
      {
        id: "201",
        userId: "user3",
        userName: "Jamie Lee",
        rating: 5,
        comment: "Rock-solid workhorse. Input shaping makes it incredibly fast for an open-frame printer.",
        date: "2025-04-18"
      },
      {
        id: "202",
        userId: "user4",
        userName: "Casey Morgan",
        rating: 4,
        comment: "Great community support and open-source firmware. Perfect for tinkerers.",
        date: "2025-04-05"
      }
    ],
    contactInfo: {
      phone: "555-987-6543",
      email: "info@prusa3d.com",
      website: "https://prusa3d.com"
    }
  },
  {
    id: "3",
    name: "Formlabs Form 4",
    type: "sla",
    location: "Desktop SLA",
    description: "Professional resin printer with Low Force Display technology for ultra-fast, high-detail prints.",
    supportedMaterials: ["Resin (SLA)"],
    specifications: ["Build: 200x125x210mm", "Resolution: 50 microns", "Low Force Display", "Automated resin system"],
    photos: ["formlabs-form4.jpg", "formlabs-form4-2.jpg"],
    rating: 4.9,
    reviews: [
      {
        id: "301",
        userId: "user5",
        userName: "Jordan Riley",
        rating: 5,
        comment: "Dental and jewelry prints are incredibly detailed. Worth every penny for professional work.",
        date: "2025-03-28"
      },
      {
        id: "302",
        userId: "user6",
        userName: "Riley Chen",
        rating: 5,
        comment: "The print speed improvement over Form 3 is remarkable. Surface finish is flawless.",
        date: "2025-03-15"
      }
    ],
    contactInfo: {
      phone: "555-234-5678",
      email: "sales@formlabs.com",
      website: "https://formlabs.com"
    }
  },
  {
    id: "4",
    name: "Creality Ender 3 V3",
    type: "fdm",
    location: "Desktop FDM",
    description: "Budget-friendly CoreXZ printer with Klipper firmware, auto bed leveling, and direct drive extruder.",
    supportedMaterials: ["PLA", "PETG", "TPU (flexible)"],
    specifications: ["Build: 220x220x250mm", "Speed: 600mm/s", "Klipper firmware", "Direct drive"],
    photos: ["ender3v3.jpg", "ender3v3-2.jpg"],
    rating: 4.8,
    reviews: [
      {
        id: "401",
        userId: "user7",
        userName: "Sam Wilson",
        rating: 5,
        comment: "Best budget printer on the market. CoreXZ gives it speed without sacrificing quality.",
        date: "2025-04-02"
      },
      {
        id: "402",
        userId: "user8",
        userName: "Jesse Taylor",
        rating: 4,
        comment: "Great value for beginners. Klipper firmware out of the box is a nice touch.",
        date: "2025-03-20"
      }
    ],
    contactInfo: {
      phone: "555-876-5432",
      email: "support@creality.com",
      website: "https://creality.com"
    }
  },
  {
    id: "5",
    name: "Ultimaker S5",
    type: "industrial",
    location: "Professional FDM",
    description: "Industrial-grade dual extrusion printer with enclosed chamber, ideal for engineering-grade materials.",
    supportedMaterials: ["PLA", "ABS", "PETG", "Nylon", "TPU (flexible)"],
    specifications: ["Build: 330x240x300mm", "Dual extrusion", "Enclosed chamber", "Water-soluble supports"],
    photos: ["ultimaker-s5.jpg", "ultimaker-s5-2.jpg"],
    rating: 4.6,
    reviews: [
      {
        id: "501",
        userId: "user9",
        userName: "Taylor Kim",
        rating: 5,
        comment: "Dual extrusion with water-soluble supports is perfect for complex engineering parts.",
        date: "2025-04-12"
      },
      {
        id: "502",
        userId: "user10",
        userName: "Alex Rivera",
        rating: 4,
        comment: "Reliable for production runs. The enclosed chamber handles ABS and Nylon beautifully.",
        date: "2025-04-08"
      }
    ],
    contactInfo: {
      phone: "555-345-6789",
      email: "sales@ultimaker.com",
      website: "https://ultimaker.com"
    }
  },
  {
    id: "6",
    name: "Anycubic Photon Mono M7",
    type: "sla",
    location: "Desktop SLA",
    description: "High-resolution resin printer with 14K mono LCD, tilting release, and fast print speeds for detailed miniatures.",
    supportedMaterials: ["Resin (SLA)"],
    specifications: ["Build: 218x123x200mm", "Resolution: 14K", "Tilting release", "High speed resin"],
    photos: ["anycubic-m7.jpg", "anycubic-m7-2.jpg"],
    rating: 5.0,
    reviews: [
      {
        id: "601",
        userId: "user11",
        userName: "Charlie Simmons",
        rating: 5,
        comment: "14K resolution is insane for miniatures. Every detail comes through perfectly.",
        date: "2025-04-28"
      },
      {
        id: "602",
        userId: "user12",
        userName: "Morgan Patel",
        rating: 5,
        comment: "Fast print speeds for resin. Great for batch-printing tabletop minis.",
        date: "2025-04-22"
      },
      {
        id: "603",
        userId: "user13",
        userName: "Sam Washington",
        rating: 5,
        comment: "The tilting release mechanism significantly reduces peel forces. Fewer failed prints!",
        date: "2025-05-01"
      }
    ],
    contactInfo: {
      phone: "555-111-2222",
      email: "support@anycubic.com",
      website: "https://anycubic.com"
    }
  }
];

export default listingsData;
