"use client";
import { useEffect, useState } from "react";
import { HiSwitchVertical } from "react-icons/hi";

const STORAGE_KEY = "sortHintDismissed";

export default function SortHint() {
  const [open, setOpen] = useState(false);

  // Show immediately on mount if not dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    if (!dismissed) setOpen(true);
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed right-4 md:right-6 bottom-6 z-50
        animate-fadeIn
      "
    >
      <button
        onClick={dismiss}
        className="
          w-72 text-left
          rounded-xl border border-white/10
          bg-neutral-900/95 shadow-xl backdrop-blur
          p-4 flex items-start gap-3
          hover:bg-neutral-800 transition
        "
      >
        <div className="rounded-md bg-green-500/15 p-2">
          <HiSwitchVertical className="h-5 w-5 text-green-400" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-white">Sorting</p>
          <p className="text-xs text-neutral-300 mt-0.5">
            Click Category, Since, or Proficiency to sort.
            Click again to flip the order, third time to reset.
          </p>
          <p className="text-xs text-green-400 mt-2">Click anywhere on this tip to dismiss</p>
        </div>
      </button>
    </div>
  );
}
