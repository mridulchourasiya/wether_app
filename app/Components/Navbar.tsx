"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { github } from "../utils/icons";
import { useRouter } from "next/navigation";
import { ThemeDropdown } from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

function Navbar() {
  const router = useRouter();
  const {state} = useGlobalContext()
 // console.log(state);
  
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
          <Button
            variant="destructive"
            className="search-code flex items-center gap-2 border rounded"
            onClick={() => {
              router.push("https://github.com/mridulchourasiya/wether_app");
            }}
          >
            {github}
            Sourace Code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
