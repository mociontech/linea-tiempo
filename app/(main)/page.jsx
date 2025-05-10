"use client";

import HomeScreen from "@/components/HomeScreen";
import TimeLine from "@/components/TimeLine";
import { useState } from "react";

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);

  function goToHome() {
    setCurrentScreen(0);
  }

  function goToTimeline() {
    setCurrentScreen(1);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {currentScreen === 0 && <HomeScreen nextPage={goToTimeline} />}
      {currentScreen === 1 && <TimeLine goBack={goToHome} />}
    </div>
  );
}
