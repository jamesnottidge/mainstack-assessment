"use client";
import React, { useState } from "react";
import Image from "next/image";
import { UilApps } from "@iconscout/react-unicons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import { UilAngleRight, UilAngleDown } from "@iconscout/react-unicons";

interface DropdownOptionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  hoverIcon?: ReactNode;
}

export const AppButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button />
      </PopoverTrigger>
      <PopoverContent className="mr-2 w-[400px]">
        <DropdownOption
          title="Option 1"
          subtitle="Subtitle 1"
          imageSrc="/mainstack-logo.png"
          hoverIcon={<UilAngleRight />}
        />
      </PopoverContent>
    </Popover>
  );
};

export default AppButton;

const DropdownOption: React.FC<DropdownOptionProps> = ({
  title,
  subtitle,
  imageSrc,
  hoverIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex items-center rounded-md px-4 py-2 hover:border hover:border-gray-200 w-full hover:cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt="option icon"
        width={30}
        height={30}
        className="mr-4"
      />
      <div className="flex flex-col">
        <span className="text-black">{title}</span>
        <span className="text-gray-500">{subtitle}</span>
      </div>
      {isHovered && <div className="ml-auto">{hoverIcon}</div>}
    </div>
  );
};

const Button = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={`px-4 py-4 rounded-full focus:outline-none flex ${
        active ? "bg-black text-white" : "text-gray-500"
      }}`}
      onClick={() => setActive(!active)}
    >
      <UilApps 
      className={`ml-2 font-bold ${active ? "text-white" : null}`}
      />
      <span className={`ml-2 font-bold ${active ? "text-white" : null}`}>
        Apps
      </span>
      {/* {active && (
        <div>
          <div className="border border-gray-200 h-full"></div>

          <span className="font-bold">
            Link In Bio <UilAngleDown />
          </span>
        </div>
      )} */}
    </div>
  );
};
