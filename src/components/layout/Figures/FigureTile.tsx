import React from "react";
import { UilInfoCircle } from "@iconscout/react-unicons";
import { formatCurrency } from "@/lib/utils";

interface Props {
  title: string;
  amount: number;
}

export const FigureTile = ({ title, amount }: Props) => {
  return (
    <div className="mt-6 w-[90vw] sm:w-[30vw] max-w-[350px]">
      <div className="flex justify-between mb-3">
        <p className="text-gray-500 text-sm">
          {title
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </p>
        <UilInfoCircle className="text-gray-500 text-sm" />
      </div>
      <div>
        <h1 className="text-2xl  font-bold">USD {formatCurrency(amount)}</h1>
      </div>
    </div>
  );
};
