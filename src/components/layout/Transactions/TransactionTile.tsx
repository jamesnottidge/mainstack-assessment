import React from "react";
import { UilArrowDownLeft, UilArrowUpRight } from "@iconscout/react-unicons";
import { Capitalize, formatCurrency } from "@/lib/utils";

interface Props {
  title: string;
  name: string;
  amount: string;
  date: string;
}

export const TransactionTile = ({ title, name, amount, date }: Props) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex">
        <div
          className={`${
            title === "withdrawal" ? "bg-red-100" : "bg-green-100"
          } rounded-full w-12 h-12 flex items-center justify-center`}
        >
          {title === "withdrawal" ? (
            <UilArrowUpRight className={` text-red-600 font-thin`} />
          ) : (
            <UilArrowDownLeft className={` text-green-600 font-thin`} />
          )}
        </div>
        <div className="ml-2">
          <p className="mb-4 text-sm">{Capitalize(title)}</p>
          <p
            className={`text-gray-500 text-xs
          ${name === "successful" ? "text-green-600" : ""}
          `}
          >
            {Capitalize(name)}
          </p>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold mb-2">USD {amount}</p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </div>
  );
};
