"use client";
import { SKILL_SONGS } from "@/data/skillsPlaylist";
import Image from "next/image";

export default function LikedContent() {
  const rows = SKILL_SONGS;

  return (
    <div className="px-4 sm:px-6">
      {/* Header row — desktop only */}
      <div
        className="
          hidden md:grid
          grid-cols-[24px_minmax(0,1fr)_140px_120px_80px]
          gap-4 py-3 px-4 text-xs uppercase tracking-widest text-neutral-400
          border-b border-white/10 sticky top-0 z-10
          bg-gradient-to-b to-transparent backdrop-blur
        "
      >
        <div>#</div>
        <div>Title</div>
        <div className="-ml-4">Category</div>
        <div>Since</div>
        <div className="justify-self-end">Proficiency</div>
      </div>

      {/* Rows */}
      <div className="mt-2">
        {rows.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="
              rounded transition hover:bg-white/5
              px-3 py-3
              /* Mobile layout: two-line card */
                flex-col gap-1
              /* Desktop layout: original */
              md:grid md:grid-cols-[24px_minmax(0,1fr)_155px_120px_80px] md:items-center md:gap-4
            "
          >
            {/* Mobile: first line */}
            <div className="md:hidden flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative h-10 w-10 rounded overflow-hidden flex-none">
                  <Image src={s.icon} alt={s.name} fill className="object-contain p-1.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-medium truncate">{s.name}</div>
                </div>
              </div>
              <div className="text-neutral-200 text-sm tabular-nums">{s.proficiency}</div>
            </div>

            {/* Mobile: second line (meta) */}
            <div className="md:hidden flex items-center gap-1 ml-13 -mt-1 text-neutral-400 text-xs leading-tight">
              <span>{s.category}</span>
              {s.since ? <span className="mx-1">•</span> : null}
              {s.since ? <span>{s.since}</span> : null}
              {s.notes ? <span className="mx-1">• {s.notes}</span> : null}
            </div>

            {/* Desktop cells */}
            <div className="hidden md:block text-neutral-400 text-sm">{i + 1}</div>

            <div className="hidden md:flex items-center gap-3 min-w-0">
              <div className="relative h-10 w-10 rounded overflow-hidden shrink-0">
                <Image src={s.icon} alt={s.name} fill className="object-contain p-1.5" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate">{s.name}</div>
                {s.notes ? <div className="text-neutral-400 text-xs truncate">{s.notes}</div> : null}
              </div>
            </div>

            <div className="hidden md:block text-neutral-300 text-sm">{s.category}</div>
            <div className="hidden md:block text-neutral-300 text-sm">{s.since}</div>
            <div className="hidden md:block justify-self-end text-neutral-200 text-sm tabular-nums">
              {s.proficiency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
