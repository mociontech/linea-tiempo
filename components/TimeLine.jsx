"use client";

import { timeLineStops } from "@/timeLineStops";
import { useEffect, useState } from "react";
import TimeLineYear from "./TimeLineYear";

export default function TimeLine({ goBack }) {
  const [selectedYear, setSelectedYear] = useState(0);
  const [inactiveTimeout, setInactiveTimeout] = useState(null);

  function closeYear() {
    setSelectedYear(0);
  }

  function selectYear(year) {
    setSelectedYear(year);
  }

  function resetInactiveTimer() {
    if (inactiveTimeout) clearTimeout(inactiveTimeout);
    const timeout = setTimeout(() => {
      goBack(); // Ejecutar goBack después de 5 segundos de inactividad
    }, 30000); // 5000 ms = 5 segundos de inactividad
    setInactiveTimeout(timeout);
  }

  useEffect(() => {
    // Restablecer el temporizador cada vez que el usuario toque la pantalla
    const handleTouch = () => {
      resetInactiveTimer();
    };

    window.addEventListener("touchstart", handleTouch);
    window.addEventListener("touchmove", handleTouch);

    // Limpiar los eventos cuando el componente se desmonte
    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      if (inactiveTimeout) clearTimeout(inactiveTimeout);
    };
  }, [inactiveTimeout]);

  return (
    <div className="relative w-screen h-auto flex flex-col justify-start items-center overflow-x-hidden">
      {selectedYear === 0 && (
        <div>
          <img src="/screens/timeline.jpg" alt="" className="w-screen h-auto" />
          <div className="absolute top-0 left-0 w-screen flex flex-col justify-center items-center gap-[114px] h-[5250px] pt-[500px]">
            {timeLineStops.map((year, index) => (
              <div
                key={index}
                className={`relative w-[350px] h-[169px] ${
                  index % 2 === 0 ? "right-[220px]" : "left-[220px]"
                }`}
                onClick={() => selectYear(year.year)}
              ></div>
            ))}
          </div>
        </div>
      )}
      {selectedYear !== 0 && (
        <TimeLineYear year={selectedYear} goBack={closeYear} />
      )}
    </div>
  );
}
