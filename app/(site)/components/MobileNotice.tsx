"use client";
import { useEffect, useState } from "react";
import { HiExclamation } from "react-icons/hi";

const STORAGE_KEY = "mobileNoticeDismissed";

export default function MobileNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    if (!dismissed && window.innerWidth < 768) {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fadeIn md:hidden">
      <button
        onClick={dismiss}
        className="
          w-full text-left
          rounded-xl border border-white/10
          bg-neutral-900/95 shadow-xl backdrop-blur
          p-4 flex items-start gap-3
          hover:bg-neutral-800 transition
        "
      >
        <div className="rounded-md bg-red-500/15 p-2">
          <HiExclamation className="h-5 w-5 text-red-400" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white">Heads up!</p>
          <p className="text-xs text-neutral-300 mt-0.5">
            This portfolio is optimized for desktop. The mobile version is limited.
          </p>
          <p className="text-xs text-red-400 mt-2">
            Tap anywhere on this box to dismiss.
          </p>
        </div>
      </button>
    </div>
  );
}
