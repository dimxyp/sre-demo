// Define types for our application data
import { ReactNode } from 'react';

export type MaterialType = {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
};

export type PrinterCategory = {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
};

export type Specification = {
  id: string;
  name: string;
  icon: string;
};

export type Review = {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
};

export type Listing = {
  id: string;
  name: string;
  description: string;
  type: string;
  location: string;
  supportedMaterials: string[];
  specifications: string[];
  photos: string[];
  rating: number;
  reviews: Review[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
};

export type AppRoute = {
  path: string;
  label: string;
};

export type FormState = {
  name: string;
  description: string;
  type: string;
  location: string;
  supportedMaterials: string[];
  specifications: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
};
