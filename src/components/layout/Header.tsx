import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SousLogo from '../ui/SousLogo';
import SplashScreen from '../home/SplashScreen';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showLogo?: boolean;
  rightAction?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  showLogo = true,
  rightAction
}) => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState<string>('');
  const [showSplash, setShowSplash] = useState(false);
  const [machineLevel] = useState<'full' | 'mid' | 'empty'>('mid');

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogoClick = () => {
    setShowSplash(true);
    setTimeout(() => setShowSplash(false), 3000);
  };

  return (
    <>
      {showSplash && <SplashScreen />}
      
      <header className="bg-white dark:bg-gray-800 bg-day-surface shadow-md p-4 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          {showBackButton && (
            <button 
              onClick={handleBack}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 hover:bg-day-accent"
              aria-label="Go back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300 text-day-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {showLogo && (
            <div onClick={handleLogoClick} className="cursor-pointer">
              <SousLogo size="small" />
            </div>
          )}
          {title && (
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white text-day-text">{title}</h1>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {/* Current Time */}
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 text-day-text">
            {currentTime}
          </div>
          
          {/* Machine Level Indicator */}
          <div className="flex items-center">
            <div className="relative w-6 h-4 bg-gray-200 dark:bg-gray-700 bg-day-accent rounded">
              {machineLevel === 'full' && (
                <div className="absolute inset-0 bg-green-500 rounded" style={{ width: '100%' }}></div>
              )}
              {machineLevel === 'mid' && (
                <div className="absolute inset-0 bg-yellow-500 rounded" style={{ width: '50%' }}></div>
              )}
              {machineLevel === 'empty' && (
                <div className="absolute inset-0 bg-red-500 rounded" style={{ width: '15%' }}></div>
              )}
            </div>
            <span className="ml-1 text-xs text-gray-600 dark:text-gray-400 text-day-text">
              {machineLevel.charAt(0).toUpperCase() + machineLevel.slice(1)}
            </span>
          </div>
          
          {/* Status indicators - Wi-Fi */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          
          {/* Status indicators - Battery */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12H3v8h18v-8h-2M7 8h10v4H7V8z" />
            </svg>
          </div>

          {rightAction}
        </div>
      </header>
    </>
  );
};

export default Header;
