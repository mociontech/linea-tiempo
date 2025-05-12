"use client";

import { timeLineStops } from "@/timeLineStops";

export default function TimeLineYear({ year, next, prev, goBack, returnHome }) {
  console.log(year);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-x-hidden scrollbar-hide">
      <img
        src={`/info/${timeLineStops[year].year}.png`}
        alt=""
        className="absolute top-[224px] right-[100px] z-20"
      />
      <img
        src={`/gifs/${timeLineStops[year].year}.gif`}
        alt=""
        className="absolute top-[0px] left-[0px] w-[1080px] h-[1920px] z-10"
      />
      <img
        src="/helper/footer.png"
        alt=""
        className="absolute top-[1309px] left-[73px] z-20"
      />
      <img
        src={`/dates/${timeLineStops[year].year}.jpg`}
        alt=""
        className="w-screen h-screen"
      />
      {timeLineStops[year].year === 2022 ? (
        <div>
          <button
            className="absolute bottom-[200px] w-[400px] h-[150px] z-30"
            onClick={returnHome}
          />
          <button
            className="absolute bottom-[200px] left-[100px] w-[400px] h-[150px] z-30"
            onClick={goBack}
          />
        </div>
      ) : (
        <button
          className="absolute bottom-[200px] w-[400px] h-[150px] z-30"
          onClick={goBack}
        />
      )}
      {year >= 1 && (
        <button
          className={`absolute ${
            year === 15
              ? "bottom-[50px]"
              : year === 12
              ? "bottom-[150px]"
              : "bottom-[200px]"
          } left-[100px] w-[200px] h-[150px] z-30`}
          onClick={prev}
        >
          <img src="/gifs/izquierda.gif" alt="" />
        </button>
      )}
      {year <= timeLineStops.length - 2 && (
        <button
          className={`absolute ${
            year === 12 ? "bottom-[150px]" : "bottom-[200px]"
          } right-[100px] w-[200px] h-[150px] z-30`}
          onClick={next}
        >
          <img src="/gifs/derecha.gif" alt="" />
        </button>
      )}
    </div>
  );
}
