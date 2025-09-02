"use client";
import { SKILL_SONGS } from "@/data/skillsPlaylist";
import Image from "next/image";

export default function LikedContent() {
  // Simple sort example: put Languages first, then others
  const rows = SKILL_SONGS;

  return (
    <div className="px-6 pb-24">
      {/* Header row (sticky like Spotify) */}
      <div
        className="
          grid grid-cols-[24px_minmax(0,1fr)_140px_120px_80px]
          gap-4 py-4 px-4 text-xs uppercase tracking-widest text-neutral-400
          border-b border-white/10 sticky top-0 z-10
          bg-gradient-to-b  to-transparent backdrop-blur
        "
      >
        <div>#</div>
        <div>Title</div>
        <div className="hidden md:block">Category</div>
        <div className="hidden sm:block">Since</div>
        <div className="justify-self-end">Prof.</div>
      </div>

      {/* Rows */}
      <div className="mt-2">
        {rows.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="
              grid grid-cols-[24px_minmax(0,1fr)_140px_120px_80px]
              gap-4 items-center py-3 px-3 rounded hover:bg-white/5 transition
            "
          >
            {/* Index */}
            <div className="text-neutral-400 text-sm">{i + 1}</div>

            {/* Title cell: icon + name + optional subtext */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative h-10 w-10 rounded overflow-hidden">
                <Image src={s.icon} alt={s.name} fill className="object-contain p-1.5" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate">{s.name}</div>
                {s.notes ? (
                  <div className="text-neutral-400 text-xs truncate">{s.notes}</div>
                ) : null}
              </div>
            </div>

            {/* Category */}
            <div className="hidden md:block text-neutral-300 text-sm">{s.category}</div>

            {/* Since */}
            <div className="hidden sm:block text-neutral-300 text-sm">{s.since}</div>

            {/* Proficiency (replaces duration) */}
            <div className="justify-self-end text-neutral-200 text-sm tabular-nums">
              {s.proficiency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

