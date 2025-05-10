"use client";

export default function HomeScreen({ nextPage }) {
  return (
    <div
      className="welcome w-screen h-screen flex flex-col justify-center items-center"
      onClick={nextPage}
    ></div>
  );
}
