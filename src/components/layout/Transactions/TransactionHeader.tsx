"use client";
import React from "react";
import { TransactionContext } from "@/contexts/TransactionContext";
import { UilAngleDown, UilImport } from "@iconscout/react-unicons";
import { useTransactionProvider } from "@/contexts/TransactionContext";

const TransactionHeader = () => {
  const { setShowFilter, filteredTransactions } = useTransactionProvider();
  return (
    <>
      <div className="flex flex-wrap justify-between items-center mt-4">
        <div>
          <p className="  sm:text-2xl  font-extrabold">
            {filteredTransactions ? filteredTransactions.length : 0}{" "}
            Transactions
          </p>
          <p className="text-gray-500 text-xs">
            Your transactions for the last 7 days
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              console.log("Filter button clicked");
              setShowFilter(true);
            }}
            className="flex items-center space-x-2 text-xs font-semibold bg-gray-200 rounded-full focus:outline-none border border-gray-100 px-6 py-3"
          >
            Filter
            <UilAngleDown />
          </button>
          <button className="flex items-center space-x-2 text-xs font-semibold bg-gray-200 rounded-full focus:outline-none border border-gray-100 px-6 py-3">
            Export list
            <UilImport className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
      <hr className="my-6 border border-gray-100 " />
    </>
  );
};

export default TransactionHeader;
