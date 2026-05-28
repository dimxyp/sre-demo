// Constants with JSX Components
import React from 'react';
import { MaterialType } from '../types/types';

// Material types that are supported by the application
export const MATERIAL_TYPES: MaterialType[] = [
  { id: "PLA", name: "PLA", icon: <span style={{ fontSize: '2.625rem' }}>🟢</span>, description: "Easy to print, biodegradable" },
  { id: "ABS", name: "ABS", icon: <span style={{ fontSize: '2.625rem' }}>🔴</span>, description: "Durable, heat-resistant" },
  { id: "PETG", name: "PETG", icon: <span style={{ fontSize: '2.625rem' }}>🔵</span>, description: "Strong, flexible, food-safe" },
  { id: "Resin (SLA)", name: "Resin (SLA)", icon: <span style={{ fontSize: '2.625rem' }}>💎</span>, description: "Ultra-high detail prints" },
  { id: "Nylon", name: "Nylon", icon: <span style={{ fontSize: '2.625rem' }}>⚪</span>, description: "Tough, wear-resistant" },
  { id: "TPU (flexible)", name: "TPU (flexible)", icon: <span style={{ fontSize: '2.625rem' }}>🟡</span>, description: "Flexible, rubber-like material" }
];

// Export the constants for use in components
export default {
  MATERIAL_TYPES
};