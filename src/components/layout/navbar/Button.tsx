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
      className={`lg:px-6 lg:py-4 px-4 py-2 rounded-full focus:outline-none font-normal flex items-center text-[16px] ${
        activeButtonId === id ? "bg-black text-white " : "text-gray-500"
      }`}
    >
      {icon}
      <span className="ml-2 font-bold">{text}</span>
    </button>
  );
};

export default Button;
