// src/components/common/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

// Button component with customizable label and styles
const Button: React.FC<ButtonProps> = ({ onClick, label, className = '' }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg transition ${className}`}>
      {label}
    </button>
  );
};

export default Button;
