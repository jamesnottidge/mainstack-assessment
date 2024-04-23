"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import CheckBoxOption from "./CheckBoxOption";
import { ChevronDown, ChevronUp } from "lucide-react";

const TrasactionType = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const options = [
    { id: 1, label: "Store Transactions", checked: false },
    { id: 2, label: "Get Tipped", checked: false },
    { id: 3, label: "Withdrawals", checked: false },
    { id: 4, label: "Chargebacks", checked: false },
    { id: 5, label: "Cashbacks", checked: false },
    { id: 6, label: "Refer & Earn", checked: false },
  ];

  return (
    <div>
      <div className="w-full mt-4 mb-2">
        <p
        className="font-semibold"
        >Transaction Type</p>
      </div>
      <Popover onOpenChange={handleOpenChange}>
        <PopoverTrigger className="w-full">
          <div
            className={`rounded-lg flex justify-between px-3 py-2  ${
              isOpen ? "border border-3 border-black" : "border border-gray-500"
            }`}
          >
            <span
            className="truncate text-xs my-auto"
            >
            {selectedOptions.length > 0
              ? selectedOptions.join(", ")
              : "Select transaction type"}
              </span>
              {
                isOpen ? <ChevronUp className="h-6 w-6 ml-2" /> : <ChevronDown className="h-6 w-6 ml-2" />
              }
              
          </div>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="center" className="w-[30vw] max-w-[570px] border-none ">
          {options.map((option) => (
            <CheckBoxOption
              key={option.id}
              id={option.id.toString()}
              label={option.label}
              checked={selectedOptions.includes(option.label)}
              onChange={(checked) => {
                if (checked) {
                  setSelectedOptions([...selectedOptions, option.label]);
                } else {
                  setSelectedOptions(
                    selectedOptions.filter((item) => item !== option.label)
                  );
                }
              }}
            />
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TrasactionType;
