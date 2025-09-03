"use client";
import { useEffect, useState } from "react";
import { HiSwitchVertical } from "react-icons/hi";

export default function SortHint() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 animate-fadeIn">
      <button
        onClick={() => setOpen(false)}
        className="
          w-96 text-left rounded-xl border border-white/10
          bg-neutral-900/95 shadow-xl backdrop-blur
          p-5 flex items-start gap-4 hover:bg-neutral-800 transition
        "
      >
        <div className="rounded-md bg-green-500/15 p-3">
          <HiSwitchVertical className="h-6 w-6 text-green-400" />
        </div>
        <div className="min-w-0">
          <p className="text-base font-medium text-white">Sorting</p>
          <p className="text-sm text-neutral-300 mt-1">
            Click Category, Since, or Proficiency to sort. Click again to flip. Third click resets.
          </p>
          <p className="text-sm text-green-400 mt-3">Click anywhere on this tip to dismiss</p>
        </div>
      </button>
    </div>
  );
}
