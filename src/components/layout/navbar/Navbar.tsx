"use client";
import React, { useState } from "react";
import { UilHome, UilCommentAltLines, UilBell } from "@iconscout/react-unicons";
import Button from "./Button";
import Image from "next/image";
import { AppButton } from "./AppButton";
import  ProfileButton  from "./ProfileButton";

const Navbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("home");

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <nav className="flex items-center justify-between border border-2 max-w-[96vw] rounded-full mt-4 mx-auto border-t-0 border-gray-200 py-4 px-6">
        <div>
            <Image src="/mainstack-logo.png" alt="Logo" width={40} height={40} />
        </div>
      <div className="flex justify-between">
        <Button
          id="1"
          icon={<UilHome />}
          text="Home"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <Button
          id="2"
          icon={<UilHome />}
          text="Analytics"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <Button
          id="3"
          icon={<UilHome />}
          text="Revenue"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <Button
          id="4"
          icon={<UilHome />}
          text="CRM"
          activeButtonId={activeButton}
          onClick={handleClick}
        />
        <AppButton />
      </div>
      <div
      className="flex items-center space-x-4"
      >
        <UilBell />
        <UilCommentAltLines />
        <ProfileButton />
      </div>
    </nav>
  );
};

export default Navbar;
