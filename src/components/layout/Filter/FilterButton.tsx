import React from "react";
interface ButtonProps {
    text: string;
    activeButtonId?: string;
    id: string;
    onClick?: (id: string) => void;
}

const Button: React.FC<ButtonProps> = ({
    text,
    activeButtonId,
    id,
    onClick,
}) => {
    return (
        <button
            onClick={() => onClick && onClick(id)}
            className={`px-3 py-2 rounded-full focus:outline-none flex text-nowrap ${
                activeButtonId === id ? "bg-black text-white" : "text-gray-500"
            }`}
        >
            <span className="text-xs">{text}</span>
        </button>
    );
};


export default Button;