import React from 'react';

interface SousLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const SousLogo: React.FC<SousLogoProps> = ({ size = 'medium', className = '' }) => {
  // Size classes based on the size prop
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-32 h-32',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} flex flex-col items-center justify-center bg-logo-bg text-day-text font-bold rounded-full`}>
        <span className={`${size === 'small' ? 'text-xs' : size === 'medium' ? 'text-xl' : 'text-4xl'}`}>SOUS</span>
      </div>
    </div>
  );
};

export default SousLogo;
