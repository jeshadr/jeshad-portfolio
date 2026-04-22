"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import ArtistBar from "./ArtistBar";
import Box from "./Box";
import Library from "./Library";
import SidebarItem from "./SidebarItem";
import { useUi } from "./UiProvider";

interface SidebarProps {
  children: React.ReactNode;
}

const MIN_ARTIST_WIDTH = 240;
const MAX_ARTIST_WIDTH = 600;
const DEFAULT_ARTIST_WIDTH = 400;

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const { showArtistBar } = useUi();

  const [artistBarWidth, setArtistBarWidth] = useState(DEFAULT_ARTIST_WIDTH);
  const [dragging, setDragging] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const routes = useMemo(
    () => [
      { icon: HiHome, label: "Home", active: pathname === "/", href: "/" },
      { icon: BiSearch, label: "Search", active: pathname === "/search", href: "/search" },
    ],
    [pathname]
  );

  const handleDividerMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    setDragging(true);
    startX.current = e.clientX;
    startWidth.current = artistBarWidth;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = startX.current - e.clientX;
      const newWidth = Math.min(
        MAX_ARTIST_WIDTH,
        Math.max(MIN_ARTIST_WIDTH, startWidth.current + delta)
      );
      setArtistBarWidth(newWidth);
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex w-full max-w-full overflow-x-hidden min-h-dvh md:h-dvh md:min-h-0 md:overflow-hidden pb-[env(safe-area-inset-bottom)]">
      {/* Left column */}
      <div className="hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2 h-full min-h-0 overflow-hidden">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="flex-1 min-h-0 overflow-y-auto">
          <Library />
        </Box>
      </div>

      {/* Main */}
      <main className="flex-1 w-full min-w-0 md:w-auto md:h-full md:overflow-y-auto md:min-h-0 custom-scrollbar py-0 md:py-2">
        {children}
      </main>

      {/* Resize divider + Artist bar */}
      {showArtistBar && (
        <>
          {/* Drag handle */}
          <div
            className={`hidden xl:flex items-center justify-center w-2 -mx-1 flex-shrink-0 group relative z-10 py-4 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            onMouseDown={handleDividerMouseDown}
          >
            <div className={`w-px h-full rounded-full transition-all duration-300 ease-in-out translate-x-1 ${dragging ? "opacity-100 bg-white scale-x-[1.5]" : "opacity-0 group-hover:opacity-100 bg-white/50 scale-x-50"}`} />
          </div>

          {/* Artist bar */}
          <div
            className="hidden xl:block flex-shrink-0"
            style={{ width: artistBarWidth }}
          >
            <ArtistBar />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
