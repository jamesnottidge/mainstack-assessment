import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UilApps } from "@iconscout/react-unicons";

const ProfileButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button />
      </PopoverTrigger>
      <PopoverContent className="mr-8 w-[400px]">
        <div className="flex items-center rounded-md px-4 py-2 mb-4 ml-2 w-full ">
          <div className="mr-2 p-3 rounded-full bg-black text-white">OJ</div>
          <div className="flex flex-col">
            <span className="text-black mr-2">Olivia Jones</span>
            <span className="text-gray-500">oliviajones@gmail.com</span>
          </div>
        </div>
        <DropdownOption title="Settings" icon={<UilApps />} />
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
    <div className="flex items-center rounded-md px-4 py-2 hover:border hover:border-gray-200 w-full hover:cursor-pointer ">
      {icon}
      <div className="flex flex-col">
        <span className="text-black ml-1">{title}</span>
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <div
      className={`pl-1 pr-3 py-1 rounded-full focus:outline-none flex bg-gray-200 text-white text-gray-500"`}
    >
      <div className="mr-3 p-3 text-xs rounded-full bg-black text-white">OJ</div>
      <UilApps className={` font-bold text-black my-auto`} />
    </div>
  );
};
