import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SousLogo from '../ui/SousLogo';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    // Animation sequence
    const animationTimer = setInterval(() => {
      setAnimationStep(prev => {
        if (prev < 3) return prev + 1;
        return prev;
      });
    }, 600);

    // Navigate to home after animation completes
    const navigationTimer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => {
      clearInterval(animationTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-day-bg dark:bg-dark-bg">
      <div className="relative">
        <SousLogo size="large" className="mb-8" />
        
        {/* Mixing animation */}
        <div className="absolute -top-4 -right-4 text-4xl">
          {animationStep >= 1 && (
            <span className="animate-spin inline-block">
              <i className="fas fa-utensils"></i>
            </span>
          )}
        </div>
        
        {/* Baking animation */}
        <div className="absolute -bottom-4 -left-4 text-4xl">
          {animationStep >= 2 && (
            <span className="animate-pulse inline-block">
              <i className="fas fa-bread-slice"></i>
            </span>
          )}
        </div>
        
        {/* Measuring animation */}
        <div className="absolute -bottom-4 -right-4 text-4xl">
          {animationStep >= 3 && (
            <span className="animate-bounce inline-block">
              <i className="fas fa-balance-scale"></i>
            </span>
          )}
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mt-8 text-day-text dark:text-dark-text">
        SOUS
      </h1>
      
      <p className="text-lg text-day-text dark:text-dark-text mt-2 animate-pulse">
        Your smart baking measurement assistant
      </p>
    </div>
  );
};

export default SplashScreen;
