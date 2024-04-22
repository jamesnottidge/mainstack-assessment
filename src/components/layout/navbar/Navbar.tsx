import React, { useState } from "react";
import { UilHome } from "@iconscout/react-unicons";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("home");

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
    // Add logic to handle button click
  };

  return (
    <nav className="flex items-center justify-between bg-gray-100 py-4 px-6">
      <div className="flex space-x-4">
        <Button
          id="1"
          icon={UilHome}
          text="Home"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <Button
          id="2"
          icon={UilHome}
          text="Analytics"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <Button
          id="3"
          icon={UilHome}
          text="Revenue"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <Button
          id="4"
          icon={UilHome}
          text="CRM"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        {/* Add more buttons as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
