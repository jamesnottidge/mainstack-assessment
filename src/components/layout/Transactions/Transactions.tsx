import React from "react";
import TransactionHeader from "./TransactionHeader";
import { TransactionTile } from "./TransactionTile";

function Transactions() {
  return (
    <div>
      <TransactionHeader />
      <TransactionTile />
      <TransactionTile />
    </div>
  );
}

export default Transactions;