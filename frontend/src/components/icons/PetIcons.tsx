import React from 'react';

interface MaterialIconProps {
  type?: string;
  className?: string;
  size?: number;
}

export const PLAIcon: React.FC<MaterialIconProps> = ({ className = '', size = 24 }) => (
  <span className={className} style={{ fontSize: `${size/16}rem` }}>🟢</span>
);

export const ABSIcon: React.FC<MaterialIconProps> = ({ className = '', size = 24 }) => (
  <span className={className} style={{ fontSize: `${size/16}rem` }}>🔴</span>
);

export const PETGIcon: React.FC<MaterialIconProps> = ({ className = '', size = 24 }) => (
  <span className={className} style={{ fontSize: `${size/16}rem` }}>🔵</span>
);

export const ResinIcon: React.FC<MaterialIconProps> = ({ className = '', size = 24 }) => (
  <span className={className} style={{ fontSize: `${size/16}rem` }}>💎</span>
);

export const NylonIcon: React.FC<MaterialIconProps> = ({ className = '', size = 24 }) => (
  <span className={className} style={{ fontSize: `${size/16}rem` }}>⚪</span>
);

export const TPUIcon: React.FC<MaterialIconProps> = ({ className = '', size = 24 }) => (
  <span className={className} style={{ fontSize: `${size/16}rem` }}>🟡</span>
);

// Keep old exports for backward compatibility
export const DogIcon = PLAIcon;
export const CatIcon = ABSIcon;
export const BirdIcon = PETGIcon;
export const SmallMammalIcon = ResinIcon;
export const OtherPetIcon = NylonIcon;

const MaterialIcon: React.FC<MaterialIconProps> = ({ type, className = '', size = 24 }) => {
  switch (type) {
    case 'PLA':
      return <PLAIcon className={className} size={size} />;
    case 'ABS':
      return <ABSIcon className={className} size={size} />;
    case 'PETG':
      return <PETGIcon className={className} size={size} />;
    case 'Resin (SLA)':
      return <ResinIcon className={className} size={size} />;
    case 'Nylon':
      return <NylonIcon className={className} size={size} />;
    case 'TPU (flexible)':
      return <TPUIcon className={className} size={size} />;
    default:
      return <span className={className} style={{ fontSize: `${size/16}rem` }}>⚙️</span>;
  }
};

export default MaterialIcon;
