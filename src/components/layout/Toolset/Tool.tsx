import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


export const Tool = ({  }: any) => {
 return (
   <TooltipProvider>
     <Tooltip>
       <TooltipTrigger asChild>
         <button>Hover</button>
       </TooltipTrigger>
       <TooltipContent
       side="right"
       >
         <TextBubble>Add to library</TextBubble>
       </TooltipContent>
     </Tooltip>
   </TooltipProvider>
 );
};


const TextBubble = ({ children }) => {
  return (
    <div className="relative inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
      <div className="absolute top-0 right-0 w-6 h-6 transform translate-x-1/2 -translate-y-1/2 bg-gray-200 rotate-45"></div>
      {children}
    </div>
  );
};