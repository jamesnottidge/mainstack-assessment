"use client";
import React, { useState } from "react";
import {
  UilHome,
  UilCommentAltLines,
  UilBell,
  UilChart,
  UilMoneyBill,
  UilUsersAlt,
} from "@iconscout/react-unicons";
import Button from "./Button";
import Image from "next/image";
import { AppButton } from "./AppButton";
import ProfileButton from "./ProfileButton";

const Navbar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("home");

  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="fixed left-3 right-3 bg-white z-[20]">
      <nav className=" bg-white flex items-center justify-between max-w-[96vw] rounded-full mt-4 mx-auto border-t-0 border border-gray-200 py-4 px-6">
        <div>
          <Image src="/mainstack-logo.png" alt="Logo" width={40} height={40} />
        </div>
        <div className="md:flex justify-between hidden ">
          <Button
            id="1"
            icon={<UilHome className="h-4 w-4" />}
            text="Home"
            activeButtonId={activeButton}
            onClick={handleClick}
          />
          <Button
            id="2"
            icon={<UilChart className="h-4 w-4" />}
            text="Analytics"
            activeButtonId={activeButton}
            onClick={handleClick}
          />
          <Button
            id="3"
            icon={<UilMoneyBill className="h-4 w-4" />}
            text="Revenue"
            activeButtonId={activeButton}
            onClick={handleClick}
          />
          <Button
            id="4"
            icon={<UilUsersAlt className="h-4 w-4" />}
            text="CRM"
            activeButtonId={activeButton}
            onClick={handleClick}
          />
          <AppButton />
        </div>
        <div className="flex items-center space-x-4">
          <UilBell className="h-5 w-5" />
          <UilCommentAltLines className="h-5 w-5" />
          <ProfileButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
