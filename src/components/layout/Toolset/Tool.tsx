import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import LinkIcon from "@/components/ui/LinkIcon";



export const Tool = ({
    icon, 
    text,
}: any) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>
            {icon}
          </button>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-black text-white px-4 py-3 rounded-lg relative"
        >
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};


