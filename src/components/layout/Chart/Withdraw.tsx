import React from "react";

export default function Withdraw() {
  return (
    <div className="flex justify-between max-w-[500px] min-w-[400px]">
      <div>
        <p
        className="text-gray-500 text-sm mb-6 "
        >Available Balance</p>
        <h1
        className="text-3xl  font-extrabold"
        >USD 135,000.00</h1>
      </div>
      <div
      className="flex items-center"
      >
        <button
          className={`px-8 py-2 rounded-full focus:outline-none
            bg-black text-white
          `}
        >
          <span
          className="text-sm"
          >Withdraw</span>
        </button>
      </div>
    </div>
  );
}
