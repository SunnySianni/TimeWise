import React from "react";

interface TimerDisplayProps {
  timeRemaining: number; // Time remaining in seconds
  timerState: 'idle' | 'running' | 'paused'; // Timer state (idle, running, paused)
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeRemaining, timerState }) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  // Define a class for the timer color based on the state
  let timerColorClass = "text-white"; // Default to white when idle

  if (timerState === "running") {
    timerColorClass = "text-black"; // Change to black when running
  } else if (timerState === "paused") {
    timerColorClass = "text-red-500"; // Change to red when paused
  }

  return (
    <div className="flex justify-center items-center text-6xl font-bold">
      <span className={timerColorClass}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};

export default TimerDisplay;
