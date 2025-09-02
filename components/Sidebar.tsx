"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import ArtistBar from "./ArtistBar";
import Box from "./Box";
import Library from "./Library";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      { icon: HiHome, label: "Home", active: pathname === "/", href: "/" },
      { icon: BiSearch, label: "Search", active: pathname === "/search", href: "/search" },
    ],
    [pathname]
  );

  return (
    <div className="flex h-dvh min-h-0 overflow-hidden">   {/* was h-full */}
      {/* Left column */}
      <div className="hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2 h-full min-h-0 overflow-hidden">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>

        {/* one scroll area per column */}
        <Box className="flex-1 min-h-0 overflow-y-auto">
          <Library />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2 min-h-0">{children}</main>
      <div className="

">
        <ArtistBar />
      </div>

    </div>
  );
};

export default Sidebar;
