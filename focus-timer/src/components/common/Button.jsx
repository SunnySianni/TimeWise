import React from "react";

const Button = ({ onClick, label, type = "button", className = "", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 disabled:bg-gray-400 ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
