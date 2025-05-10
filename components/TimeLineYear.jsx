"use client";

export default function TimeLineYear({ year, goBack }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center overflow-x-hidden scrollbar-hide">
      <img
        src={`/info/${year}.png`}
        alt=""
        className="absolute top-[224px] right-[100px] z-20"
      />
      <img
        src={`/gifs/${year}.jpg`}
        alt=""
        className="absolute top-[224px] left-[73px] w-[933px] h-[1116px] z-10"
      />
      <img
        src="/helper/footer.png"
        alt=""
        className="absolute top-[1309px] left-[73px] z-20"
      />
      <img src={`/dates/${year}.jpg`} alt="" className="w-screen h-screen" />
      <button
        className="absolute bottom-[200px] w-[400px] h-[150px]"
        onClick={goBack}
      />
    </div>
  );
}
