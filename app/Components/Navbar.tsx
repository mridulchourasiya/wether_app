"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { github } from "../utils/icons";
import { useRouter } from "next/navigation";

import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
          <Button
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
