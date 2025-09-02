"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import RightBar from "./ArtistBar"; // <-- add
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
    <div className="flex h-full">
      {/* Left sidebar */}
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library />
        </Box>
      </div>

      {/* Main content */}
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>

      {/* Right artist-style panel */}
      <RightBar />
    </div>
  );
};

export default Sidebar;
