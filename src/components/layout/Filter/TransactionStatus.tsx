//@ts-nocheck
"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CheckBoxOption from "./CheckBoxOption";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTransactionProvider } from "@/contexts/TransactionContext";
import { Capitalize } from "@/lib/utils";

const TrasactionStatus = () => {
  const { filterStatuses, setFilterStatuses } = useTransactionProvider();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const options = [
    { id: 1, label: "successful", checked: false },
    { id: 2, label: "pending", checked: false },
    { id: 3, label: "failed", checked: false },
  ];

  return (
    <div 
    className=""
    >
      <div className="w-full mt-6 mb-2">
        <p className="font-semibold">Transaction Status</p>
      </div>
      <Popover onOpenChange={handleOpenChange}>
        <PopoverTrigger className="w-full">
          <div
            className={`rounded-lg flex justify-between px-3 py-2  ${
              isOpen ? "border border-3 border-black" : "border border-gray-500"
            }`}
          >
            <span className="truncate text-xs my-auto">
              {filterStatuses.length > 0
                ? filterStatuses.join(", ")
                : "Select transaction status"}
            </span>
            {isOpen ? (
              <ChevronUp className="h-6 w-6 ml-2" />
            ) : (
              <ChevronDown className="h-6 w-6 ml-2" />
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="center"
          className=" w-[70vw] sm:w-[30vw] max-w-[570px] border-none z-[35]"
        >
          {options.map((option) => (
            <CheckBoxOption
              key={option.id}
              id={option.id.toString()}
              label={Capitalize(option.label)}
              checked={filterStatuses.includes(option.label)}
              onChange={(checked) => {
                if (checked) {
                  setFilterStatuses([...filterStatuses, option.label]);
                } else {
                  setFilterStatuses(
                    filterStatuses.filter((item: any) => item !== option.label)
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

export default TrasactionStatus;
