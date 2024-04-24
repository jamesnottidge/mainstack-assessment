"use client";
import React from "react";
import TransactionHeader from "./TransactionHeader";
import { TransactionTile } from "./TransactionTile";
import { useTransactionProvider } from "@/contexts/TransactionContext";
import { formatCurrency, formatDate } from "@/lib/utils";

function Transactions() {
  const { filteredTransactions } = useTransactionProvider();

  const displayedTransactions = filteredTransactions.map(
    (transaction: any, index) => {
      return {
        amount: formatCurrency(transaction.amount),
        date: formatDate(transaction.date),
        title: (transaction.metadata
          ? transaction.metadata.product_name
            ? transaction.metadata.product_name
            : transaction.metadata.type
          : transaction.type
        )
         ,
        status: transaction.metadata
          ? transaction.metadata.name
          : transaction.status,
      };
    }
  );

  return (
    <div
    className="mb-24"
    >
      <TransactionHeader />
      {displayedTransactions.map((transaction: any, index: number) => {
        return (
          <TransactionTile
            key={index}
            amount={transaction.amount}
            date={transaction.date}
            title={transaction.title}
            name={transaction.status}
          />
        );
      })}
    </div>
  );
}

export default Transactions;
