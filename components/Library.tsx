"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMail } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa";
import { IoDocumentTextOutline, IoPersonOutline } from "react-icons/io5";
import { TbPlaylist } from "react-icons/tb";

const Library = () => {
  const pathname = usePathname();

  const links = [
    { href: "/projects", label: "Projects", icon: FaRegFolder },
    { href: "/experience", label: "Experience & Skills", icon: IoDocumentTextOutline },
    { href: "/contact", label: "Contact", icon: CiMail },
    { href: "/about", label: "About Me", icon: IoPersonOutline },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">My Greatest Hits</p>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-x-3 cursor-pointer w-full p-2 rounded-md transition
                ${isActive ? "bg-neutral-800 text-white" : "hover:bg-neutral-800/50 text-neutral-300"}`}
            >
              <div className="flex items-center justify-center rounded-md min-h-[38px] min-w-[38px]">
                <Icon size={20} />
              </div>
              <p className="font-medium">{label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
