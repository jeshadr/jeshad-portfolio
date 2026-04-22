"use client";

import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";
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

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const { showArtistBar } = useUi();
  const [mainHovered, setMainHovered] = useState(false);
  const mainLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const routes = useMemo(
    () => [
      { icon: HiHome, label: "Home", active: pathname === "/", href: "/" },
      { icon: BiSearch, label: "Search", active: pathname === "/search", href: "/search" },
    ],
    [pathname]
  );

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
      <main
        className={`flex-1 w-full min-w-0 md:w-auto md:h-full md:overflow-y-auto md:min-h-0 hover-scrollbar py-0 md:py-2${mainHovered ? " show-scrollbar" : ""}`}
        onMouseEnter={() => {
          if (mainLeaveTimer.current) clearTimeout(mainLeaveTimer.current);
          setMainHovered(true);
        }}
        onMouseLeave={() => {
          mainLeaveTimer.current = setTimeout(() => setMainHovered(false), 600);
        }}
      >
        {children}
      </main>

      {/* Right Artist bar (toggled) */}
      {showArtistBar && (
        <div className="hidden xl:block no-scrollbar">
          <ArtistBar />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
