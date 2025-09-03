"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaUserAlt } from "react-icons/fa";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { useUi } from "./UiProvider";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const { toggleArtistBar } = useUi();
  const [menuOpen, setMenuOpen] = useState(false); // <-- mobile menu state

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      {/* Mobile slide-in menu */}
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="w-full mb-4 flex items-center justify-between">
        {/* Back/forward (desktop) */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        {/* Mobile: Hamburger opens menu, Search stays the same */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
            aria-label="Open menu"
          >
            <FaBars className="text-black" size={18} />
          </button>
          <button
            onClick={() => router.push("/search")}
            className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition"
            aria-label="Search"
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>

        {/* Actions on the right */}
        <div className="flex items-center gap-x-3">
  <a href="/resume.pdf" download="Jeshad_Rahman_Resume.pdf">
    <Button className="bg-white px-6 py-2">Download Resume</Button>
  </a>

  {/* ArtistBar toggle – desktop only */}
  <button
    onClick={toggleArtistBar}
    className="hidden md:inline-flex rounded-full bg-white p-3 hover:opacity-80 transition"
    aria-label="Toggle artist bar"
    title="Toggle artist bar"
  >
    <FaUserAlt className="text-black" size={16} />
  </button>
</div>
      </div>

      {children}
    </div>
  );
};

export default Header;
