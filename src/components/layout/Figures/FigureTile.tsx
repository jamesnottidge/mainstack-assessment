import React from "react";
import { UilInfoCircle } from "@iconscout/react-unicons";

export const FigureTile = () => {
  return (
    <div
    className="mt-6 w-[30vw] max-w-[350px]"
    >
      <div className="flex justify-between mb-3">
        <p
        className="text-gray-500 text-sm"
        >Ledger Balance</p>
        <UilInfoCircle
        className="text-gray-500 text-sm" 
        />
      </div>
      <div>
        <h1 className="text-2xl  font-bold">USD 135,000.00</h1>
      </div>
    </div>
  );
};
