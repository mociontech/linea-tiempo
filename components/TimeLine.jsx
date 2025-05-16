"use client";

import { timeLineStops } from "@/timeLineStops";
import { useEffect, useRef, useState } from "react";
import TimeLineYear from "./TimeLineYear";

export default function TimeLine({ goBack }) {
  const [selectedYear, setSelectedYear] = useState(-5);
  const [inactiveTimeout, setInactiveTimeout] = useState(null);

  const containerRef = useRef(null);

  function closeYear() {
    setSelectedYear(-5);
  }

  function nextYear() {
    selectYear(selectedYear + 1);
  }

  function prevYear() {
    selectYear(selectedYear - 1);
  }

  function selectYear(year) {
    localStorage.setItem("selectedYear", year);
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

  useEffect(() => {
    const prevYear = timeLineStops[localStorage.getItem("selectedYear")];
    if (!prevYear || !containerRef.current) return;

    const yearScroll = timeLineStops.find((year) => year.year == prevYear.year);
    if (!yearScroll) return;

    containerRef.current.scrollTo({
      top: yearScroll.scroll,
      left: 0,
      behavior: "smooth",
    });
  }, [selectedYear]);

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-auto flex flex-col justify-start items-center overflow-x-hidden"
    >
      {selectedYear === -5 && (
        <div>
          <img src="/screens/timeline.jpg" alt="" className="w-screen h-auto" />
          <img
            src="/gifs/linea.gif"
            alt=""
            className="absolute top-[830px] right-[250px] w-[492px] h-[492px]"
          />
          <img
            src="/gifs/abajo.gif"
            alt=""
            className="absolute top-[600px] right-[70px] w-[155px] h-[155pz]"
          />
          <div className="absolute top-0 left-0 w-screen flex flex-col justify-center items-center gap-[114px] h-[5250px] pt-[500px]">
            {timeLineStops.map((year, index) => (
              <div
                key={index}
                className={`relative w-[350px] h-[169px] ${
                  index % 2 === 0 ? "right-[220px]" : "left-[220px]"
                }`}
                onClick={() => selectYear(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
      {selectedYear !== -5 && (
        <TimeLineYear
          year={selectedYear}
          next={nextYear}
          prev={prevYear}
          goBack={closeYear}
          returnHome={goBack}
        />
      )}
    </div>
  );
}
