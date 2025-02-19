import React, { ReactNode } from "react";

// Define the type for the props
interface CardProps {
  children: ReactNode; // 'children' prop is of type ReactNode, allowing any valid React content
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
      {children}
    </div>
  );
};

export default Card;
