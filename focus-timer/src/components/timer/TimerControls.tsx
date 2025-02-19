import React, { useState } from 'react';
import ProgressBar from '../common/ProgressBar'; // Ensure the correct import path

interface TimerControlsProps {
  timeRemaining: number;
  timerState: 'idle' | 'running' | 'paused';
  onStartPause: () => void;
  onReset: () => void;
  onTimeChange: (time: number) => void; // Function to handle time change
}

const TimerControls: React.FC<TimerControlsProps> = ({
  timeRemaining,
  timerState,
  onStartPause,
  onReset,
  onTimeChange,
}) => {
  const [inputTime, setInputTime] = useState<number>(Math.floor(timeRemaining / 60)); // Initial time in minutes
  
  const totalTime = 25 * 60; // Total time in seconds (25 minutes)

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setInputTime(value);
      onTimeChange(value * 60); // Update timeRemaining in the parent component
    }
  };

  const progress = timeRemaining > 0 ? timeRemaining / totalTime : 0;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Time Input */}
      <div className="mb-4">
        <input
          type="number"
          value={inputTime}
          onChange={handleTimeChange}
          className="p-2 rounded-md text-xl text-black"
          min="1"
        />
        <span className="text-xl ml-2">minutes</span>
      </div>

      {/* Circular Progress Bar */}
      <ProgressBar progress={progress} />

      {/* Timer Display */}
      <div
        className={`text-5xl font-bold my-4 ${timerState === 'running' ? 'text-black' : 'text-white'}`} // Adjust font size and color
      >
        {`${Math.floor(timeRemaining / 60)}:${String(timeRemaining % 60).padStart(2, '0')}`}
      </div>

      {/* Timer Controls */}
      <div className="flex space-x-4">
        <button
          onClick={onStartPause}
          className={`px-4 py-2 rounded-full ${timerState === 'running' ? 'bg-blue-500' : 'bg-green-500'}`}
        >
          {timerState === 'running' ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={onReset}
          className="px-4 py-2 rounded-full bg-red-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerControls;
