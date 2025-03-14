import React from 'react';

interface SousLogoProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
}

const SousLogo: React.FC<SousLogoProps> = ({ size = 'medium', className = '' }) => {
  // Size classes based on the size prop
  const sizeClasses = {
    small: 'w-12 h-12', // Increased from w-8 h-8
    medium: 'w-24 h-24', // Increased from w-16 h-16
    large: 'w-48 h-48', // Increased from w-32 h-32
    xlarge: 'w-96 h-96', // Extra large size for splash screen
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src={`${process.env.PUBLIC_URL}/sous_logo.png`} 
        alt="SOUS Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default SousLogo;
