"use client";
import React from "react";
import { FigureTile } from "./FigureTile";
import { useTransactionProvider } from "@/contexts/TransactionContext";

export const Figures = () => {
  const { wallet } = useTransactionProvider();
  const walletArray = wallet ? Object.keys(wallet) : [];
  return (
    <div className="my-auto ml-3">
      {walletArray.map((key, i) => {
        // @ts-ignore
        return <FigureTile key={i} title={key} amount={wallet[key]} />;
      })}
    </div>
  );
};
