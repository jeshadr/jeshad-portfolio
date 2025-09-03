import { IconType } from "react-icons";
import { CiMail } from "react-icons/ci";
import { FaRegFolder } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { IoDocumentTextOutline, IoPersonOutline } from "react-icons/io5";


export type NavLink = {
  href: string;
  label: string;
  icon: IconType;
};

export const NAV_LINKS = [
  { label: "Projects", href: "/projects", icon: FaRegFolder },
  { label: "Techstack", href: "/techstack", icon: GoStack},
  { label: "Experience & Skills", href: "/experience", icon: IoDocumentTextOutline },
  { label: "Contact", href: "/contact", icon: CiMail },
  { label: "About Me", href: "/about", icon: IoPersonOutline },
];
