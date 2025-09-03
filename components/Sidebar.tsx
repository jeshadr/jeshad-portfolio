"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
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

  const routes = useMemo(
    () => [
      { icon: HiHome, label: "Home", active: pathname === "/", href: "/" },
      { icon: BiSearch, label: "Search", active: pathname === "/search", href: "/search" },
    ],
    [pathname]
  );

  return (
    <div className="flex h-dvh min-h-0 overflow-hidden">
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
      <main className="h-full flex-1 overflow-y-auto py-2 min-h-0 custom-scrollbar">
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
