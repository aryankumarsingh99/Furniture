"use client";

import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

type PageLoaderProps = {
  children: React.ReactNode;
};

export default function PageLoader({ children }: PageLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const minimumVisibleTime = 900;
    const exitDuration = 450;
    const startTime = window.performance.now();
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;

    const finishLoading = () => {
      const elapsed = window.performance.now() - startTime;
      const remainingTime = Math.max(0, minimumVisibleTime - elapsed);

      exitTimer = window.setTimeout(() => {
        setIsExiting(true);
        removeTimer = window.setTimeout(() => setIsVisible(false), exitDuration);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (exitTimer !== undefined) {
        window.clearTimeout(exitTimer);
      }
      if (removeTimer !== undefined) {
        window.clearTimeout(removeTimer);
      }
    };
  }, []);

  return (
    <>
      {children}
      {isVisible ? <LoadingScreen exiting={isExiting} /> : null}
    </>
  );
}