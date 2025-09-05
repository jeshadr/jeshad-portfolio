"use client";

import Image from "next/image";
import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight, HiPause, HiPlay, HiX } from "react-icons/hi";
import { useMobilePlayer } from "./MobilePlayerProvider";

export default function MobilePlayerSheet() {
  const { queue, index, isOpen, isPlaying, close, prev, next, togglePlay } = useMobilePlayer();
  const track = queue[index];

  // lock scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [isOpen]);

  if (!isOpen || !track) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm md:hidden" onClick={close}>
      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-neutral-950 border-t border-white/10
          rounded-t-2xl px-5 pt-4 pb-6
          animate-slideUp
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-neutral-300 text-sm">Now playing</span>
          <button
            onClick={close}
            className="h-8 w-8 rounded-full flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition"
          >
            <HiX className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-auto relative h-56 w-56 rounded-xl overflow-hidden bg-neutral-800">
          {track.image ? (
            <Image src={track.image} alt={track.title} fill className="object-cover" />
          ) : null}
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-white font-semibold">{track.title}</h3>
          {track.subtitle ? (
            <p className="text-neutral-400 text-sm mt-0.5">{track.subtitle}</p>
          ) : null}
          {track.description ? (
            <p className="text-neutral-300 text-sm mt-2">{track.description}</p>
          ) : null}
        </div>

        <div className="mt-5 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/15 text-white flex items-center justify-center transition"
            aria-label="Previous"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={togglePlay}
            className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center hover:opacity-90 transition"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <HiPause className="h-6 w-6" /> : <HiPlay className="h-6 w-6" />}
          </button>

          <button
            onClick={next}
            className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/15 text-white flex items-center justify-center transition"
            aria-label="Next"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>
        </div>

        {track.href ? (
          <a
            href={track.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block text-center text-sm text-neutral-300 hover:text-white underline underline-offset-4"
          >
            Open link
          </a>
        ) : null}
      </div>
    </div>
  );
}
