"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListItemProps {
  image: string;
  name: string;
  href?: string;
  variant?: "row" | "tile";
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href,
  variant = "row",
}) => {
  const router = useRouter();
const onClick = () => {
  if (!href) return; // do nothing if no href
  if (href.startsWith("/")) router.push(href);
  else window.open(href, "_blank", "noopener,noreferrer");
};


  if (variant === "tile") {
    return (
      <button
        onClick={onClick}
        className="
          relative w-32 h-48 group rounded-lg overflow-hidden bg-neutral-800
        transition focus:outline-none
          transform hover:scale-115
        "
      >
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 bg-neutral-800"
            sizes="200px"
          />
        </div>
        <div className="text-center">
          <div className="flex flex-col items-start w-full p-4 gap-y-1">
            <p className="font-semibold truncate w-full">{name}</p>
          </div>
        </div>
      </button>
    );
  }

  // row style
  return (
    <button
      onClick={onClick}
      className="
        relative group flex items-center rounded-md overflow-hidden gap-x-4
        bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4
        transform hover:scale-105
      "
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt={name} />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      
    </button>
  );
};

export default ListItem;
