"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransactionProvider } from "@/contexts/TransactionContext";

function Overlay() {
  const { showFilter, setShowFilter } = useTransactionProvider();
  return (
    <AnimatePresence>
      {showFilter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          className="fixed inset-0 bg-black z-[25]"
          onClick={() => setShowFilter(false)}
        ></motion.div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
