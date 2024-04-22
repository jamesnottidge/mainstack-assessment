import React from "react";

interface ButtonProps {
  icon: any;
  text: string;
  activeButtonId?: string;
  id: string;
  onClick?: (id:string) => void;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  activeButtonId,
  id,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick && onClick(id)}
      className={`px-4 py-2 rounded focus:outline-none flex ${
        activeButtonId === id ? "bg-black text-white" : "text-gray-500"
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default Button;