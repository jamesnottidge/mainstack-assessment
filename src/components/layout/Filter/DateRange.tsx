import React from "react";
import DatePicker from "./DatePicker";

export default function DateRange() {
    return (
        <div
        className=""
        >
            <h3
           className="font-semibold mb-2" 
            >Date Range</h3>
            <div
            className="flex space-x-2"
            >
                <DatePicker />
                <DatePicker />
            </div>
        </div>
    );
}