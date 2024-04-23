import React from "react";
import { UilArrowDownLeft } from "@iconscout/react-unicons";

export const TransactionTile = () => {
    console.log("worls");
    return (
        <div
        className="flex items-center justify-between mt-6"
        >
            <div
            className="flex"
            >
                <div
                className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center"
                >
                <UilArrowDownLeft
                className="text-green-600 font-thin"
                />
                </div>
                <div
                className="ml-2"
                >
                    <p className="mb-4 text-sm">
                        Psychology of Money</p>
                    <p className="text-gray-500 text-xs">Morgan Housel</p>
                </div>
            </div>

            <div>
                <p className="text-sm font-bold mb-2">USD 300</p>
                <p className="text-gray-500 text-xs" >Apr 03,2022</p>
            </div>
        </div>
    );
}