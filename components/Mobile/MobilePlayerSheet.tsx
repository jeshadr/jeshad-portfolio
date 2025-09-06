// components/MobilePlayerSheet.tsx
"use client";

import { useProgressTicker } from "@/hooks/useProgressTicker";
import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import PlayerSlider from "../PlayerSlider";
import { useMobilePlayer } from "./MobilePlayerProvider";

const EXIT_MS = 180;
const TRACK_SECONDS = 60;
const ANIM_MS = 300; // matches duration-300

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

type AnimDir = "left" | "right";
type AnimPhase = "start" | "run";
type CoverAnim = {
  dir: AnimDir;
  phase: AnimPhase;
  outgoingSrc: string | null;
  incomingSrc: string | null;
} | null;

export default function MobilePlayerSheet({ title = "My Projects" }: { title?: string }) {
  const { queue, index, isOpen, isPlaying, close, prev, next, togglePlay } = useMobilePlayer();
  const track = queue[index];

  const [bgColor, setBgColor] = useState<string>("#0a0a0a");
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const exitTimerRef = useRef<number | null>(null);

  // swipe animation state
  const [coverAnim, setCoverAnim] = useState<CoverAnim>(null);
  const coverAnimTimerRef = useRef<number | null>(null);

  // helper to trigger swipe
  function triggerSwipe(dir: AnimDir, incomingImage: string | null, outgoingImage: string | null) {
    setCoverAnim({
      dir,
      phase: "start",
      outgoingSrc: outgoingImage,
      incomingSrc: incomingImage,
    });
    requestAnimationFrame(() => {
      setCoverAnim((prev) => (prev ? { ...prev, phase: "run" } : prev));
    });
    if (coverAnimTimerRef.current) window.clearTimeout(coverAnimTimerRef.current);
    coverAnimTimerRef.current = window.setTimeout(() => setCoverAnim(null), ANIM_MS + 80);
  }

  useEffect(() => {
    return () => {
      if (coverAnimTimerRef.current) window.clearTimeout(coverAnimTimerRef.current);
    };
  }, []);

  // Lift controls above iOS Safari bottom UI using VisualViewport
  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const vv = window.visualViewport;
    const setVar = () => {
      // Height of the overlaid browser UI at the bottom
      const offset = Math.max(0, window.innerHeight - Math.floor(vv.height));
      document.documentElement.style.setProperty("--ios-bottom-ui", `${offset}px`);
    };

    setVar();
    vv.addEventListener("resize", setVar);
    vv.addEventListener("scroll", setVar);
    return () => {
      vv.removeEventListener("resize", setVar);
      vv.removeEventListener("scroll", setVar);
    };
  }, []);


  // auto advance should also animate left
  const handleAutoNext = () => {
    const outgoing = track?.image ?? null;
    const nextIdx = (index + 1) % queue.length;
    const incoming = queue[nextIdx]?.image ?? null;
    triggerSwipe("left", incoming, outgoing);
    next();
  };

  // progress ticker
  const {
    progress,
    setProgress,
    resetForNewTrack,
    handleScrubStart,
    handleScrubMove,
    handleScrubEnd,
    rebaseOnResume,
  } = useProgressTicker({
    isPlaying,
    trackSeconds: TRACK_SECONDS,
    onTrackEnd: handleAutoNext,
    shouldRun: shouldRender && !isClosing,
  });

  // open or close choreography
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      return;
    }
    if (shouldRender) {
      setIsClosing(true);
      exitTimerRef.current = window.setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, EXIT_MS);
    }
    return () => {
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
    };
  }, [isOpen, shouldRender]);

  // lock body scroll when visible
  useEffect(() => {
    if (!shouldRender) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [shouldRender]);

  // reset when track changes
  useEffect(() => {
    if (!shouldRender || !track) return;
    resetForNewTrack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, track, shouldRender]);

  // color extraction
  useEffect(() => {
    if (!track?.image) {
      setBgColor("#0a0a0a");
      return;
    }
    let mounted = true;
    const fac = new FastAverageColor();
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = track.image;

    img.onload = () => {
      fac
        .getColorAsync(img)
        .then((res) => mounted && setBgColor(res.hex || "#0a0a0a"))
        .catch(() => mounted && setBgColor("#0a0a0a"));
    };
    img.onerror = () => mounted && setBgColor("#0a0a0a");

    return () => {
      mounted = false;
      fac.destroy();
    };
  }, [track?.image]);

  const panelAnimClass = useMemo(() => (isClosing ? "animate-slideDown" : "animate-slideUp"), [isClosing]);
  const backdropAnimClass = useMemo(() => (isClosing ? "animate-fadeOut" : ""), [isClosing]);

  if (!shouldRender || !track) return null;

  return (
    <div className="fixed inset-0 z-[70] md:hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${backdropAnimClass}`}
        onClick={() => {
          if (!isClosing) {
            setIsClosing(true);
            exitTimerRef.current = window.setTimeout(() => {
              setShouldRender(false);
              setIsClosing(false);
              close();
            }, EXIT_MS);
          }
        }}
      />

      {/* Panel */}
      <div
        className={`
          absolute inset-0
   flex flex-col h-svh min-h-0 overflow-y-auto
   pt-[env(safe-area-inset-top)] pb-[calc(env(safe-area-inset-bottom)+var(--ios-bottom-ui,0px)+32px)]
   ${panelAnimClass}

        `}
        onClick={(e) => e.stopPropagation()}
        aria-modal="true"
        role="dialog"
        aria-label="Now playing"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,1) 100%)`,
   transition: "background 300ms ease",
        }}
      >
        <div className="pointer-events-none absolute inset-0" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,0.35)" }} />

        {/* Header */}
        <div className="relative z-10 grid grid-cols-3 items-center px-5 py-9">
          {/* Close button (left) */}
          <button
            onClick={() => {
              if (!isClosing) {
                setIsClosing(true);
                exitTimerRef.current = window.setTimeout(() => {
                  setShouldRender(false);
                  setIsClosing(false);
                  close();
                }, EXIT_MS);
              }
            }}
            className="h-9 w-9 rounded-full flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition justify-self-start"
            aria-label="Close player"
          >
            <IoChevronDownSharp className="h-7 w-7" />
          </button>

          {/* Center title */}
          <h2 className="justify-self-center text-white font-semibold text-base tracking-wide">
            {title}
          </h2>

          {/* Right spacer keeps the title perfectly centered */}
          <div className="h-9 w-9 justify-self-end" aria-hidden />
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 flex-shrink-0 transform-gpu origin-top scale-[.90] md:scale-100">
          <div className="mt-9 mx-auto relative aspect-square w-full max-w-[350px] rounded-lg overflow-hidden bg-neutral-800">
            {!coverAnim && track.image && (
              <Image src={track.image} alt={track.title} fill className="object-cover" priority />
            )}

            {coverAnim && (
              <>
                {/* Outgoing layer */}
                {coverAnim.outgoingSrc && (
                  <Image
                    src={coverAnim.outgoingSrc}
                    alt="Outgoing cover"
                    fill
                    className={[
                      "object-cover will-change-transform transition-transform duration-300",
                      coverAnim.phase === "start"
                        ? "translate-x-0"
                        : coverAnim.dir === "left"
                          ? "-translate-x-full"
                          : "translate-x-full",
                    ].join(" ")}
                    onTransitionEnd={() => setCoverAnim(null)}
                    priority
                  />
                )}

                {/* Incoming layer */}
                {coverAnim.incomingSrc && (
                  <Image
                    src={coverAnim.incomingSrc}
                    alt="Incoming cover"
                    fill
                    className={[
                      "object-cover will-change-transform transition-transform duration-300",
                      coverAnim.phase === "start"
                        ? coverAnim.dir === "left"
                          ? "translate-x-full"
                          : "-translate-x-full"
                        : "translate-x-0",
                    ].join(" ")}
                    priority
                  />
                )}
              </>
            )}
          </div>

          <div className="mt-5 text-center px-2">
            <h3 className="text-white font-semibold text-lg">{track.title}</h3>
            {track.subtitle ? <p className="text-neutral-200/80 text-sm mt-1">{track.subtitle}</p> : null}
            {track.description ? <p className="text-neutral-200/80 text-sm mt-3">{track.description}</p> : null}
          </div>
        </div>

        {/* Bottom: slider and controls */}
 <div className="relative z-10 px-5
  pb-[calc(env(safe-area-inset-bottom)+var(--ios-bottom-ui,0px)+56px)]
  mt-auto transform-gpu origin-bottom
  scale-[.90] md:scale-100
  -translate-y-17 md:-translate-y-4">          <div>
            <PlayerSlider
              value={progress}
              max={TRACK_SECONDS}
              onScrubStart={handleScrubStart}
              onScrubMove={handleScrubMove}
              onScrubEnd={handleScrubEnd}
            />
            <div className="mt-1.5 flex items-center justify-between text-xs text-white/70">
              <span>{formatTime(progress)}</span>
              <span>-{formatTime(Math.max(TRACK_SECONDS - progress, 0))}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-7 mt-3 mb-4">
            <button
              onClick={() => {
                const outgoing = track?.image ?? null;
                const prevIdx = (index - 1 + queue.length) % queue.length;
                const incoming = queue[prevIdx]?.image ?? null;
                triggerSwipe("right", incoming, outgoing);

                prev();
                setProgress(0);
                resetForNewTrack();
              }}
              className="text-white hover:opacity-80 transition"
              aria-label="Previous"
            >
              <BiSkipPrevious size={42} />
            </button>

            <button
              onClick={() => {
                const wasPlaying = isPlaying;
                togglePlay();
                if (!wasPlaying) rebaseOnResume();
              }}
              className="h-16 w-16 rounded-full bg-white flex items-center justify-center hover:opacity-90 transition"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <IoIosPause className="text-black" size={42} />
              ) : (
                <IoIosPlay className="text-black ml-1" size={42} />
              )}
            </button>

            <button
              onClick={() => {
                const outgoing = track?.image ?? null;
                const nextIdx = (index + 1) % queue.length;
                const incoming = queue[nextIdx]?.image ?? null;
                triggerSwipe("left", incoming, outgoing);

                next();
                setProgress(0);
                resetForNewTrack();
              }}
              className="text-white hover:opacity-80 transition"
              aria-label="Next"
            >
              <BiSkipNext size={42} />
            </button>
          </div>
        </div>
      </div>
      {/* Bottom cover to eliminate the gap on iOS */}
<div
  aria-hidden
  className="pointer-events-none fixed left-0 right-0 bottom-0 z-0"
  style={{
    // fill the iPhone home-indicator + Safari bottom chrome area
    height: "calc(env(safe-area-inset-bottom) + var(--ios-bottom-ui, 0px) + 24px)",
    background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,1) 100%)"
  }}
/>

    </div>
  );
}
