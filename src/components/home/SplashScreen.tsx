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
      <div className="relative mb-16">
        <SousLogo size="xlarge" className="mb-16" />
        
        {/* Mixing animation */}
        <div className="absolute top-0 right-0 text-5xl">
          {animationStep >= 1 && (
            <span className="animate-spin inline-block">
              <i className="fas fa-utensils"></i>
            </span>
          )}
        </div>
        
        {/* Baking animation */}
        <div className="absolute bottom-0 left-0 text-5xl">
          {animationStep >= 2 && (
            <span className="animate-pulse inline-block">
              <i className="fas fa-bread-slice"></i>
            </span>
          )}
        </div>
        
        {/* Measuring animation */}
        <div className="absolute bottom-0 right-0 text-5xl">
          {animationStep >= 3 && (
            <span className="animate-bounce inline-block">
              <i className="fas fa-balance-scale"></i>
            </span>
          )}
        </div>
      </div>
      
      <p className="text-2xl text-day-text dark:text-dark-text mt-8 animate-pulse">
        Your second hand in the kitchen
      </p>
    </div>
  );
};

export default SplashScreen;
