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
import { Link } from "lucide-react";
import LinkIcon from "@/components/ui/LinkIcon";
import MediaIcon from "@/components/ui/MediaIcon";
import InvoiceIcon from "@/components/ui/InvoiceIcon";
import StoreIcon from "@/components/ui/StoreIcon";

interface DropdownOptionProps {
  title: string;
  subtitle: string;
  imageSrc: ReactNode;
  hoverIcon?: ReactNode;
}

export const AppButton = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleActiveChange = (active: boolean) => {
    setActive(active);
  };
  return (
    <Popover onOpenChange={handleActiveChange}>
      <PopoverTrigger>
        <Button active={active} setActive={setActive} />
      </PopoverTrigger>
      <PopoverContent className="mr-2 mt-4 w-[400px]">
        <DropdownOption
          title="Link in Bio"
          subtitle="Manage your Link in Bio"
          imageSrc={<LinkIcon />}
          hoverIcon={<UilAngleRight />}
        />
        <DropdownOption
          title="Store"
          subtitle="Manage your Store activities"
          imageSrc={<StoreIcon />}
          hoverIcon={<UilAngleRight />}
        />
        <DropdownOption
          title="Media Kit"
          subtitle="Manage your Media Kit"
          imageSrc={<MediaIcon />}
          hoverIcon={<UilAngleRight />}
        />
        <DropdownOption
          title="Invoicing"
          subtitle="Manage your Invoices"
          imageSrc={<InvoiceIcon />}
          hoverIcon={<UilAngleRight />}
        />
        <DropdownOption
          title="Bookings"
          subtitle="Manage your Bookings"
          imageSrc={<MediaIcon />}
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
      className="flex items-center rounded-xl px-4 py-4 my-4 hover:border hover:border-gray-100 hover:shadow-md w-full hover:cursor-pointer "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 border shadow-md border-gray-100 rounded-md mr-2">
        {imageSrc}
      </div>
      <div className="flex flex-col">
        <span className="text-black font-semibold ">{title}</span>
        <span className="text-gray-500 text-sm">{subtitle}</span>
      </div>
      {isHovered && <div className="ml-auto">{hoverIcon}</div>}
    </div>
  );
};
const Button = ({ active, setActive }: { active: boolean; setActive: any }) => {
  return (
    <div
      className={`px-6 rounded-full focus:outline-none flex ${
        active ? "bg-gray-900 text-white" : "text-gray-500"
      }`}
    >
      <p className="py-2 flex items-center ">
        <UilApps className={`ml-2 font-normal w-4 h-4 ${active ? "text-white" : null}`} />
        <span className={`ml-2 ${active ? "text-white text-sm " : "font-semibold"}`}>
          Apps
        </span>
      </p>
      {active && (
        <>
          <div className="h-12 w-px mx-4 bg-white"></div>
          <p className="py-2 flex items-center">
            <span className="ml-2 font-normal text-sm">Link In Bio</span>
            <UilAngleDown className="ml-2 font-normal w-4 h-4" />
          </p>
        </>
      )}
    </div>
  );
};
