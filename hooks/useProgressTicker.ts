// hooks/useProgressTicker.ts
"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  isPlaying: boolean;
  trackSeconds: number;
  onTrackEnd: () => void; // caller decides what "next" means
  shouldRun?: boolean;    // gate on sheet visibility
};

export function useProgressTicker({
  isPlaying,
  trackSeconds,
  onTrackEnd,
  shouldRun = true,
}: Options) {
  const [progress, setProgress] = useState(0);

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const baseProgressRef = useRef<number>(0);
  const seekingRef = useRef(false);

  function startTicker() {
    if (rafRef.current != null) return;
    startTimeRef.current = performance.now();
    baseProgressRef.current = progress;

    const tick = () => {
      rafRef.current = window.requestAnimationFrame(tick);
      if (seekingRef.current) return;

      const elapsed = (performance.now() - startTimeRef.current) / 1000;
      const nextVal = baseProgressRef.current + elapsed;

      if (nextVal >= trackSeconds) {
        // rollover and keep ticking
        setProgress(0);
        baseProgressRef.current = 0;
        startTimeRef.current = performance.now();
        onTrackEnd();
        return;
      }

      setProgress(nextVal);
    };

    rafRef.current = window.requestAnimationFrame(tick);
  }

  function stopTicker() {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  useEffect(() => {
    if (isPlaying && shouldRun) startTicker();
    else stopTicker();
    return stopTicker;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, shouldRun]);

  function resetForNewTrack() {
    setProgress(0);
    baseProgressRef.current = 0;
    startTimeRef.current = performance.now();
    if (isPlaying && shouldRun) {
      stopTicker();
      startTicker();
    }
  }

  function handleScrubStart() {
    seekingRef.current = true;
    stopTicker();
  }

  function handleScrubMove(v: number) {
    const clamped = Math.max(0, Math.min(trackSeconds, v));
    setProgress(clamped);
  }

  function handleScrubEnd() {
    seekingRef.current = false;

    if (progress >= trackSeconds) {
      onTrackEnd();
      setProgress(0);
      baseProgressRef.current = 0;
      startTimeRef.current = performance.now();
      if (isPlaying && shouldRun) startTicker();
      return;
    }

    baseProgressRef.current = progress;
    startTimeRef.current = performance.now();
    if (isPlaying && shouldRun) startTicker();
  }

  function rebaseOnResume() {
    baseProgressRef.current = progress;
    startTimeRef.current = performance.now();
    startTicker(); // idempotent
  }

  return {
    progress,
    setProgress,
    resetForNewTrack,
    handleScrubStart,
    handleScrubMove,
    handleScrubEnd,
    rebaseOnResume,
  };
}
