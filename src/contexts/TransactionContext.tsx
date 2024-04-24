"use client";
import { get } from "http";
import React from "react";
import { createContext, useEffect } from "react";
import { getTransactions, getUser, getWallet } from "@/lib/queries";
import {
  Transaction,
  User,
  Wallet,
  TransactionType,
  TransactionStatus,
  TransactionContextType,
} from "../lib/types";
import { set } from "date-fns";

export const TransactionContext = createContext({});

const TransactionProvider = ({ children }: any) => {
  useEffect(() => {
    // Fetch transactions
    getTransactions().then((data) => {
      setTransactions(data);
      setFilteredTransactions(data);
    });
    getWallet().then((data) => {
      setWallet(data);
    });
    getUser().then((data) => {
      setUser(data);
    });
  }, []);

  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = React.useState<
    Transaction[]
  >([]);
  const [wallet, setWallet] = React.useState<Wallet>();
  const [user, setUser] = React.useState<User>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterTypes, setFilterTypes] = React.useState<TransactionType[]>([]);
  const [filterStatuses, setFilterStatuses] = React.useState<
    TransactionStatus[]
  >([]);

  const filterTransactions = (
    types: TransactionType[],
    statuses: TransactionStatus[]
  ) => {
    return transactions.filter((transaction) => {
      console.log("transaction", transaction.type, transaction.status);
      const isTypeMatch =
        types.includes(transaction.type as TransactionType) ||
        (transaction.type === "deposit" &&
          types.includes("Store Transactions")) ||
        (transaction.type === "withdrawal" && types.includes("Withdrawals")) ||
        (transaction.type === "chargeback" && types.includes("Chargebacks")) ||
        (transaction.type === "cashback" && types.includes("Cashbacks")) ||
        (transaction.type === "refer_earn" && types.includes("Refer & Earn")) ||
        (transaction.type === "tip" && types.includes("Get tipped"));
      console.log("isTypeMatch", isTypeMatch);
      const isStatusMatch = statuses.includes(transaction.status);
      return isTypeMatch && isStatusMatch;
    });
  };

  const handleFilterApply = () => {
    let filterTypeArguments: TransactionType[] =
      filterTypes.length > 0
        ? filterTypes
        : [
            "Store Transactions",
            "Get tipped",
            "Withdrawals",
            "Chargebacks",
            "Cashbacks",
            "Refer & Earn",
          ];
    let filterStatusArguments: TransactionStatus[] =
      filterStatuses.length > 0
        ? filterStatuses
        : ["successful", "pending", "failed"];
    setFilteredTransactions(
      filterTransactions(filterTypeArguments, filterStatusArguments)
    );
  };

  const handleFilterClear = () => {
    setFilterTypes([]);
    setFilterStatuses([]);
    setFilteredTransactions(transactions);
  };

  const value = {
    transactions,
    setTransactions,
    filteredTransactions,
    setFilteredTransactions,
    wallet,
    user,
    loading,
    setLoading,
    error,
    setError,
    showFilter,
    setShowFilter,
    filterTypes,
    setFilterTypes,
    filterStatuses,
    setFilterStatuses,
    handleFilterApply,
    handleFilterClear,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionProvider = () => {
  const value = React.useContext(TransactionContext);
  if (!value) {
    throw new Error(
      "useTransactionProvider must be used within a TransactionProvider"
    );
  }

  return {
    ...value,
  } as TransactionContextType;
};

export default TransactionProvider;
