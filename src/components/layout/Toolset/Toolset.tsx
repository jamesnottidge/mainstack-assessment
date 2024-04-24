import React from "react";
import { Tool } from "./Tool";
import LinkIcon from "@/components/ui/LinkIcon";
import InvoiceIcon from "@/components/ui/InvoiceIcon";
import MediaIcon from "@/components/ui/MediaIcon";
import StoreIcon from "@/components/ui/StoreIcon";

export const Toolset = () => {
  return (
    <div className="fixed left-4 top-1/3 flex flex-col justify-between h-[20vh] border border-gray-200 py-4 px-2 rounded-full">
      <Tool 
        icon={<LinkIcon />}
        text="Link In Bio"
      />
      <Tool 
      icon = {<StoreIcon />}
      text = "Store"
      />
      <Tool 
      icon = {<MediaIcon />}
        text = "Media Kit"
      />
      <Tool 
      icon = {<InvoiceIcon />}
        text = "Invoicing"
      />
    
    </div>
  );
};
