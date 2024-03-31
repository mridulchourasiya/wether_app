"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { thermo } from "@/app/utils/icons";
import { airQualityIndexText } from "@/app/utils/misc";
;
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Item } from "@radix-ui/react-dropdown-menu";

import React from "react";

function AirPollution() {
  const { airQuality } = useGlobalContext();

  // chack air quality is if neccesary prperties may be find

  if (
    !airQuality ||
    !airQuality.list ||
    !airQuality.list[0] ||
    !airQuality.list[0].main
  ) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

 const airQualityIndex = airQuality.list[0].main.aqi *10;
 console.log(airQualityIndex,"airQualityIndex");
 

 
 const filteredIndex = airQualityIndexText.find((item) => {
    return item.rating === airQualityIndex
 })
 console.log(filteredIndex,"filteredIndex");
 

  return (
    <div
      className="air-pollution col-span-full sm-2:col-span-2 pt-6 px-4 h-[12rem]
  border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      <h2 className="flex items-center gap-2 font-medium">
        {thermo}Air Pollution
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress" />
      <p>Air Quality</p>
    </div>
  );
}

export default AirPollution;
