import React from "react";
import { Tool } from "./Tool";

export const Toolset = () => {
  return (
    <div className="fixed left-4 top-1/3 flex flex-col justify-between h-[20vh]">
      <Tool />
      <Tool />
      <Tool />
      <Tool />
      <Tool />
    </div>
  );
};
