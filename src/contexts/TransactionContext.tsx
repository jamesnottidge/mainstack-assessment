"use client";
import { get } from "http";
import React from "react";
import { createContext, useEffect } from "react";
import { getTransactions } from "@/lib/queries";

export const TransactionContext = createContext({});

const TransactionProvider = ({ children }: any) => {


    useEffect(() => {
        // Fetch transactions
        getTransactions();
    }, []);

    const [transactions, setTransactions] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [showFilter, setShowFilter] = React.useState(false);
    const [filter, setFilter] = React.useState("all");

    const value = {
        transactions,
        setTransactions,
        loading,
        setLoading,
        error,
        setError,
        showFilter,
        setShowFilter,
        filter,
        setFilter,
    };
    
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;