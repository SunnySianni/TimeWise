import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
      {children}
    </div>
  );
};

export default Card;
