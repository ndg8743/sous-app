import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recipes } from '../../data/mockData';

const GuidedBakingMode: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const recipe = recipes.find(r => r.id === id);
  const currentStep = recipe?.steps[currentStepIndex];

  const startTimer = useCallback(() => {
    if (currentStep?.timer) {
      setTimer(currentStep.timer);
      setIsTimerRunning(true);
    }
  }, [currentStep]);

  const pauseTimer = () => {
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    if (currentStep?.timer) {
      setTimer(currentStep.timer);
      setIsTimerRunning(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isTimerRunning && timer !== null && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev === null || prev <= 0) {
            if (interval) clearInterval(interval);
            setIsTimerRunning(false);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timer]);

  const handleNextStep = () => {
    if (currentStep && recipe) {
      setCompletedSteps(prev => [...prev, currentStep.id]);
      if (currentStepIndex < recipe.steps.length - 1) {
        setCurrentStepIndex(prev => prev + 1);
        setTimer(recipe.steps[currentStepIndex + 1]?.timer || null);
        setIsTimerRunning(false);
      }
    }
  };

  const handlePrevStep = () => {
    if (recipe && currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setTimer(recipe.steps[currentStepIndex - 1]?.timer || null);
      setIsTimerRunning(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!recipe) {
    return (
      <div className="min-h-screen bg-sous-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Recipe not found</h2>
          <button
            onClick={() => navigate('/recipes')}
            className="sous-button bg-sous-primary"
          >
            Back to Recipes
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentStepIndex + 1) / recipe.steps.length) * 100;

  return (
    <div className="min-h-screen bg-sous-background dark:bg-gray-900">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full bg-sous-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm p-4">
        <button
          onClick={() => navigate(`/recipes/${recipe.id}`)}
          className="mb-4 flex items-center text-gray-600 dark:text-gray-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Exit Guided Mode
        </button>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">{recipe.name}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Step {currentStepIndex + 1} of {recipe.steps.length}
        </p>
      </div>

      {/* Current Step */}
      {currentStep && (
        <div className="p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-sous-primary text-white font-medium">
                {currentStepIndex + 1}
              </span>
              <div className="ml-4 flex-1">
                <p className="text-lg text-gray-900 dark:text-white">
                  {currentStep.instruction}
                </p>
                
                {currentStep.timer && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Timer</span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        {timer !== null ? formatTime(timer) : formatTime(currentStep.timer)}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      {!isTimerRunning && (
                        <button
                          onClick={startTimer}
                          className="sous-button bg-sous-primary flex-1"
                        >
                          {timer === null || timer === currentStep.timer ? 'Start' : 'Resume'}
                        </button>
                      )}
                      {isTimerRunning && (
                        <button
                          onClick={pauseTimer}
                          className="sous-button bg-sous-accent flex-1"
                        >
                          Pause
                        </button>
                      )}
                      <button
                        onClick={resetTimer}
                        className="sous-button bg-sous-secondary flex-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                )}

                {currentStep.imageUrl && (
                  <img
                    src={currentStep.imageUrl}
                    alt={`Step ${currentStepIndex + 1}`}
                    className="mt-4 rounded-lg w-full h-48 object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex justify-between space-x-4">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className="sous-button bg-sous-secondary flex-1"
          >
            Previous
          </button>
          <button
            onClick={handleNextStep}
            disabled={currentStepIndex === recipe.steps.length - 1}
            className="sous-button bg-sous-primary flex-1"
          >
            {currentStepIndex === recipe.steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>

        {/* Step Overview */}
        <div className="mt-4">
          <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4 space-x-2 pb-2">
            {recipe.steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStepIndex(index)}
                className={`flex-none w-8 h-8 rounded-full flex items-center justify-center ${
                  completedSteps.includes(step.id)
                    ? 'bg-sous-success text-white'
                    : index === currentStepIndex
                    ? 'bg-sous-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedBakingMode;
