"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiPlay } from "react-icons/hi";

export default function SongHint() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Show only on mobile
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) setOpen(true);
  }, []);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 animate-fadeIn">
      <button
        onClick={() => setOpen(false)}
        className="
          w-96 text-left rounded-xl border border-white/0
          bg-neutral-900/100 shadow-xl backdrop-blur
          p-5 flex items-start gap-4 hover:bg-neutral-800 transition
        "
      >
        <div className="rounded-md bg-green-500/15 p-3">
          <HiPlay className="h-6 w-6 text-green-400" />
        </div>
        <div className="min-w-0">
          <p className="text-base font-medium text-white">Try it out!</p>
          <p className="text-sm text-neutral-300 mt-1">
            Press any song in the list and see what happens...
          </p>
          <p className="text-sm text-green-400 mt-3">
            Tap anywhere on this tip to dismiss
          </p>
        </div>
      </button>
    </div>,
    document.body
  );
}
