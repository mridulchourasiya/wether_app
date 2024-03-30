"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { kelvinToCelsius } from "@/app/utils/misc";

import React, { useState } from "react";

function Tempreature() {
  const { forecast } = useGlobalContext();
  const { main, timezone, name, weather } = forecast;
  //console.log(kelvinToCelsius(main.temp));

  if (!forecast || !weather) {
    return <div>Loading...</div>;
  }

  const temp = kelvinToCelsius(main?.temp);
  const mintemp = kelvinToCelsius(main?.temp_min);
  const maxtemp = kelvinToCelsius(main?.temp_max);



  //state
  const [localtime, setLocalTime] = useState<string>("")
  const [currentDay, setCurrentDay] = useState<string>("")



  return (
    <div
      className="pt-6 pb-5 border rounded-lg flex flex-col 
  justify-between dark:bg-dark-grey shadow-sm dark:shadow-none"
    >
      Tempreature
    </div>
  );
}

export default Tempreature;
