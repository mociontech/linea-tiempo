"use client";

export default function HomeScreen({ nextPage }) {
  return (
    <div
      className="welcome w-screen h-screen flex flex-col justify-center items-center"
      onClick={nextPage}
    >
      <img
        src="/gifs/inicio.gif"
        alt=""
        className="absolute bottom-[150px] right-[300px] w-[226px] h-[226px]"
      />
      <img
        src="/gifs/clickInicio.png"
        alt=""
        className="absolute bottom-[150px] right-[180px] w-[135px] h-[62px]"
      />
    </div>
  );
}
