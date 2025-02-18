import React, { useState, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';

const TimerControls = () => {
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(25); // Default session duration is 25 minutes
  const [seconds, setSeconds] = useState(0);  // Start with 0 seconds
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isActive) {
      // Start the countdown
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (minutes === 0) {
              clearInterval(id); // Stop the countdown when it reaches 0
              setIsActive(false); // Stop the countdown
              return 0;
            }
            setMinutes((prevMinutes) => prevMinutes - 1); // Decrement minutes
            return 59; // Reset seconds to 59
          }
          return prevSeconds - 1; // Decrement seconds
        });
      }, 1000);
      setIntervalId(id);
      return () => clearInterval(id); // Cleanup the interval on unmount
    } else {
      clearInterval(intervalId); // Stop the interval when stopped
    }
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <p className="text-lg text-pink-500">{isActive ? 'Timer Running' : 'Timer Stopped'}</p>

      {/* Timer Display */}
      <TimerDisplay minutes={minutes} seconds={seconds} />

      <div className="mt-4">
        <button
          onClick={startTimer}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-pink-700 transition"
        >
          Start Timer
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-700 transition"
        >
          Stop Timer
        </button>
        <button
          onClick={resetTimer}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-gray-700 transition"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default TimerControls;
