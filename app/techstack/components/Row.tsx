"use client";
import Image from "next/image";

type RowProps = {
  index: number;
  name: string;
  icon: string;
  category: string;
  since?: string | number;
  proficiency?: number | string;
  notes?: string;
};

export default function Row({
  index,
  name,
  icon,
  category,
  since,
  proficiency,
  notes,
}: RowProps) {
  return (
    <div
      className="
        rounded transition hover:bg-white/5
        px-3 py-3
        flex-col gap-1
        md:grid md:grid-cols-[24px_minmax(0,1fr)_155px_120px_80px] md:items-center md:gap-4
      "
    >
      {/* Mobile first line */}
      <div className="md:hidden flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="relative h-10 w-10 rounded overflow-hidden flex-none">
            <Image src={icon} alt={name} fill className="object-contain p-1.5" />
          </span>
          <span className="min-w-0">
            <div className="text-white font-medium truncate">{name}</div>
          </span>
        </div>
        <div className="text-neutral-200 text-sm tabular-nums">{proficiency}</div>
      </div>

      {/* Mobile meta */}
      <div className="md:hidden flex items-center gap-1 ml-13 -mt-1 text-neutral-400 text-xs leading-tight">
        <span>{category}</span>
        {since ? <span className="mx-1">•</span> : null}
        {since ? <span>{since}</span> : null}
        {notes ? <span className="mx-1">• {notes}</span> : null}
      </div>

      {/* Desktop cells */}
      <div className="hidden md:block text-neutral-400 text-sm">{index}</div>

      <div className="hidden md:flex items-center gap-3 min-w-0">
        <span className="relative h-10 w-10 rounded overflow-hidden shrink-0">
          <Image src={icon} alt={name} fill className="object-contain p-1.5" />
        </span>
        <span className="min-w-0">
          <div className="text-white font-medium truncate">{name}</div>
          {notes ? <div className="text-neutral-400 text-xs truncate">{notes}</div> : null}
        </span>
      </div>

      <div className="hidden md:block text-neutral-300 text-sm">{category}</div>
      <div className="hidden md:block text-neutral-300 text-sm">{since}</div>
      <div className="hidden md:block justify-self-end text-neutral-200 text-sm tabular-nums">
        {proficiency}
      </div>
    </div>
  );
}
