"use client";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { TransactionContext } from "@/contexts/TransactionContext";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { TransactionTile } from "../Transactions/TransactionTile";
import { FilterButtonCarousel } from "./FilterButtonCarousel";
import DateRange from "./DateRange";
import TransactionType from "./TransactionType";
import TrasactionStatus from "./TransactionStatus";
import { UilTimes } from "@iconscout/react-unicons";

export default function Filter() {
  const { showFilter, setShowFilter } = useContext(TransactionContext);

  const handleClear = () => {
    setShowFilter(false);
  }

  const handleApply = () => {
    setShowFilter(false);
  }

  return (
    <AnimatePresence>
      {showFilter && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className={`fixed right-3 top-5 bottom-5 w-[32vw] min-w-[350px] max-w-[600px] overflow-y-scroll bg-white z-[40] text-black 
          p-6 shadow-lg rounded-lg
          `}
        >
          <div className="flex h-full flex-col">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-bold remote">Filter</h1>
              <UilTimes onClick={() => setShowFilter(false)} />
            </div>

            <div>
              <FilterButtonCarousel />
              <DateRange />
              <TransactionType />
              <TrasactionStatus />
            </div>
            <div className="flex-grow flex flex-col justify-end">
              <div className="flex justify-between">
                <button
                  className={`px-20 py-4 rounded-full focus:outline-none
                hover:bg-gray-200 hover:text-black w-7/12
            `}
                >
                  <span className="text-sm">Clear</span>
                </button>
                <button
                  className={`px-20 py-4 rounded-full focus:outline-none
                bg-black text-white w-7/12
                `}
                >
                  <span className="text-sm">Apply</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
