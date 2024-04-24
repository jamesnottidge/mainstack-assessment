"use client";
import React from "react";
import { useTransactionProvider } from "@/contexts/TransactionContext";
import { formatCurrency } from "@/lib/utils";

export default function Withdraw() {
  const { wallet } = useTransactionProvider();
  return (
    <div className="flex justify-between max-w-[500px] min-w-[300px] px-2">
      <div>
        <p className="text-gray-500 text-sm mb-6 ">Available Balance</p>
        <h1 className="sm:text-3xl text-2xl  font-extrabold">
          USD {wallet ? formatCurrency(wallet.balance) : formatCurrency(0)}
        </h1>
      </div>
      <div className="flex items-end">
        <button
          className={`sm:px-14 sm:py-4 px-8 py-3 rounded-full focus:outline-none
            bg-black text-white
          `}
        >
          <span className="text-sm">Withdraw</span>
        </button>
      </div>
    </div>
  );
}
