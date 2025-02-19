import React from 'react';

interface ProgressBarProps {
  progress: number; // value between 0 and 1
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <svg
      className="transform rotate-90"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#ddd"
        strokeWidth="5"
        fill="none"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#3b82f6" // Tailwind Blue color (can be dynamic)
        strokeWidth="5"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.1s' }}
      />
    </svg>
  );
};

export default ProgressBar;
