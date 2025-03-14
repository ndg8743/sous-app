import React, { useState, useEffect, useCallback } from 'react';
import { usePreferences } from '../../context/PreferencesContext';

type Unit = 'g' | 'oz' | 'ml' | 'fl oz';

const MeasureInterface: React.FC = () => {
  const { preferences } = usePreferences();
  const [currentWeight, setCurrentWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState<number | null>(null);
  const [customTargetInput, setCustomTargetInput] = useState<string>('');
  const [unit, setUnit] = useState<Unit>(preferences.measurementSystem === 'metric' ? 'g' : 'oz');
  const [isStable, setIsStable] = useState(true);
  const [isTared, setIsTared] = useState(true);

  // Simulate reading from device
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate weight fluctuation
      setCurrentWeight(prev => {
        const fluctuation = Math.random() * 0.2 - 0.1;
        return Math.max(0, prev + fluctuation);
      });
      
      // Simulate stability
      setIsStable(Math.random() > 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleTare = () => {
    setCurrentWeight(0);
    setIsTared(true);
  };

  const toggleUnit = () => {
    if (unit === 'g') setUnit('oz');
    else if (unit === 'oz') setUnit('g');
    else if (unit === 'ml') setUnit('fl oz');
    else setUnit('ml');
  };

  const convertWeight = useCallback((weight: number, from: Unit, to: Unit): number => {
    if (from === to) return weight;
    
    const conversions: Record<string, number> = {
      'g_oz': 0.035274,
      'oz_g': 28.3495,
      'ml_fl oz': 0.033814,
      'fl oz_ml': 29.5735
    };

    const key = `${from}_${to}`;
    return weight * (conversions[key] || 1);
  }, []);

  const displayWeight = (weight: number): string => {
    const converted = convertWeight(weight, 'g', unit);
    return converted.toFixed(1);
  };

  const getProgressPercentage = (): number => {
    if (!targetWeight) return 0;
    return Math.min(100, (currentWeight / targetWeight) * 100);
  };

  return (
    <div className="pb-20">
      {/* Main Display */}
      <div className="p-4 bg-white dark:bg-gray-800 shadow-sm">
        <div className="text-center p-8">
          <div className="relative inline-block transition-all duration-300 transform hover:scale-105">
            <span className="text-6xl font-bold text-gray-900 dark:text-white transition-all duration-300">
              {displayWeight(currentWeight)}
            </span>
            <span className="text-2xl ml-2 text-gray-600 dark:text-gray-400">
              {unit}
            </span>
            {!isStable && (
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 animate-pulse">
                Stabilizing...
              </span>
            )}
          </div>

          {targetWeight && (
            <div className="mt-4 animate-fadeIn">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-day-dark h-2.5 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Target: <span className="font-bold">{displayWeight(targetWeight)}</span> {unit}
              </p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={handleTare}
            className={`sous-button ${
              isTared ? 'bg-sous-secondary' : 'bg-sous-primary'
            } transform transition-transform hover:scale-105 active:scale-95`}
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-balance-scale mr-2"></i>
              Tare
            </span>
          </button>
          <button
            onClick={toggleUnit}
            className="sous-button bg-sous-secondary transform transition-transform hover:scale-105 active:scale-95"
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-exchange-alt mr-2"></i>
              {unit} → {unit === 'g' ? 'oz' : unit === 'oz' ? 'g' : unit === 'ml' ? 'fl oz' : 'ml'}
            </span>
          </button>
          <button
            onClick={() => alert('Dispensing ingredient...')}
            className="sous-button bg-day-dark text-white transform transition-transform hover:scale-105 active:scale-95"
          >
            <span className="flex items-center justify-center">
              <i className="fas fa-fill-drip mr-2"></i>
              Dispense
            </span>
          </button>
        </div>
      </div>

      {/* Quick Targets */}
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Quick Targets
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[50, 100, 150, 200, 250, 500].map(weight => (
            <button
              key={weight}
              onClick={() => {
                setTargetWeight(weight);
                setCustomTargetInput(displayWeight(weight));
              }}
              className={`sous-button ${
                targetWeight === weight
                  ? 'bg-sous-primary'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              } transform transition-transform hover:scale-105 active:scale-95`}
            >
              {displayWeight(weight)} {unit}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Target Input */}
      <div className="p-4 animate-fadeIn">
        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Custom target..."
            value={customTargetInput}
            className="sous-input flex-1 transition-all duration-300 focus:ring-2 focus:ring-sous-accent"
            onChange={(e) => {
              setCustomTargetInput(e.target.value);
              setTargetWeight(parseFloat(e.target.value) || null);
            }}
          />
          <button
            onClick={() => {
              setTargetWeight(null);
              setCustomTargetInput('');
            }}
            className="sous-button bg-sous-secondary transform transition-transform hover:scale-105 active:scale-95"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Device Status */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full ${isStable ? 'bg-sous-success' : 'bg-sous-accent'}`} />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {isStable ? 'Stable' : 'Unstable'}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-sous-success" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Connected
              </span>
            </div>
          </div>
          <button
            onClick={handleTare}
            className="sous-button bg-sous-primary"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeasureInterface;
