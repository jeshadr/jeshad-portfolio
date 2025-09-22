"use client";

import { NAV_LINKS } from "@/data/nav";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

type Props = {
  open: boolean;
  onClose: () => void;
};

const EXIT_MS = 220;

export default function MobileNav({ open, onClose }: Props) {
  const [shouldRender, setShouldRender] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsClosing(false);
      return;
    }
    if (shouldRender) {
      setIsClosing(true);
      const t = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, EXIT_MS);
      return () => clearTimeout(t);
    }
  }, [open, shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[60]
        bg-black/60 backdrop-blur-sm
        ${isClosing ? "animate-fadeOut" : "animate-fadeIn"}
      `}
      onClick={onClose}
    >
      <aside
        className={`
          absolute left-0 top-0 h-full w-[82%] max-w-[360px]
          bg-neutral-950 border-r border-white/10
          p-4 flex flex-col gap-2
          ${isClosing ? "animate-slideOut" : "animate-slideIn"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-2">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center -ml-2"
          >
            <div className="relative h-20 w-20 rounded-md overflow-hidden bg-neutral-800">
              <Image
                src="/images/projects/jeshadifyprojectlogo.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">Jeshadify</span>

          </Link>

          <button
            onClick={onClose}
            className="h-9 w-9 rounded-full flex items-center justify-center text-neutral-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Close menu"
          >
            <RxCross2 className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-1">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5 transition"
                >
                  {l.icon ? <l.icon size={20} /> : null}
                  <span className="truncate">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto pt-3">
          <a
            href="/Jeshad_Rahman_Resume.pdf"
            download="Jeshad_Rahman_Resume.pdf"
            className="block w-full font-semibold text-center bg-white text-black py-2 rounded-full hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </aside>
    </div>
  );
}
