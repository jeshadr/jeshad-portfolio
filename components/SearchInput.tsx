"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

type Props = {
  placeholder?: string;
  defaultValue?: string;

  onQueryChange?: (q: string) => void;
  debounceMs?: number;
  className?: string;
};

export default function SearchInput({
  placeholder = "What do you want to find?",
  defaultValue = "",
  onQueryChange,
  debounceMs = 250,
  className = "",
}: Props) {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Debounce typing events
  const debounced = useMemo(() => {
    let t: ReturnType<typeof setTimeout> | null = null;
    return (q: string) => {
      if (!onQueryChange) return;
      if (t) clearTimeout(t);
      t = setTimeout(() => onQueryChange(q), debounceMs);
    };
  }, [onQueryChange, debounceMs]);

  useEffect(() => {
    debounced(value);
  }, [value, debounced]);

  // Keyboard shortcuts: "/" or "Ctrl+K" to focus, "Esc" to blur
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isSlash = e.key === "/";
      const isCtrlK = (e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey);
      if (isSlash || isCtrlK) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const clear = () => setValue("");

  return (
    <div className={`${className}`}>
      <div className="relative">
        {/* Left search icon */}
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
          <BiSearch className="h-5 w-5 text-neutral-400" />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          spellCheck={false}
          placeholder={placeholder}
          className="
            w-full
            h-12 sm:h-12 lg:h-14
            rounded-full
            bg-neutral-800/60
            text-white placeholder:text-neutral-400
            pl-11 pr-11
            outline-none
            ring-1 ring-white/10
            focus:ring-white/20 focus:bg-neutral-800
            transition
          "
        />

        {/* Clear button */}
        {value && (
          <button
            onClick={clear}
            aria-label="Clear search"
            className="
              absolute inset-y-0 right-3
              my-auto h-8 w-8
              flex items-center justify-center
              rounded-full
              text-neutral-300 hover:text-white
              hover:bg-white/10
              transition
            "
          >
            <RxCross2 className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Helper hint (optional) */}
      <div className="mt-2 text-xs text-neutral-400">
        Press <span className="text-neutral-200">/</span> or{" "}
        <span className="text-neutral-200">Ctrl+K</span> to focus • Esc to dismiss
      </div>
    </div>
  );
}
