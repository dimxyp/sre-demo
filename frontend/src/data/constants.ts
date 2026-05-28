// Constants for the application
import { PrinterCategory } from '../types/types';

// Printer categories supported by the application
export const LISTING_TYPES: PrinterCategory[] = [
  { id: "fdm", name: "FDM", icon: "🖨️", description: "Fused Deposition Modeling printers" },
  { id: "sla", name: "SLA (Resin)", icon: "💎", description: "Stereolithography resin printers" },
  { id: "sls", name: "SLS", icon: "⚡", description: "Selective Laser Sintering printers" },
  { id: "industrial", name: "Industrial", icon: "🏭", description: "Industrial-grade production printers" },
  { id: "multi-material", name: "Multi-material", icon: "🎨", description: "Multi-material and multi-color printers" }
];

// Common specifications that can be selected when uploading a new design
export const SPECIFICATIONS: string[] = [
  "Heated bed required",
  "Enclosure recommended",
  "Supports needed",
  "Multi-color capable",
  "High temperature nozzle",
  "Direct drive extruder",
  "Dual extrusion",
  "Auto bed leveling",
  "Large build volume",
  "Fine detail (< 0.1mm)",
  "Water-soluble supports",
  "High speed printing",
  "WiFi connectivity"
];

// Application routes
export const ROUTES: Record<string, string> = {
  HOME: "/",
  LISTINGS: "/listings",
  LISTING_DETAILS: "/listing/:id",
  ADD_LISTING: "/upload-design",
  REVIEWS: "/reviews/:id"
};
