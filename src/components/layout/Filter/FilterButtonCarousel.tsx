"use client";
import React, { useState } from "react";
import Button from "./FilterButton";

export const FilterButtonCarousel = () => {
  const [activeButtonId, setActiveButtonId] = useState("1");
  const handleClick = (buttonId: string) => {
    setActiveButtonId(buttonId);
  };
  return (
    <div className="flex space-x-4 overflow-x-scroll no-scrollbar my-8">
      <Button
        text="Today"
        activeButtonId={activeButtonId}
        id="1"
        onClick={handleClick}
      />

      <Button
        text="Last 7 days"
        activeButtonId={activeButtonId}
        id="2"
        onClick={handleClick}
      />

      <Button
        text="This month"
        activeButtonId={activeButtonId}
        id="3"
        onClick={handleClick}
      />

      <Button
        text="Last 3 months"
        activeButtonId={activeButtonId}
        id="4"
        onClick={handleClick}
      />

      <Button
        text="This year"
        activeButtonId={activeButtonId}
        id="5"
        onClick={handleClick}
      />

      <Button
        text="Last year"
        activeButtonId={activeButtonId}
        id="6"
        onClick={handleClick}
      />

      <Button
        text="All time"
        activeButtonId={activeButtonId}
        id="7"
        onClick={handleClick}
      />
    </div>
  );
};
