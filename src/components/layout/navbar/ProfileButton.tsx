"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  UilApps,
  UilSetting,
  UilReceipt,
  UilGift,
  UilBug,
  UilUserSquare,
  UilSignout,
  UilBars
} from "@iconscout/react-unicons";
import { useTransactionProvider } from "@/contexts/TransactionContext";

const ProfileButton = () => {
  const { user, wallet } = useTransactionProvider();
  const name = user ? user?.first_name + " " + user?.last_name : "";
  const initials = name.split(" ").map((i: string) => {
    return i[0];
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Button initials={initials} />
      </PopoverTrigger>
      <PopoverContent className="mr-4 mt-6 w-[400px]">
        <div className="flex items-center rounded-md px-4 py-2 mb-4 ml-2 w-full ">
          <div className="mr-2 p-3 rounded-full bg-black text-white">
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="text-black mr-2">{name}</span>
            <span className="text-gray-500">{user?.email}</span>
          </div>
        </div>
        <DropdownOption
          title="Settings"
          icon={<UilSetting className="h-4 w-4" />}
        />
        <DropdownOption
          title="Purchase History"
          icon={<UilReceipt className="h-4 w-4" />}
        />
        <DropdownOption title="Gift" icon={<UilGift className="h-4 w-4" />} />
        <DropdownOption
          title="Integrations"
          icon={<UilApps className="h-4 w-4" />}
        />
        <DropdownOption
          title="Report Bug"
          icon={<UilBug className="h-4 w-4" />}
        />
        <DropdownOption
          title="Switch Account"
          icon={<UilUserSquare className="h-4 w-4" />}
        />
        <DropdownOption
          title="Sign Out"
          icon={<UilSignout className="h-4 w-4" />}
        />
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;

interface DropdownOptionProps {
  title: string;
  icon: any;
}

const DropdownOption: React.FC<DropdownOptionProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center rounded-md px-4 py-2 hover:border hover:border-gray-200 w-full hover:cursor-pointer my-3 ">
      {icon}
      <div className="flex flex-col">
        <span className="text-black ml-3 text-sm font-semibold">{title}</span>
      </div>
    </div>
  );
};

const Button = ({ initials }: { initials: string | string[] }) => {
  return (
    <div
      className={`pl-1 pr-3 py-1 rounded-full focus:outline-none flex bg-gray-200 bg-opacity-85 text-white text-gray-500"`}
    >
      <div className="mr-3 p-2 rounded-full bg-black bg-opacity-75 text-white text-sm">
        {initials}
      </div>
      <UilBars className={` font-bold text-black my-auto h-5 w-5`} />
    </div>
  );
};
