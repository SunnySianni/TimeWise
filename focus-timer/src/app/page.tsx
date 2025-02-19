'use client'; // This marks the file as a client component.

import React, { useState, useEffect } from 'react';
import TimerControls from '@/components/timer/TimerControls';
import TimerDisplay from '@/components/timer/TimerDisplay';

// Define timer state types
type TimerState = 'idle' | 'running' | 'paused';

const TimerPage: React.FC = () => {
  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [timeRemaining, setTimeRemaining] = useState<number>(25 * 60); // Default to 25-minute session in seconds
  const [sessionComplete, setSessionComplete] = useState<boolean>(false);

  // Handle start/pause functionality
  const handleStartPause = () => {
    if (timerState === 'running') {
      setTimerState('paused');
    } else {
      setTimerState('running');
    }
  };

  // Reset functionality
  const handleReset = () => {
    setTimeRemaining(25 * 60); // Reset to default 25 minutes
    setTimerState('idle');
    setSessionComplete(false);
  };

  // Update the time based on user input
  const handleTimeChange = (time: number) => {
    setTimeRemaining(time);
    setTimerState('idle'); // Ensure timer is idle when the time is updated
    setSessionComplete(false); // Reset the session complete state
  };

  // Timer countdown effect (handles countdown in page.tsx)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timerState === 'running' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setSessionComplete(true); // Mark session complete when time is up
      setTimerState('idle');
    }

    // Cleanup the interval on component unmount or when timer is paused
    return () => clearInterval(interval);
  }, [timerState, timeRemaining]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      {/* App Title */}
      <h1 className="text-4xl font-bold text-white mb-8">Focus Timer</h1>

      {/* Timer Controls Component */}
      <div className="w-full max-w-md">
        <TimerControls
          timeRemaining={timeRemaining}
          timerState={timerState}
          onStartPause={handleStartPause}
          onReset={handleReset}
          onTimeChange={handleTimeChange} // Pass the time change handler to TimerControls
        />
      </div>

      {/* Session Complete Message */}
      {sessionComplete && (
        <div className="mt-4 text-2xl font-semibold text-white">Session Complete!</div>
      )}
    </div>
  );
};

export default TimerPage;
